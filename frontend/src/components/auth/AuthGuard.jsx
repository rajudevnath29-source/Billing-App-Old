// src/components/AuthGuard.jsx
import { Navigate, Outlet } from "react-router-dom";
import Cookies from "js-cookie";

export default function AuthGuard() {
  const token = Cookies.get("auth_token");

  if (!token) {
    return <Navigate to="/signin" replace />;
  }

  return <Outlet />;
}
