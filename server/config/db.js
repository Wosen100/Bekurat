

const mongoose = require('mongoose');

const mongoURl ='mongodb+srv://wosen:wosen1122@cluster0.pszmqa3.mongodb.net/?retryWrites=true&w=majority'

const connectDB = async () => {
  try {
    const conn = await mongoose.connect(mongoURl, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    });

    console.log("Database connected: " + conn.connections[0].host);
  } catch (error) {
    console.log("Error connecting to database: " + error);
  }
};

module.exports = connectDB;