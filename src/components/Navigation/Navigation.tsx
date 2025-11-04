import { FC } from "react";
import { NavProps } from "./Navigation.interface";

export const Navigation: FC<NavProps> = (props) => {
  return (
    <nav className="bg-blue p-3 position-sticky top-0 start-0 w-100 gap-4 d-flex justify-content-center z-3">
      {props.links.map((link) => (
        <a key={link.href} href={link.href}>
          {link.label}
        </a>
      ))}
    </nav>
  );
};
