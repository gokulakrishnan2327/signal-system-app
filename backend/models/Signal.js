const mongoose = require("mongoose");

const SignalSchema = new mongoose.Schema({
  id: Number,
  color: String,
  timestamp: { type: Date, default: Date.now },
});

module.exports = mongoose.model("Signal", SignalSchema);

// CREATE TABLE signals (
//     id SERIAL PRIMARY KEY,
//     color VARCHAR(10),
//     timestamp TIMESTAMP DEFAULT CURRENT_TIMESTAMP
//   );
  