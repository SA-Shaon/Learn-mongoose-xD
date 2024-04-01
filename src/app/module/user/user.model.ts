import { Schema, model } from "mongoose";
import { IUser, IUserMethods, UserModel } from "./user.interface";

const userSchema = new Schema<IUser, UserModel, IUserMethods>({
  id: {
    type: String,
    unique: true,
    required: true,
  },
  role: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
  name: {
    firstName: {
      type: String,
      required: true,
    },
    middleName: {
      type: String,
    },
    lastName: {
      type: String,
      required: true,
    },
  },
  dateOfBirth: {
    type: String,
    require: true,
  },
  gender: {
    type: String,
    required: true,
    enum: ["male", "female"],
  },
  email: {
    type: String,
    required: true,
  },
  contactNo: {
    type: String,
    required: true,
  },
  emergencyContactNo: {
    type: String,
    required: true,
  },
  presentAddress: {
    type: String,
    required: true,
  },
  permanentAddress: {
    type: String,
    required: true,
  },
});

userSchema.method("fullName", function fullName(): string {
  return this.name.firstName + " " + this.name.lastName;
});

userSchema.static("getAdminUsers", async function getAdminUsers(): Promise<
  IUser[]
> {
  const admins = await this.find({ role: "student" });
  return admins;
});

const User = model<IUser, UserModel>("Users", userSchema);

export default User;
