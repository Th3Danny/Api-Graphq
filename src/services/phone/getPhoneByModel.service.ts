import * as PhonesRepository from "../../repositories/phoneRepository";
import { Phone } from "../../entities/phone/phone.entity";

export const getPhoneByModelService = async (model: string): Promise<Phone> => {
    try {
      const res = await PhonesRepository.getPhoneByModel(model);
      console.log(res)
      return res;
    } catch (err: any) {
      throw new Error(err);
    }
  };