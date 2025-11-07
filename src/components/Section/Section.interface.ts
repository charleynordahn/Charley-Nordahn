import {ReactNode} from "react";

export interface SectionProps {
  children: ReactNode;
  backgroundColor?: string;
  height?: string;
  fill?: string;
  id: string;
  hasArrow?: boolean;
}
