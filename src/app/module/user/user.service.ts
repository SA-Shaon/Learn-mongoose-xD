import User from "./user.model";

export const create = async () => {
  const user = {
    id: "456dfddsfsd",
    role: "student",
    password: "454545fgfkgdfsdfdhdsfddfd",
    name: {
      firstName: "Sharia",
      middleName: "Akter",
      lastName: "Shaon",
    },
    dateOfBirth: "11-11-2001",
    gender: "male",
    email: "abc@gmail.com",
    contactNo: "01960112281",
    emergencyContactNo: "01716211705",
    presentAddress: "Dumuria Khulna",
    permanentAddress: "Dumuria Khulna",
  };
  const createU = new User(user);
  await createU.save();
  console.log(createU);
  return createU;
};
