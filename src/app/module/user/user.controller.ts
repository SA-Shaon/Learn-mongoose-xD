import { Request, Response } from "express";
import { create } from "./user.service";

export const createUser = async (req: Request, res: Response) => {
  console.log("hitted");
  const user = await create();
  res.status(201).json({
    status: "Success",
    data: user,
  });
};
