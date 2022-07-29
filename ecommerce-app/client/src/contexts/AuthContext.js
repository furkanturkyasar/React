import { Flex, Spinner } from "@chakra-ui/react";
import { useState, createContext, useContext, useEffect } from "react";
import { fetchMe, fetchLogout } from "../api";

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
  const [user, setUser] = useState(null);

  const [loggedIn, setLoggedIn] = useState(false);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    (async () => {
      try {
        const loginData = JSON.parse(localStorage.getItem("loginData"));
        const me = await fetchMe();

        if (loginData !== null) {
          const newME = me.find((item) => item.email === loginData.email);
          setLoggedIn(true);
          setUser(newME);
        }
        setLoading(false);
      } catch (e) {
        setLoading(false);
      }
    })();
  }, []);

  const login = (data) => {
    setLoggedIn(true);
    setUser(data);

    localStorage.setItem("loginData", JSON.stringify(data));
  };

  const logout = async (callback) => {
    setLoggedIn(false);
    setUser(null);
    localStorage.removeItem("loginData");
    await fetchLogout();
    callback();
  };

  const values = {
    loggedIn,
    user,
    login,
    logout,
  };

  if (loading) {
    <Flex justifyContent="center" alignItems="center" height="100vh">
      <Spinner
        thickness="4px"
        speed="0.65"
        emptyColor="gray.200"
        size="xl"
        color="red.500"
      />
    </Flex>;
  }

  return <AuthContext.Provider value={values}>{children}</AuthContext.Provider>;
};

export const useAuth = () => useContext(AuthContext);
