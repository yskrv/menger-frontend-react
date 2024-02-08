export interface User {
  id: number;
  firstName: string;
  lastName: string;
  email: string;
  password: string;
  type: "student" | "manager" | "admin";
  imageUrl: string;
  points: number;
  isActivated: boolean;
  createdAt: Date;
}