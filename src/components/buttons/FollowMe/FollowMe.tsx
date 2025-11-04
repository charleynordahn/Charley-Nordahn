import { FC } from "react";
import "./FollowMe.style.scss";

export const FollowMe: FC = () => {
  return (
    <div className="container-fluid p-0">
      <div className="row align-items-center mb-2">
        <div className="col">
          <b>Følg mig her</b>
        </div>
      </div>
      <div className="row">
        <div className="col">
          <a
            href="https://www.linkedin.com/in/charley-nordahn-4ba4b5206/"
            role="button"
            target="_blank"
            rel="noreferrer"
            className="btn btn-lg rounded-0 linkedin-btn text-white"
          >
            LinkedIn
          </a>
        </div>
      </div>

      <a className="tester" href="mailto: mail@charleynordahn.dk"></a>
    </div>
  );
};
