import mongoose from 'mongoose';

const userSchema = mongoose.Schema({
  _id: {type: String},
  fName: {type: String, required: true},
  lName: {type: String, required: true},
  email: {type: String, required: true},
  uName: {type: String},
  pwd: {type: String, required: true},
});

export default mongoose.model("users", userSchema);