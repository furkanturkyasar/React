import { useAuth } from "../../contexts/AuthContext";
import { Text, Button } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";

const Profile = () => {
  let navigate = useNavigate();
  const { user, logout } = useAuth();

  const handleLogout = async () => {
    logout(() => {
      navigate("/");
    });
  };

  return (
    <div>
      <Text fontSize="22">Profile</Text>
      <code>{JSON.stringify(user)}</code>
      <br />
      <br />
      <Button
        colorScheme="blue"
        onClick={() => {
          handleLogout();
        }}
      >
        Log out
      </Button>
    </div>
  );
};

export default Profile;
