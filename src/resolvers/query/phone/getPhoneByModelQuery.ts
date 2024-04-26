import { GraphQLError } from "graphql";
import { getPhoneByModelService } from "../../../services/phone/getPhoneByModel.service";

export default async (_root: any, args:any) => {
    try {
        const {model} = args;
        const res = await getPhoneByModelService(model)
        return res;
    } catch (err: any) {
        throw new GraphQLError(err);
      }
}