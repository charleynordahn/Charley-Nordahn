import { FC, Fragment } from "react";
import "./Expertise.style.scss"
import {areaOfExpertise} from "../../../data/expertise";

export const Expertise: FC = () => {
  return (
    <div className="expertise-wrapper">
      {areaOfExpertise.map((item) => (
        <Fragment key={item.id}>
          <div className="bg-black">
            {item.number}
          </div>
          <div className="bg-white text-black p-4">
            <b className="fw-bold fs-4">{item.title}</b>
            <p className="text-sm mb-0">{item.description}</p>
          </div>
        </Fragment>
      ))}
    </div>
  );
};
