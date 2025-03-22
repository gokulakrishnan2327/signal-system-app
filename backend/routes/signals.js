const express = require("express");
const Signal = require("../models/Signal");

const router = express.Router();

router.get("/", async (req, res) => {
    const { page = 1, limit = 10 } = req.query;
    const signals = await Signal.find()
      .sort({ timestamp: -1 })
      .limit(parseInt(limit))
      .skip((parseInt(page) - 1) * parseInt(limit));
    res.json(signals);
  });
  
router.post("/update", async (req, res) => {
  const { id, color } = req.body;
  await Signal.findOneAndUpdate({ id }, { color, timestamp: new Date() }, { upsert: true });
  res.json({ message: "Signal updated!" });
});

module.exports = router;
