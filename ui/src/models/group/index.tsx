import { User } from "../user";

export interface Group {
  id: number,
  users: User[],
}