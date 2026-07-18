import React from "react";
import { HeartOff } from "lucide-react";
import "./EmptyState.css";

const EmptyState = ({ onGoBack }) => {
  return (
    <div className="empty-state">
      <HeartOff size={70} color="white" />

      <h2>No favorite images yet ❤️</h2>

      <p>Add some images to your favorites.</p>

      <button onClick={onGoBack}>
        Go Back
      </button>
    </div>
  );
};

export default EmptyState;