const mongoose = require("mongoose");

const connectDB = async () => {
  try {
  mongoose.set("useNewUrlParser", true);
  const db = await mongoose.connect(process.env.MONGO_URI);
  console.log(`MongoDB Connected: ${db.connection.host}`);
  
} catch (error) {
  console.log(error);
  process.exit(1);
}
};

module.exports = connectDB;
