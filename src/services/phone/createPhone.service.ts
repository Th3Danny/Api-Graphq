import * as PhonesRepository from "../../repositories/phoneRepository";
import { CreatePhoneDto } from "../../entities/phone/createPhone.dto";

export const createPhoneService = async (
    model:string,
    brand:string,
    stock:number  
):Promise<CreatePhoneDto> => {
    try {
        await PhonesRepository.createPhone(model, brand, stock);
        const cell = {
            model,
            brand,
            stock
        };
        console.log(cell);
        return cell

    }catch(err:any){
        throw new Error(err);
    }
};