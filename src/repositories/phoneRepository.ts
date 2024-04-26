import { db } from "../config/db";
import { Phone } from "../entities/phone/phone.entity";


export const getPhones = async (limit: number): Promise<Phone[]> => {
  try {
    const query = `select * from phone limit ${limit}, 5`;
    const result = await db.execute(query);
    console.log(result[0]);
    return result[0] as Phone[];
  } catch (err: any) {
    throw new Error(err);
  }
};

export const getPhoneById = async (id: number): Promise<Phone> => {
  try {
    const query = "select * from phone where id = ?";
    const result = await db.execute(query, [id]);
    return result[0] as unknown as Phone;
  } catch (err: any) {
    throw new Error(err);
  }
};


export const getPhoneByModel = async (model: string): Promise<Phone> => {
  try {
    const query = "select * from phone where model = ?";
    const result = await db.execute(query, [model]);
    return result[0] as unknown as Phone;
  } catch (err: any) {
    throw new Error(err);
  }
};

export const createPhone = async (
  model: string,
  brand: string,
  stock: number
): Promise<void> => {
  try {
    const query = "insert into phone (model, brand, stock) values (?, ?, ?)";
    await db.execute(query, [model, brand, stock]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const updatePhone = async (
  id: number,
  model: string,
  brand: string,
  stock: number
): Promise<void> => {
  try {
    const query =
      "update phone set model = ?, stock = ?, brand = ? where id = ?";
    await db.execute(query, [model, stock, brand, id]);
  } catch (err: any) {
    throw new Error(err);
  }
};

export const deletePhone = async (id: number): Promise<void> => {
  try {
    const query = "delete from phone where id = ?";
    await db.execute(query, [id]);
  } catch (err: any) {
    throw new Error(err);
  }
};
