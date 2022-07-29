import { Navigate } from "react-router-dom";
import { useAuth } from "../contexts/AuthContext";

const ProtectedRoute = ({ children, admin }) => {
  const { loggedIn, user } = useAuth();

  if (admin && user.role !== "admin") return <Navigate to="/" />;

  return loggedIn ? children : <Navigate to={"/"} />;
};

export default ProtectedRoute;
