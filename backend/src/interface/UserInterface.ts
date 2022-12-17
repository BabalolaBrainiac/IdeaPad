import { Schema, Document } from "mongoose";
import NoteInterface from "./NoteInterface";

interface UserInterface extends Document {
  readonly userId: string;
  firstName: string;
  lastName: string;
  email: string;
  avatarUrl: string;
  createdAt?: Date;
  updatedAt?: Date;
  notes: Partial<NoteInterface>[];
  password?: string;
  isActive: boolean;
  deactivated: boolean;
}
