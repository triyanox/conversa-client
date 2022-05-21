import http from "./http";
import config from "../config/production.json";

const conBaseUrl = config.baseUrl + "/conversation";

// post a message
export const postMessage = (message: {
  sender: string;
  receiver: string;
  message: string;
}) => {
  return http.post(conBaseUrl, message);
};

// get conversation
export const getConversation = (sender: string, receiver: string) => {
  return http.get(conBaseUrl + `/${sender}/${receiver}`);
};

// delete conversation
export const deleteConversation = (id: string) => {
  return http.delete(conBaseUrl + `/${id}`);
};
