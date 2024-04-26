import { GraphQLError } from "graphql";
import { getUsersService } from "../../../services/users/getUsers.service";

export default async (_root: any, args: { pag: number }) => {
  try {
    const { pag } = args;
    const res = await getUsersService(pag);
    return res;
  } catch (err: any) {
    throw new GraphQLError(err);
  }
};
