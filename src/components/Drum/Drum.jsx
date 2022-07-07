import "./drum.scss";
import React from "react";
import InstrumentPart from "../InstrumentPart/InstrumentPart";

export default function Drum() {
  return (
    <div className="set">
      <InstrumentPart
        keyLetter={"w"}
        image="/images/tom1.png"
        sound="/sounds/tom-1.mp3"
        instrumentType="drum"
      />
      <InstrumentPart
        keyLetter={"a"}
        image="/images/tom2.png"
        sound="/sounds/tom-2.mp3"
        instrumentType="drum"
      />
      <InstrumentPart
        keyLetter={"s"}
        image="/images/tom3.png"
        sound="/sounds/tom-3.mp3"
        instrumentType="drum"
      />
      <InstrumentPart
        keyLetter={"d"}
        image="/images/tom4.png"
        sound="/sounds/tom-4.mp3"
        instrumentType="drum"
      />
      <InstrumentPart
        keyLetter={"j"}
        image="/images/snare.png"
        sound="/sounds/snare.mp3"
        instrumentType="drum"
      />
      <InstrumentPart
        keyLetter={"k"}
        image="/images/crash.png"
        sound="/sounds/crash.mp3"
        instrumentType="drum"
      />
      <InstrumentPart
        keyLetter={"l"}
        image="/images/kick.png"
        sound="/sounds/kick-bass.mp3"
        instrumentType="drum"
      />
    </div>
  );
}
