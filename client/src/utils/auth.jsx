import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

// Utility to get the expiration duration
export function getAuthTokenDuration() {
  const storedExpirationDate =
    localStorage.getItem("expiration") || sessionStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

// Utility to get the authentication token
export function getAuthToken() {
  const token =
    localStorage.getItem("access_token") ||
    sessionStorage.getItem("access_token");

  if (!token) {
    return null;
  }

  const tokenDuration = getAuthTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

// Utility to log out the user
export function logoutAction() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expiration");
  sessionStorage.removeItem("access_token");
  sessionStorage.removeItem("expiration");
  window.location.reload();
  return null;
}

// Utility to check if the user is authenticated
export function checkAuthLoader() {
  const token = getAuthToken();
  if (!token) {
    toast.error("You need to login to access this page");
    return redirect("/login");
  }
  return null;
}
