const mongoose = require("mongoose");

const Schema = mongoose.Schema;

const profileSchema = new Schema({
  id: {
    type: String,
  },
  productName: {
    type: String,
    required: true,
  },
  quantity: {
    type: Number,
    required: true,
  },
  date: {
    type: String,
    required: true,
  },
});

const Profile = mongoose.model("Profile", profileSchema);
module.exports = Profile;