import http from "./http";
import config from "../config/production.json";

const userBaseUrl = config.baseUrl + "/users";

// create a user
export async function createUser(user: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await http.post(userBaseUrl, user);
  return localStorage.setItem("token", response.headers["x-auth-token"]);
}

// add a friend
export async function addFriend(friendEmail: string) {
  const response = await http.post(`${userBaseUrl}/friends/requests`, {
    friendEmail,
  });
  return response.data;
}

// accept a friend request
export async function acceptFriendRequest(id: string) {
  const response = await http.post(
    `${userBaseUrl}/friends/requests/accept/${id}`
  );
  return response.data;
}

// update user
export async function updateUser(user: {
  name: string;
  email: string;
  password: string;
}) {
  const response = await http.put(userBaseUrl, user);
  return response.data;
}

// delete user
export async function deleteUser() {
  const response = await http.delete(userBaseUrl);
  return response.data;
}
