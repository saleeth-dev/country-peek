const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    await mongoose.connect('mongodb://nodeapi:6yJzUTjiF4ANBMbj@ac-rpi6dej-shard-00-00.tvb0haw.mongodb.net:27017,ac-rpi6dej-shard-00-01.tvb0haw.mongodb.net:27017,ac-rpi6dej-shard-00-02.tvb0haw.mongodb.net:27017/mydb?ssl=true&replicaSet=atlas-pyl4qs-shard-0&authSource=admin&appName=nodeapi');
    console.log(`DB Connected to ${mongoose.connection.host}`);
  } catch (error) {
    console.error(error);
    process.exit(1);
  }
};

module.exports = connectDB;


// mongodb+srv://nodeapi:9O4S1tKYc792GsFu@nodeapi.tvb0haw.mongodb.net/mydb

//mongodb://127.0.0.1:27017/mydb
// mongodb://127.0.0.1:27017/mydb


