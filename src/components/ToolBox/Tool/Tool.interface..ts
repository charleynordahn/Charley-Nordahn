import { IconSvg } from "../../../svg/icons/icon.interface";
import React from "react";

export interface ToolProps {
  id: number;
  icon: React.ComponentType<IconSvg>;
  title: string;
}
