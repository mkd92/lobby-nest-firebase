import { ReactNode } from "react";

export type Props = {
  children?: ReactNode;
};

export type CreateUserInput = {
  email: string;
  password: string;
};
