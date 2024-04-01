import express from "express";
import {
  createUser,
  getUser,
  getUserById,
  getAdminUsers,
} from "./user.controller";
const router = express.Router();

router.get("/", getUser);
router.post("/create", createUser);
router.get("/allAdmin", getAdminUsers);
router.get("/:id", getUserById);

export default router;
