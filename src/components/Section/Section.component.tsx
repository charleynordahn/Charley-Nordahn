import { FC } from "react";
import Arrow from "../../svg/arrow";
import { SectionProps } from "./Section.interface";
import "./Section.style.scss";

export const Section: FC<SectionProps> = (props) => {
  return (
    <div
      id={props.id}
      className={`section-wrapper d-flex flex-column ${
        props.backgroundColor || "bg-white"
      }`}
    >
      {props.hasArrow ?? true ? (
        <div className="d-flex justify-content-center">
          <Arrow fill={props.fill || "white"} />
        </div>
      ) : null}
      <div className="section-container d-flex justify-content-center align-items-center">
        {props.children}
      </div>
    </div>
  );
};
