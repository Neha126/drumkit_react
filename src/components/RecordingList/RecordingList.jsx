import React from "react";
import drumPlayer from "../Drum/DrumPlayer";
import "./RecordingList.scss";
export default function RecordingList() {
  const data = JSON.parse(localStorage.getItem("saved_recordings")) || [];

  const handlePlay = (sequence, speed) => {
    drumPlayer(sequence, speed);
  };
  return (
    <div className="RecordingList">
      <p>Your Recordings</p>
      <ul>
        {data.map((item) => (
          <li key={item.date}>
            <div className="left">
              <h3>{new Date(item.date).toLocaleString()}</h3>
              <h4>{item.type}</h4>
            </div>
            <div className="right">
              <button
                className="primaryBtn"
                onClick={() => handlePlay(item.keySequence, 300)}
              >
                PLAY 0.5X
              </button>
              <button
                className="primaryBtn"
                onClick={() => handlePlay(item.keySequence, 200)}
              >
                PLAY 1X
              </button>
              <button
                className="primaryBtn"
                onClick={() => handlePlay(item.keySequence, 100)}
              >
                PLAY 2X
              </button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
}
