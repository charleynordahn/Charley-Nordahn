import { IconSvg } from "../../../svg/icons/icon.interface";

export interface ToolProps {
  id: number;
  icon: React.ComponentType<IconSvg>;
  title: string;
}
