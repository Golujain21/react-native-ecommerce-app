import mongoose from "mongoose";
import colors from "colors";
colors.setTheme({
  silly: "rainbow",
  input: "grey",
  verbose: "cyan",
  prompt: "grey",
  info: "green",
  data: "grey",
  help: "cyan",
  warn: "yellow",
  debug: "blue",
  error: "red",
});
const connectDB = async () => {
  try {
    await mongoose.connect(process.env.DATABASE);
    console.log(`Mongodb Connected ${mongoose.connection.host}`);
  } catch (error) {
    console.log(`Mongodb Error ${error}`.bgRed.white);
  }
};

export default connectDB;
