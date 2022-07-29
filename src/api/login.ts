import { post } from "./requests";
import { BASEURL } from "./url";

interface LoginUser {
  email: string;
  password: string;
}

export async function loginUser(data: LoginUser) {
  const endpoint = BASEURL + "login";
  const res = await post(endpoint, data);
  return res;
}
