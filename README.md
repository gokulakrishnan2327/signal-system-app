🚦 Real-Time Signal System Application
A real-time traffic signal monitoring system built using React, Node.js, MongoDB, and WebSockets (Socket.io). This application displays live traffic signals, stores updates in a database, and allows users to view the signal history.

📌 Features
✅ Real-Time Signal Updates – Traffic signals update in real-time.
✅ Signal Glow & Priority – Active red signals appear on top with a glowing effect.
✅ Database Integration – Stores signal changes with timestamps in MongoDB.
✅ Signal History Table – View past signal updates with timestamps.
✅ WebSocket Communication – Uses Socket.io for real-time data handling.
✅ Dark Mode Support – Toggle between light and dark modes.

🛠️ Prerequisites
Ensure you have the following installed before running the application:

Node.js (v16+)
MongoDB (v5+)
Git
📥 Installation Steps
1️⃣ Clone the Repository
sh
 
  
git clone https://github.com/gokulakrishnan2327/signal-system-app.git
cd signal-system-app
2️⃣ Install Backend Dependencies
sh
 
  
cd backend
npm install
3️⃣ Install Frontend Dependencies
sh
 
  
cd ../frontend
npm install
🚀 How to Start the Application
1️⃣ Start MongoDB
Ensure MongoDB is running. Use the command below:

Windows
sh
 
  
mongod --dbpath "C:\data\db"

 
  
sudo systemctl start mongodb
2️⃣ Start Backend Server
sh
 
  
cd backend
node server.js
✅ Expected Output: 
✅ Connected to MongoDB
🚀 Server running on port 5000
3️⃣ Start Frontend (React) 
  
cd frontend
npm start

✅ Expected Output:

Compiled successfully!
Local: http://localhost:3000

🔄 Application Workflow
Backend (Node.js + MongoDB + WebSockets)
WebSockets (Socket.io) sends live traffic signal updates.
MongoDB stores signal changes (red, yellow, green).
API (/api/signals) provides historical data.
Frontend (React)
Receives real-time updates via WebSockets.
Updates UI dynamically when a signal changes.
Displays signal history in a table (max 10 rows).
🔧 API Endpoints
📌 Get All Signals

http
 
  
GET /api/signals
✅ Response:

json
 
  
[
  { "id": 1, "color": "red", "timestamp": "2024-03-21T10:00:00Z" },
  { "id": 2, "color": "green", "timestamp": "2024-03-21T10:05:00Z" }
]
📌 Update a Signal

http
 
  
POST /api/signals/update
Content-Type: application/json
✅ Payload:

json
 
  
{
  "id": 1,
  "color": "yellow"
}


🤝 Contributing
Contributions are welcome! To contribute:

Fork the repository
Create a new branch (feature-branch)
Commit your changes
Push to GitHub & create a Pull Request
📩 Contact
For any issues or suggestions, feel free to contact me:
📧 Email: gokulakrish23gk@gmail.com
🔗 GitHub: gokulakrishnan2327

🎯 Your Application is Now Ready!
🚀 Now, anyone can easily set up and run the application! Let me know if you need further refinements. 🔥🔥
