const { Schema, model,  } = require("mongoose");
const User = require('../model/UserModel');
const mongoose = require('mongoose');

const itemSchema = new Schema({
  title: {
    type: String,
    minlength: 3,
    maxlength: 255,
    required: true,
  },
  desc: {
    type: String,
    default: "",
  },
  authorId:{
    type:Schema.Types.ObjectId,
    ref:"User",
  },
  photo:{
    type:String,
    required: true
  },
  collectionId:{
    type:Schema.Types.ObjectId,
    ref:'Collection'
  },
  categoryId:{
      type:Schema.Types.ObjectId,
    ref:'Category'
  }

});

const Item = model('Item',itemSchema);
module.exports = Item;
