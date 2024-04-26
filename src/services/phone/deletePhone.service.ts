import * as PhonesRepository from "../../repositories/phoneRepository";
import { Phone } from "../../entities/phone/phone.entity";

export const deletePhoneService = async (id: number): Promise<Phone> => {
    try {
      const phone: Phone = await PhonesRepository.getPhoneById(id);
      if (phone) {
        await PhonesRepository.deletePhone(id);
        return phone;
      }
      throw new Error("Phone not found");
    } catch (err: any) {
      throw new Error(err);
    }
  };