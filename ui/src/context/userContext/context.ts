import React from "react";
import { User, UserSignIn } from "../../models/user";

export type UserContextProviderType = {
  users: User[];
  setUsers: React.Dispatch<React.SetStateAction<User[]>>;
  createUser: (data: User) => Promise<void>;
  signIn: (data: UserSignIn) => Promise<void>;
};

export const UserContext = React.createContext<
  UserContextProviderType | undefined
>(undefined);
