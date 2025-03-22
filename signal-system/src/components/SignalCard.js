import React from "react";
import "../styles/styles.css";

const SignalCard = ({ signalData, onClick }) => {
  return (
    <div
      className={`signal-card ${signalData.color} ${signalData.color === "red" ? "active" : ""}`}
      onClick={() => onClick(signalData)}
    >
      <h3>Signal {signalData.id}</h3>
      <div className={`light ${signalData.color}`}></div>
    </div>
  );
};

export default SignalCard;
