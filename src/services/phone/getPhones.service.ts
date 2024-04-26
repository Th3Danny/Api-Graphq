import * as PhonesRepository from "../../repositories/phoneRepository";
import { Phone } from "../../entities/phone/phone.entity";

export const getPhonesService = async (page: number): Promise<Phone[]> => {
    try {
      const pageLimit = (page - 1)*5;
      const res = await PhonesRepository.getPhones(pageLimit);
      console.log(res)
      return res;
    } catch (err: any) {
      throw new Error(err.message);
    }
  };