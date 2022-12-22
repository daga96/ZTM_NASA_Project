const mongoose = require("mongoose");
const launchesSchema = new mongoose.Schema({
  flightNumber: {
    type: Number,
    required: true,
    default: 100,
    min: 100,
    max: 999,
  },
  mission: { type: String, required: true },
  rocket: String,
  launchDate: Date,
  target: {
    type: String,
  },
  customers: Array,
  upcoming: Boolean,
  success: Boolean,
});

module.exports = mongoose.model("Launch", launchesSchema);
