const { Schema, model } = require("mongoose");

const UserSchema = new Schema(
  {
    username: {
      type: String,
      lowerCase: true,
      minlength: 4,
      maxlength: 20,
      unique: true,
      required: true,
    },
    email: {
      type: String,
      unique: true,
      required: true,
    },
    password: {
      type: String,
      minlength: 5,
      maxlength: 12,
      required: true,
    },
  },
  {
    timestamps: true,
  }
);


module.exports = model("User", UserSchema);
