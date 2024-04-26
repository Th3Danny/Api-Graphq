import { GraphQLError } from "graphql";
import { getPhonesService } from "../../../services/phone/getPhones.service";

export default async (_root: any, args: any) => {
    try{
        const { pag } = args;
        const res = await getPhonesService(pag)
        return res;
    } catch (err: any) {
      throw new GraphQLError(err);
    }
}