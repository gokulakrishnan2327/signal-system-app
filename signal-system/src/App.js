import React, { useState, useEffect } from "react";
import SignalCard from "./components/SignalCard";
import SignalTable from "./components/SignalTable";
import { io } from "socket.io-client";
import "./styles/styles.css";

const socket = io("http://localhost:5000");

const App = () => {
  const [signals, setSignals] = useState([]);
  const [history, setHistory] = useState([]);
  const [selectedSignal, setSelectedSignal] = useState(null);

  useEffect(() => {
    fetch("http://localhost:5000/api/signals")
      .then((res) => res.json())
      .then((data) => setSignals(data));

    socket.on("initialData", (data) => setSignals(data));

    socket.on("signalUpdate", (updatedSignal) => {
      setSignals((prevSignals) =>
        prevSignals.map((s) => (s.id === updatedSignal.id ? updatedSignal : s))
      );

      const newEntry = {
        id: updatedSignal.id,
        color: updatedSignal.color,
        timestamp: new Date().toLocaleString(),
      };

      setHistory((prev) => [newEntry, ...prev.slice(0, 9)]);
    });

    return () => socket.disconnect();
  }, []);

  return (
    <div className="app-container">
      <h1>Real-Time Signal System</h1>
      <div className="signal-container">
        {signals.map((signal) => (
          <SignalCard key={signal.id} signalData={signal} onClick={setSelectedSignal} />
        ))}
      </div>
      {selectedSignal && <SignalTable history={history} onClose={() => setSelectedSignal(null)} />}
    </div>
  );
};

export default App;
