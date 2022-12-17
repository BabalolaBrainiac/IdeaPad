import { Schema, Document } from "mongoose";
import INote from "./INote";

interface IUser extends Document {
  readonly userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  notes: Partial<INote>[];
  password?: string;
  isActive: boolean;
  deactivated: boolean;
}

export default IUser;
