import { User } from "../../entities/user/user.entity";
import * as UsersRepository from "../../repositories/usersRepository";

export const getUserByEmailService = async (email: string): Promise<User> => {
  try {
    const res = await UsersRepository.getUserByEmail(email);
    console.log(res)
    return res;
  } catch (err: any) {
    throw new Error(err);
  }
};
