export interface People {
  id: number;
  name: string;
  age: number;
  email: string;
  isActive: boolean;
}

export const people: People[] = [
  {
    id: 1,
    name: "Alice Johnson",
    age: 28,
    email: "alice.johnson@example.com",
    isActive: true,
  },
  {
    id: 2,
    name: "Bob Smith",
    age: 35,
    email: "bob.smith@example.com",
    isActive: false,
  },
  {
    id: 3,
    name: "Charlie Davis",
    age: 42,
    email: "charlie.davis@example.com",
    isActive: true,
  },
  {
    id: 4,
    name: "Dana Lee",
    age: 24,
    email: "dana.lee@example.com",
    isActive: true,
  },
  {
    id: 5,
    name: "Evan Taylor",
    age: 30,
    email: "evan.taylor@example.com",
    isActive: false,
  },
];
