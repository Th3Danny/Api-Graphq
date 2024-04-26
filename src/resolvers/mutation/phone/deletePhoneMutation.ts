import { GraphQLError } from "graphql";
import { deletePhoneService } from "../../../services/phone/deletePhone.service";

export const deletePhone = async (_root: any, args: any) => {
    try {
      const { id } = args;
      const res = await deletePhoneService(id);
      return res;
    } catch (err: any) {
      throw new GraphQLError(err);
    }
  }; 