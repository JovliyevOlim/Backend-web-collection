const { Schema, model, default: mongoose } = require("mongoose");

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
    type:mongoose.Schema.Types.ObjectId,
    ref:"User",
  }

});


module.exports = model('Item',itemSchema);
