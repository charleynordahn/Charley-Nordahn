import { FC } from "react";
import { ToolBoxProps } from "./ToolBox.interface";
import {Tool} from "./Tool/Tool.component";


export const ToolBox: FC<ToolBoxProps> = ({ toolIcons }) => {
  return (
    <div className="container-fluid p-0 p-3 content-wrapper-lg">
      <h2 className="heading mb-3 text-center">Værktøjskassse</h2>
      <div className="row g-3 row-cols-2 row-cols-sm-3 row-cols-md-4 row-cols-lg-6">
        {toolIcons.map((item) => (
          <div key={item.id}>
            <Tool props={item} />
          </div>
        ))}
      </div>
    </div>
  );
};
