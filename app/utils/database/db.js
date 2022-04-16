const mongoose = require("mongoose");
require("dotenv").config();
//use this link if u use local db
const urlDb = process.env.MONGO_DB || "mongodb://localhost:27017/agenda";
//use this link if u use cloud db
const urlDbCloud =
  "mongodb+srv://root:root@cluster0.pynah.mongodb.net/agenda?retryWrites=true&w=majority";
const connectDb = async () => {
  try {
    const db = await mongoose.connect(urlDbCloud, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });
    const { name, host } = db.connection;
    console.log(name);
    console.log(`Connected with db name: ${name} in host: ${host}`);
  } catch (error) {
    console.error("Error to connect with db", error);
  }
};

module.exports = { connectDb };
