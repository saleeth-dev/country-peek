const mongoose = require('mongoose');

const bookSchema = new mongoose.Schema({
  name:{
    type:String
  },
  description:{
    type:String
  },
  price:{
    type:Number
  },
  authorName:{
    type:String
  }
});

module.exports = mongoose.model('Book', bookSchema);