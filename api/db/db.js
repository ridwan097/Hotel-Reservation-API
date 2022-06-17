import mongoose from 'mongoose';
import dotenv from 'dotenv';
dotenv.config();
const db = process.env.MONGO_URI || '';

const connect = async () => {
  try {
    await mongoose.connect(db, { useNewUrlParser: true });

    console.log('mongo db connected');
  } catch (e) {
    console.log(e.message, 'failed here');
    throw error;
  }
};

export default connect;
