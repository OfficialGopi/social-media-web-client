import { Navigate, Outlet } from "react-router-dom";

const ProtectedRoute = ({
  user,
  path = "/",
}: {
  user: boolean;
  path?: string;
}) => {
  if (user) {
    return <Outlet />;
  } else {
    return <Navigate to={path} />;
  }
};

export default ProtectedRoute;
