import { UserContextProvider } from "./userContext";

export const ContextProvider = ({
  children,
}: {
  children: React.ReactNode;
}) => {
  return <UserContextProvider>{children}</UserContextProvider>;
};
