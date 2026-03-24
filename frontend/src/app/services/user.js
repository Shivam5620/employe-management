// userService.js
import ax from "../../lib/axios.js";
import {endpoints} from "../../lib/constants.js";
export const fetchUsers = () => {
  return ax({
    method: "get",
    url: endpoints.user.index,
  });
};

export const fetchAddUser = (data) => {
  return ax({
    method: "post",
    url: endpoints.user.index,
    data,
  });
};

export const fetchUpdateUser = (id, data) => {
  const url = endpoints.user.id.replace(":id", id);
  return ax({
    method: "put",
    url,
    data,
  });
};

export const fetchDeleteUser = (id) => {
  const url = endpoints.user.id.replace(":id", id);
  return ax({
    method: "delete",
    url,
  });
};
