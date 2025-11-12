import { FC } from "react";
import { TypingName } from "../../animations/TypingName/TypingName.component";
import "./Headline.style.scss";

export const Headline: FC = () => {
  return (
    <div id="headline" className="d-flex flex-column align-items-center mb-3">
      <TypingName />

      <div className="subheading w-100 my-2 text-black ">
        #Frontend-udvikler med flair for design
      </div>
    </div>
  );
};
