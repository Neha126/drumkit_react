import React, { useEffect } from "react";
import { useContext } from "react";
import { AppContext } from "../../contexts/AppContext";

export default function InstrumentPart({
  image,
  keyLetter,
  instrumentType,
  sound,
}) {
  const { keys } = useContext(AppContext);
  const [keySequence, setKeySequence] = keys;
  const handlekeyPress = (event) => {
    if (event.key.toLowerCase() === keyLetter) {
      const inst = new Audio(sound);
      inst.play();
      setKeySequence((prev) => [...prev, keyLetter]);
    }
  };
  useEffect(() => {
    document.addEventListener("keypress", handlekeyPress);
    return () => {
      document.removeEventListener("keypress", handlekeyPress);
    };
  }, [keyLetter, sound]);
  const handlePlay = () => {
    const inst = new Audio(sound);
    inst.play();
    setKeySequence((prev) => [...prev, keyLetter]);
  };
  return (
    <div className={`box ${instrumentType}`} onClick={handlePlay}>
      <p className="key_letter">{keyLetter}</p>
      <img src={image} alt="" srcSet="" />
    </div>
  );
}
