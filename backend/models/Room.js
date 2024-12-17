const mongoose = require('mongoose');

const roomSchema = new mongoose.Schema({
  roomNumber: { type: String, required: true, unique: true },
  capacity: { type: Number, required: true },
  price: { type: Number, required: true },
  isAvailable: { type: Boolean, default: true }
});

module.exports = mongoose.model('Room', roomSchema);