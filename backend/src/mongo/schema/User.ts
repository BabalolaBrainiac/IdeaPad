import {Schema} from "mongoose";
import mongoCon from "../dbCon";
import IUser from "../../interface/IUser";

const userSchema = new Schema(
    {
        firstName: String,
        lastName: String,
        email: String,
        phoneNumber: String,
        avatarUrl: {
            type: String,
            required: false
        },
        createdAt: {
            type: Date,
            default: new Date()
        },

        updatedAt: {
            type: Date,
            default: new Date()
        },
        notes: {
            type: [String],
            required: false
        },
        password: String,
        isActive: {
            type: Boolean,
            required: true,
            default: true
        },
        deactivated: Boolean,
    },
    {timestamps: {createdAt: true, updatedAt: true}}
);
export const Users = mongoCon.model<IUser>("users", userSchema);
