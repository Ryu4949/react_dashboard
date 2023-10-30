import { users } from "./users";
import { codes } from "./codes";

export const useApi = () => {
  return { api: { user, codes } };
};
