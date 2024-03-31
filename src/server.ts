import app from "./app";
import mongoose from "mongoose";

const port: Number = 5000;

async function Database() {
  try {
    await mongoose.connect("mongodb://127.0.0.1:27017/practice-mongoose");
    app.listen(port, () => {
      console.log(`🔥🔥 Database is listening on port ${port}`);
    });
  } catch (err) {
    console.log("Finding Error => ", err);
  }
}

Database();
