import {Schema, Document } from 'mongoose'
import mongoCon from '../dbCon'
import IUser from "../../interface/IUser";

const userSchema =  new Schema({
        firstName: String,
        lastName: String,
        email: String,
        avatarUrl: String,
        createdAt: Date,
        updatedAt: Date,
        notes: {
                type: [String],
        },
        password: String,
        isActive: Boolean,
        deactivated: Boolean
},
{ timestamps: { createdAt: true, updatedAt: true } },

)
export const Users = mongoCon.model<IUser>('users', userSchema);
