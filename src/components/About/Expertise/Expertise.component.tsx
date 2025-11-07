import { FC, Fragment } from "react";
import "./Expertise.style.scss"
import {areaOfExpertise} from "../../../data/expertise";

export const Expertise: FC = () => {
  return (
    <div className="d-flex flex-column gap-4">
      {areaOfExpertise.map((item) => (
		<div  key={item.id} className="bg-white text-black ps-4 expertise-wrapper">
		<b className="fw-bold fs-4">{item.title}</b>
		<p className="text-sm mb-0">{item.description}</p>
		</div>
      ))}
    </div>
  );
};
