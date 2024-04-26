import { GraphQLError } from "graphql";
import { User } from "../../../entities/user/user.entity";
import { getUserByEmailService } from "../../../services/users/getUsersByEmail.service";

export default async (_root: any, args: User) => {
  try {
    const { email } = args;
    const res = await getUserByEmailService(email);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
