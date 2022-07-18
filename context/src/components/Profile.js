import { useContext, useState } from "react";

import UserContext from "../context/UserContext";

function Profile() {
  const { user, setUser } = useContext(UserContext);
  const [loading, setLoading] = useState(false);

  const handleLogin = () => {
    setLoading(true);
    setTimeout(() => {
      setUser({ id: 1, username: "fturk", bio: "lorem" });
      setLoading(false);
    }, 1500);
  };

  const handleLogout = () => {
    setUser(null);
  };

  return (
    <div>
      {!user && (
        <button onClick={handleLogin}>
          {loading ? "loading..." : "Log in"}
        </button>
      )}

      <br />
      <code>{JSON.stringify(user)}</code>
      <br />
      {user && <button onClick={handleLogout}>Log out</button>}
    </div>
  );
}

export default Profile;
