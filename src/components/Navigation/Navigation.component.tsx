import { FC, useState } from "react";
import { NavProps } from "./Navigation.interface";
import { LinkedInIcon } from "../../svg/icons/Linkedin";
import { SocialLink } from "../buttons/FollowMe/SoicalLink.component";

export const Navigation: FC<NavProps> = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="navigation-wrapper bg-black p-3 position-sticky top-0 start-0 z-3 position-relative">
      <div>
        <a
          href="/assets/pdf/cv-charley-nordahn.pdf"
          download="cv-charley-nordahn.pdf"
          className="btn btn-brand btn-sm me-2"
        >
          Download CV
        </a>

        <SocialLink navLink />
      </div>
      <button
        className={`burger-btn d-md-none ${isOpen ? "close" : ""}`}
        onClick={toggleNav}
      >
        <div className={`wile ${isOpen ? "C" : "O"}`}>
          <span className="dog">
            <i className="fa-solid fa-bars fa-xl"></i>
          </span>
          <span className="dog">
            <i className="fa-solid fa-xmark fa-xl"></i>
          </span>
        </div>
      </button>

      <div className={`sub ${isOpen ? "open" : ""}`}>
        {props.links.map((link) => (
          <a key={link.href} href={link.href} className="px-1">
            {link.label}
          </a>
        ))}
      </div>
    </nav>
  );
};
