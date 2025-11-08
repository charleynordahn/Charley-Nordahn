import { FC } from "react";
import "./SoicalLink.style.scss";
import { LinkedInIcon } from "../../../svg/icons/Linkedin";
import { SocialLinkProps } from "./SoicalLink.interface";

export const SocialLink: FC<SocialLinkProps> = (props) => {
  return (
    <a
      href="https://www.linkedin.com/in/charley-nordahn-4ba4b5206/"
      role="button"
      target="_blank"
      rel="noreferrer"
      className="btn btn-sm rounded-0 linkedin-btn text-white"
    >
      {props.navLink ? <LinkedInIcon fill="white" /> : "LinkedIn"}
    </a>
  );
};
