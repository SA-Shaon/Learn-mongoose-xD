import { Request, Response } from "express";
import { create, getUsersFromDB } from "./user.service";

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
