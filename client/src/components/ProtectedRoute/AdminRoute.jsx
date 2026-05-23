import { Navigate } from "react-router-dom";

function AdminRoute({ children }) {
  const user = JSON.parse(localStorage.getItem("user"));

  if (user?.role !== "admin" && user?.role !== "instructor") {
    return <Navigate to="/dashboard" replace />;
  }

  return children;
}

export default AdminRoute;
