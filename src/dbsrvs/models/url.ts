import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema(
  {
    userId: {
      type: String,
      required: true,
    },
    urls: [
      {
        url: {
          type: String,
          required: true,
        },
        miniUrl: {
          type: String,
          required: true,
        },
      },
    ],
  },
  {
    toJSON: {
      transform(doc, ret) {
        delete ret._id;
        delete ret.__v;
      },
    },
  },
);

const url = mongoose.model('url', urlSchema);
export { url as urlModel };
