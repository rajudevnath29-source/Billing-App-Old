import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import Cookies from "js-cookie";

export default function SignOut() {
  const navigate = useNavigate();

  useEffect(() => {
    // ✅ Remove auth-related cookies
    Cookies.remove("auth_token");
    Cookies.remove("token");
    Cookies.remove("user");

    // ✅ Optionally clear localStorage/sessionStorage
    localStorage.clear();

    // ✅ Redirect to login page
    navigate("/signin", { replace: true });
  }, [navigate]);

  return null; // No UI needed, just logic
}
