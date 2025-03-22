const express = require("express");
const http = require("http");
const cors = require("cors");
const { Server } = require("socket.io");
const { connectMongoDB } = require("./config");
const Signal = require("./models/Signal");

require("dotenv").config();
const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "http://localhost:3000" } });

app.use(cors());
app.use(express.json());

app.get("/api/signals", async (req, res) => {
  const signals = await Signal.find().sort({ timestamp: -1 }).limit(10);
  res.json(signals);
});

connectMongoDB();

io.on("connection", async (socket) => {
  console.log("User connected:", socket.id);
  const initialData = await Signal.find().sort({ timestamp: -1 }).limit(10);
  socket.emit("initialData", initialData);

  setInterval(async () => {
    const colors = ["red", "yellow", "green"];
    const randomColor = colors[Math.floor(Math.random() * colors.length)];

    const newSignal = await Signal.findOneAndUpdate(
      { id: 1 },
      { color: randomColor, timestamp: new Date() },
      { upsert: true, new: true }
    );

    io.emit("signalUpdate", newSignal);
  }, 5000);
});

server.listen(5000, () => console.log(`🚀 Server running on port 5000`));
