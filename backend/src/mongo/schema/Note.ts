// import { Schema, Document } from "mongoose";
// import mongoCon from "../dbCon";
// import IUser from "../../interface/IUser";
// import INote from "../../interface/INote";
//
// const noteSchema = new Schema(
//   {
//     noteId: String,
//     userId: String,
//     title: String,
//     content: String,
//     description: String,
//     noteImage: String,
//     createdAt: Date,
//     updatedAt: Date,
//     type: {
//       type: String,
//       enum: ["IDEA", "WORK", "HOME", "PERSONAL"],
//       default: "IDEA",
//     },
//   },
//   { timestamps: { createdAt: true, updatedAt: true } }
// );
// export const Notes = mongoCon.model<INote>("notes", noteSchema);
