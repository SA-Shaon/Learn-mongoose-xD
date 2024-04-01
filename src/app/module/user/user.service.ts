import { IUser } from "./user.interface";
import User from "./user.model";

export const create = async (user: IUser): Promise<IUser> => {
  const createU = new User(user);
  await createU.save();
  console.log(createU.fullName());
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
export const getUserByIdFromDB = async (
  payload: string
): Promise<IUser | null> => {
  const user = await User.findOne({ _id: payload });
  return user;
};
export const getAdminUsersFromDB = async (): Promise<IUser | null> => {
  const user = await User.getAdminUsers();
  return user;
};
