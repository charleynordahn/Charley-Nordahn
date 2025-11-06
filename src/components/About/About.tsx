import { FC } from "react";
import { AreaOfExpertise } from "../AreaOfExpertise/AreaOfExpertise";
import { TypingName } from "../animations/Name/Name";
import { AboutMe } from "./AboutMe";

export const About: FC = () => {
  return (
    <div className="container-fluid  p-0 h-100 content-wrapper-xl">
      <div className="row">
        <div className="col">
          <div className="d-flex flex-column align-items-center">
            <div className="heading bg-black text-white w-100 p-3">
              <TypingName />
            </div>

            <div className="w-100 display-6 mt-2 mb-4">
              &lt;Frontend-udvikler med flair for design&gt;
            </div>
          </div>
        </div>
      </div>

      <div className="row">
        <div className="col mb-4 mb-lg-0">
          <div className="d-flex align-items-end h-100">
            <AreaOfExpertise />
          </div>
        </div>

        <div className="col-12 col-lg-auto">
          <AboutMe />
        </div>
      </div>
    </div>
  );
};
