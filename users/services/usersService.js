import { generateToken } from "../../auth/providers/jwtProvider.js";
import { comparePassword, generatePassword } from "../helpers/bcrypt.js";
import { createUser, getUserByEmail } from "./usersDataService.js";

export const createNewUser = async (user) => {
  let hashPass = generatePassword(user.password);
  user.password = hashPass;
  const newUser = await createUser(user);
  return newUser;
};

export const login = async (email, password) => {
  const user = await getUserByEmail(email);
  if (comparePassword(password, user?.password)) {
    return generateToken(user);
  }
  return null;
};
