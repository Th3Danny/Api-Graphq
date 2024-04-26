import * as UserRepository from "../../repositories/usersRepository";
import { User } from "../../entities/user/user.entity";

export const deleteUserService = async (id: number): Promise<User> => {
  try {
    const user: User = await UserRepository.getUserById(id);
    if (user) {
      await UserRepository.deleteUser(id);
      console.log(`Usuario eliminado:${user}`)
      return user;
    }
    throw new Error("User not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
