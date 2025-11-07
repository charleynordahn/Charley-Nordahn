import React, { useState, useEffect } from "react";
import "./Name.style.scss";

export const TypingName: React.FC = () => {
  const [text, setText] = useState("");
  const [done, setDone] = useState(false);

  const typeSpeed = 140;
  const deleteSpeed = 110;

  useEffect(() => {
    const sleep = (ms: number) =>
      new Promise((resolve) => setTimeout(resolve, ms));
    const runTyping = async () => {
      let currentText = "";

      // Step 1: type typo "Charlie"
      const typo = "<h1>Charlie";
      for (let i = 0; i < typo.length; i++) {
        currentText += typo[i];
        setText(currentText);
        await sleep(typeSpeed);
      }

      // Step 2: delete "e" then "i"
      currentText = currentText.slice(0, -1); // delete "e"
      setText(currentText);
      await sleep(deleteSpeed);

      currentText = currentText.slice(0, -1); // delete "i"
      setText(currentText);
      await sleep(deleteSpeed);

      // Step 3: type corrected letters "ey"
      currentText += "e";
      setText(currentText);
      await sleep(typeSpeed);

      currentText += "y";
      setText(currentText);
      await sleep(typeSpeed);

      // Step 4: type rest of name " Nordahn"
      const rest = " Nordahn</h1>";
      for (let i = 0; i < rest.length; i++) {
        currentText += rest[i];
        setText(currentText);
        await sleep(typeSpeed);
      }

      // Step 5: mark done to trigger blinking
      setDone(true);
    };

    runTyping();
  }, []);

  return (
    <div className={`text-white typing ${done ? "done" : ""}`}>{text}</div>
  );
};
