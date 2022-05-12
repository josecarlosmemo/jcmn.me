import React, { useState, useEffect } from "react";
import "./AnimatedLetters.scss";

function AnimatedLetters({ str, idx }) {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 4000);
  }, []);

  return (
    <span>
      {str.split("").map((char, i) => (
        <span key={char + i} className={`${letterClass} _${i + idx}`}>
          {char}
        </span>
      ))}
    </span>
  );
}

export default AnimatedLetters;
