import React from "react";
import { User, UserSignIn } from "../../models/user";
import { UserContext } from "./context";

export const UserContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  const [users, setUsers] = React.useState<User[]>([]);

  const createUser = async (data: User) => {
    await fetch(`${import.meta.env.VITE_API_URL}/users`, {
      method: "POST",
      body: JSON.stringify(data),
      headers: {
        "Content-Type": "application/json",
        "Authorization":
          "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6MTMsInVzZXJuYW1lIjoiYnJ5YXJub2NvNCIsImZpcnN0TmFtZSI6ImJyeWFuIiwibGFzdE5hbWUiOiJhcm5vY28iLCJwcm9maWxlUGljdHVyZSI6bnVsbCwiZ3JvdXBJZCI6bnVsbCwicGFzc3dvcmQiOiIkMmIkMTAkSGdlT1U1RlVUOE5iZ0FnV1lOUTF6ZWloQ25hWFVjTFFubGRTdzZvUTdrZnl6VEZRaG5ZMUsiLCJpYXQiOjE3MzI3NjIyMTYsImV4cCI6MTczMjg0ODYxNn0.iDeaqy_O2_q61NOur_rnFLBMmU5x3Qdlu6IVzTTbFSk",
      },
    });
  };
  const signIn = async (data: UserSignIn) => {
    
  }
  return (
    <UserContext.Provider value={{ users, setUsers, createUser, signIn }}>
      {children}
    </UserContext.Provider>
  );
};
