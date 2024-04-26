import { db } from "../config/db";
import { User } from "../entities/user/user.entity";

export const getUserByEmail = async (email: string): Promise<User> => {
  try {
    const query = "select * from users where email = ?";
    const result = await db.execute(query, [email]);
    return result[0] as unknown as User;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const getUserById = async (id: number): Promise<User> => {
  try {
    const query = "select * from users where email = ?";
    const result = await db.execute(query, [id]);
    return result[0] as unknown as User;
  } catch (err: any) {
    throw new Error(err);
  }
};
export const getUsers = async (limit: number): Promise<User[]> => {
  try {
    const query = `SELECT * FROM user LIMIT ${limit}, 5`;
    const result = await db.execute(query);
    console.log(result[0])
    return result[0] as User[];
  } catch (err: any) {
    throw new Error(err);
  }
};
export const createUser = async (
  email: string,
  password: string
): Promise<void> => {
  try {
    const query = "insert into user (email, password) values (?, ? )";
    await db.execute(query, [email, password]);
  } catch (err: any) {
    throw new Error(err);
  }
  
};
export const deleteUser = async (id: number): Promise<void> => {
  try {
    const query = "delete from user where id = ?";
    await db.execute(query, [id]);
  } catch (err: any) {
    throw new Error(err);
  }
};
