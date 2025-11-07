import { FC } from "react";
import { ToolProps } from "./Tool.interface.";
import "./Tool.style.scss"

export const Tool: FC<{ props: ToolProps }> = ({ props }) => {
  const Icon = props.icon;

  return (
    <div className="p-3 d-flex flex-column h-100 text-center bg-black">
      <div className="icon-wrapper flex-grow-1 d-flex justify-content-center align-items-center">
        <Icon fill="#ffffff" />
      </div>
      <b className="mt-2 text-white">{props.title}</b>
    </div>
  );
};
