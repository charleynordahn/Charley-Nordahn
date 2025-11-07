import { FC } from "react";
import { Expertise} from "./Expertise/Expertise.component";
import { Resume} from "./Resume/Resume.component";
import {Headline} from "./Headline/Headline.component";

export const About: FC = () => {
  return (
    <div className="container-fluid  p-0 h-100 content-wrapper-xl">
      <div className="row">
        <div className="col">
			<Headline />
        </div>
      </div>

      <div className="row">
        <div className="col mb-4 mb-lg-0">
          <div className="d-flex align-items-end h-100">
            <Expertise />
          </div>
        </div>

        <div className="col-12 col-lg-auto">
          <Resume />
        </div>
      </div>
    </div>
  );
};
