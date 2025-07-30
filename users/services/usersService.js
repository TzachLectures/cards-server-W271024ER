import { createUser, getUserByEmail } from "./usersDataService.js";

export const createNewUser = async (user) => {
  const newUser = await createUser(user);
  return newUser;
};

export const login = async (email, password) => {
  const user = await getUserByEmail(email);
  if (user?.password === password) {
    return "TOKEN TOKEN";
  }
  return null;
};
