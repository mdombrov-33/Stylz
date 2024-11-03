export function getAuthToken() {
  const token = localStorage.getItem("access_token");
  return token;
}
