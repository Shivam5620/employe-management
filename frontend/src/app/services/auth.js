import ax from "../../lib/axios";
import { endpoints } from "../../lib/constants";

// LOGIN
export const fetchLogin = async (data) => {
  const response = await ax({
    method: "post",
    url: endpoints.auth.login,
    data,
  });
  return response.data;
};

// LOGOUT
export const fetchLogout = async () => {
  const response = await ax({
    method: "post",
    url: endpoints.auth.logout,
  });
  return response.data;
};
