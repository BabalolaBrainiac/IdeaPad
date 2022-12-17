import { Schema, Document } from "mongoose";
import mongoCon from "../dbCon";
import IIdea from "../../interface/IIdea";
import { Users } from "./User";

const ideaSchema = new Schema(
  {
    ideaId: String,
    noteId: String,
    userId: String,
    content: String,
    description: String,
    imageUrl: String,
    contributors: {
      type: [String],
    },
    createdAt: Date,
    updatedAt: Date,
    proposedCompletion: Date,
    status: {
      type: String,
      enum: ["NEW", "PENDING", "IN-PROGRESS", "COMPLETE", "OUTDATED"],
      default: "IDEA",
    },
  },
  { timestamps: { createdAt: true, updatedAt: true } }
);
export const Notes = mongoCon.model<IIdea>("notes", ideaSchema);
