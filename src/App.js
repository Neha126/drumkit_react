import { useState } from "react";
import "./App.css";
import Drum from "./components/Drum/Drum";
import RecordingList from "./components/RecordingList/RecordingList";
import { AppContext } from "./contexts/AppContext";
function App() {
  const [isRecording, setIsRecording] = useState(false);
  const [keySequence, setKeySequence] = useState([]);
  const handleRecording = () => {
    if (!isRecording) {
      setKeySequence([]);
    } else {
      let existingRecordings = localStorage.getItem("saved_recordings");
      if (existingRecordings) {
        existingRecordings = JSON.parse(existingRecordings);
      } else {
        existingRecordings = [];
      }
      localStorage.setItem(
        "saved_recordings",
        JSON.stringify([
          ...existingRecordings,
          {
            date: Date.now(),
            type: "drum",
            keySequence,
          },
        ])
      );
    }
    setIsRecording(!isRecording);
  };
  return (
    <AppContext.Provider
      value={{
        keys: [keySequence, setKeySequence],
      }}
    >
      <div className="container">
        <h1 id="title">Drum 🥁 Kit</h1>
        <Drum />
        <button className="primaryBtn" onClick={handleRecording}>
          {isRecording ? "Save" : "Start"} Recording
        </button>
        <RecordingList />
      </div>
    </AppContext.Provider>
  );
}

export default App;
