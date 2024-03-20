"use server";
import { db } from "@/lib/db";
import { registerSchema } from "@/models/models";
import bcrypt from "bcryptjs";

function titleCase(str: string) {
  return str
    .toLowerCase()
    .split(" ")
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1))
    .join(" ");
}

export const register = async (values: registerSchema) => {
  const existingUser = await db.user.findUnique({
    where: {
      email: values.email,
    },
  });
  try {
    if (existingUser) {
      return { message: "Existing Email" };
    }

    const hashedPassword = await bcrypt.hash(values.password, 10);

    const user = await db.user.create({
      data: {
        name: titleCase(`${values.firstName} ${values.lastName}`),
        email: values.email,
        password: hashedPassword,
      },
    });

    return { message: "User Created" };
  } catch (error) {
    return { err: "Something went wrong." };
  }
};
