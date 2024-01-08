import mongoose from 'mongoose';
import { v4 as uuidv4 } from 'uuid';

const UserSchma = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
      default: uuidv4(),
    },
    mail: {
      type: String,
      required: true,
    },
    password: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
    // to delete _id, _v, password from return document
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
        delete ret.password;
      },
    },
  },
);

const User = mongoose.model('user', UserSchma);

export { User as UserModel };
