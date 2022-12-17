import { Schema, Document } from "mongoose";
import IUser from "./IUser";

interface IIdea extends Document {
  readonly ideaId: string;
  noteId?: string;
  userId: string;
  content?: string;
  description?: string;
  imageUrl?: string;
  contributors?: Partial<IUser>[];
  createdAt?: Date;
  updatedAt?: Date;
  proposedCompletion?: Date;
  status?: string;
}

export default IIdea;
