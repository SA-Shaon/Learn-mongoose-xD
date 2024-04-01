import { Request, Response } from "express";
import {
  create,
  getUserByIdFromDB,
  getUsersFromDB,
  getAdminUsersFromDB,
} from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  const user = await create(req.body);
  res.status(201).json({
    status: "Success",
    data: user,
  });
};

export const getUser = async (req: Request, res: Response) => {
  const users = await getUsersFromDB();
  res.status(201).json({
    status: "Success",
    data: users,
  });
};

export const getUserById = async (req: Request, res: Response) => {
  const { id } = req.params;
  const user = await getUserByIdFromDB(id);
  res.json(user);
};

export const getAdminUsers = async (req: Request, res: Response) => {
  const admins = await getAdminUsersFromDB();
  res.json(admins);
};
