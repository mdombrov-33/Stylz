import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

export function getAuthTokenDuration() {
  const storedExpirationDate = localStorage.getItem("expiration");
  const expirationDate = new Date(storedExpirationDate);
  const now = new Date();
  const duration = expirationDate.getTime() - now.getTime();
  return duration;
}

export function getAuthToken() {
  const token = localStorage.getItem("access_token");

  if (!token) {
    return null;
  }

  const tokenDuration = getAuthTokenDuration();

  if (tokenDuration < 0) {
    return "EXPIRED";
  }

  return token;
}

export function logoutAction() {
  localStorage.removeItem("access_token");
  localStorage.removeItem("expiration");
  window.location.reload();
  return null;
}

export function checkAuthLoader() {
  const token = getAuthToken();
  console.log(token);
  if (!token) {
    toast.error("You need to login to access cart");
    return redirect("/login");
  }
  return null;
}
