const URL: string = process.env.DATABASE_URL || "";
import mongoose from "mongoose";

const connectMongo = async () => {
  mongoose.connect(URL);
};

export default connectMongo;
