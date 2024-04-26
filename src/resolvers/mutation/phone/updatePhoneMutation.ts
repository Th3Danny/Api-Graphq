import { GraphQLError } from "graphql";
import { Phone } from "../../../entities/phone/phone.entity";
import { updatePhoneService } from "../../../services/phone/updatephone.service";

export const updatePhone = async (_root: any, args: Phone) => {
    try {
      const { id, model,brand,stock} = args;

      const res = await updatePhoneService(id, { model, brand,stock});
      return res;
    } catch (err: any) {
      throw new GraphQLError(err);
    }
  };