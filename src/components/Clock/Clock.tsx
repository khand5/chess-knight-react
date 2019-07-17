import React from "react";
import "./Clock.css";

const Clock: React.FC = () => {
  return (
    <div className="Clock-container">
      <div className="Clock">
        <p className="Clock-date">Date</p>
        <p className="Clock-time">Time</p>
        <p className="Clock-text">Comment</p>
      </div>
    </div>
  );
};

export default Clock;
