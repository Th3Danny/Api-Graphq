import { Phone } from "../../entities/phone/phone.entity";
import { UpdatePhoneDto } from "../../entities/phone/UpdatePhone.dto";
import * as PhoneRepository from "../../repositories/phoneRepository"
export const updatePhoneService = async (
  id: number,
  reqUser: UpdatePhoneDto
): Promise<UpdatePhoneDto> => {
  try {
    const originalUser: Phone = await PhoneRepository.getPhoneById(id);
    if (originalUser) {
      const newUser: Phone = {
        ...originalUser,
        ...reqUser,
      };
      const { model, brand, stock } = newUser;
      await PhoneRepository.updatePhone(id, model, brand, stock);
      return newUser;
    }
    throw new Error("Phone not found");
  } catch (err: any) {
    throw new Error(err);
  }
};
