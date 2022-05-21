import http from "./http";
import config from "../config/production.json";

// get the token from local storage
export function getToken() {
  let token;
  if (typeof window !== "undefined") {
    token = localStorage.getItem("token");
  }
  return token || "";
}

const authBasePath = config.baseUrl + "/auth";

// login function
export async function login(user: { email: string; password: string }) {
  const res = await http.post(authBasePath, user);
  return localStorage.setItem("token", res.data);
}

// log out function
export function logout() {
  localStorage.removeItem("token");
}
