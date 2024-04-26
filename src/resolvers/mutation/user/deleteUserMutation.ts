import { GraphQLError } from "graphql";
import { User } from "../../../entities/user/user.entity";
import { deleteUserService } from "../../../services/users/deleteUser.service";

export const deleteUser = async (_root: any, args: User) => {
  try {
    const { id } = args;
    const res = await deleteUserService(id);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
