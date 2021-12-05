import React, { useEffect, useState } from "react";

enum BeatType {
  Text,
  Sound,
  Video,
}

function useKeyPress(targetKey: string, callback: () => void) {
  // State for keeping track of whether key is pressed
  const [keyPressed, setKeyPressed] = useState<boolean>(false);
  // If pressed key is our target key then set to true
  function downHandler({ key }: { key: string }) {
    if (key === targetKey) {
      setKeyPressed(true);
      callback && callback();
    }
  }
  // If released key is our target key then set to false
  const upHandler = ({ key }: { key: string }) => {
    if (key === targetKey) {
      setKeyPressed(false);
    }
  };
  // Add event listeners
  useEffect(() => {
    window.addEventListener("keydown", downHandler);
    window.addEventListener("keyup", upHandler);
    // Remove event listeners on cleanup
    return () => {
      window.removeEventListener("keydown", downHandler);
      window.removeEventListener("keyup", upHandler);
    };
  }, []); // Empty array ensures that effect is only run on mount and unmount
  return keyPressed;
}

type Beat =
  | { type: BeatType.Text; text: string }
  | { type: BeatType.Sound; file: string };

const beats = [
  { type: BeatType.Text, text: "Listen to this" },
  { type: BeatType.Sound, file: "/ThirdManClip.mp3" },
];

export default function EssayPage() {
  const [index, setIndex] = useState(0);
  useKeyPress("ArrowRight", () => {
    setIndex((index) => index + 1);
  });
  useKeyPress("ArrowLeft", () => {
    setIndex((index) => index - 1);
  });
  let out;
  switch (beats[index].type) {
    case BeatType.Text:
      out = beats[index].text;
      break;
    default:
      out = <audio autoPlay={true} controls src={beats[index].file} />;
  }
  return (
    <div className="flex items-center justify-center w-full h-screen">
      <div className="text-xl">{out}</div>
    </div>
  );
}
