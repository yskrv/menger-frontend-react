import { Organization } from "./general";

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
  organizationId: number;
  organization: Organization;
}

export interface AuthResponse {
  user: User,
  token: string;
}