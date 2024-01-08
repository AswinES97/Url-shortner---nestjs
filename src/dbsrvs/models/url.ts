import mongoose from 'mongoose';

const urlSchema = new mongoose.Schema({
  userId: {
    type: String,
    required: true,
  },
  url: {
    type: String,
    required: true,
  },
});

const url = mongoose.model('url', urlSchema);
export { url as urlModel };
