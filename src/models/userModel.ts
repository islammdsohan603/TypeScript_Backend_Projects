import { model, Schema } from "mongoose";

interface IUser {
  name: string;
  email: string;
  password: string;
}

const User = new Schema<IUser>({
  name: { type: String, trim: true, required: true },
  email: { type: String, trim: true, required: true },
  password: { type: String, trim: true, required: true },
});

const UserSchema = model<IUser>("user", User);
export default UserSchema;
