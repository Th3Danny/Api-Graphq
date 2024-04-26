import * as UsersRepository from "../../repositories/usersRepository";
import { CreateUser } from "../../entities/user/createUser.dto";

export const createUserservice = async (
    email: string,
    password: string
): Promise<CreateUser> => {
  try {
    await UsersRepository.createUser(email, password);
    return {
      email,
      password,
    };
  } catch (err: any) {
    throw new Error(err);
  }
};
