import { FC } from "react";
import "./AboutMe.style.scss";

export const AboutMe: FC = () => {
  return (
    <div className="about-me">
      <img
        src="./assets/img/profiletest.png"
        alt="Profilbillede"
        className="profile-img mb-4"
      />

      <p className="mb-0 textbox">
        En kvalitetsbevidst frontend-udvikler med flair for design og stor
        faglig stolthed, som er drevet af at udvikle brugervenlige digitale
        løsninger. Jeg modtager feedback med tålmodighed og åbent sind, og
        vigtigst af alt motiveret af succesoplevelser.
      </p>
    </div>
  );
};
