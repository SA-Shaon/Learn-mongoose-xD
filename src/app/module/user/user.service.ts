import { IUser } from "./user.interface";
import User from "./user.model";

export const create = async (user: IUser): Promise<IUser> => {
  const createU = new User(user);
  await createU.save();
  return createU;
};

export const getUsersFromDB = async (): Promise<IUser[] | undefined> => {
  try {
    const users = await User.find();
    return users;
  } catch (err) {
    console.log(err);
  }
};
