import { GraphQLError } from "graphql";
import { CreateUser } from "../../../entities/user/createUser.dto";
import { createUserservice } from "../../../services/users/createUser.service";

export const createUser = async (_root: any, args: CreateUser) => {
  try {
    const { email, password } = args;
    const res: CreateUser = await createUserservice(email, password);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
