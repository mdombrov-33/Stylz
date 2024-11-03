export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}

export function logoutAction() {
  localStorage.removeItem("access_token");
  window.location.reload();
  return null;
}
