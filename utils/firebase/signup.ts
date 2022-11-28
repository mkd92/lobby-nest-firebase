import { createUserWithEmailAndPassword, User } from "firebase/auth";
import { auth } from "./firebase";

type CreateUserInput = {
  email: string;
  password: string;
};
export const createUser = async (
  createUserInput: CreateUserInput
): Promise<User | null> => {
  try {
    const userCredentials = await createUserWithEmailAndPassword(
      auth,
      createUserInput.email,
      createUserInput.password
    );
    const user = userCredentials.user;
    return user;
  } catch (e) {
    console.log(e);
    return null;
  }
};
