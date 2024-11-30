export interface User {
  id?: number;
  username: string;
  firstName: string;
  lastName: string;
  profilePicture?: string;
  password: string;
  groupId?: number;
}

export interface UserSignIn {
  username: string;
  password: string;
}
