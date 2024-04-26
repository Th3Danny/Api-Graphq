import { User } from "../../entities/user/user.entity";
import * as UsersRepository from "../../repositories/usersRepository";

export const getUsersService = async (page: number): Promise<User[]> => {
  try {
    const pageLimit = (page - 1);
    console.log(pageLimit)
    const res = await UsersRepository.getUsers(pageLimit);
    return res;
  } catch (err: any) {
    throw new Error(err.message);
  }
};
