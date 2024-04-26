import { GraphQLError } from "graphql";
import { CreatePhoneDto } from "../../../entities/phone/createPhone.dto";
import { createPhoneService } from "../../../services/phone/createPhone.service";

export const createPhone = async (_root: any, args: CreatePhoneDto) => {
    try {
      const {model , brand, stock } = args;
      const res: CreatePhoneDto = await createPhoneService(model,brand,stock);
      return res;
    } catch (err: any) {
      throw new GraphQLError(err);
    }
  };
  