import { Schema, Document } from "mongoose";

interface INote extends Document {
  readonly noteId: string;
  userId: string;
  title?: string;
  content?: string;
  description?: string;
  noteImage?: string;
  createdAt?: Date;
  updatedAt?: Date;
  type: string;
}

export default INote;
