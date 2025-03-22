import React from "react";
import "../styles/styles.css";

const SignalTable = ({ history, onClose }) => {
  return (
    <div className="modal">
      <div className="modal-content">
        <h3>Signal History</h3>
        <table>
          <thead>
            <tr>
              <th>Signal Color</th>
              <th>Timestamp</th>
            </tr>
          </thead>
          <tbody>
            {history.map((entry, index) => (
              <tr key={index}>
                <td>{entry.color}</td>
                <td>{entry.timestamp}</td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={onClose}>Close</button>
      </div>
    </div>
  );
};

export default SignalTable;
