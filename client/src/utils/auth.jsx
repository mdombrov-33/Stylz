import toast from "react-hot-toast";
import { redirect } from "react-router-dom";

export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export function logoutAction() {
  localStorage.removeItem("access_token");
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
