import { FC } from "react";
import { FollowMe } from "../buttons/FollowMe/FollowMe.component";

export const Contact: FC = () => {
  return (
    <div className="container-fluid p-0 content-wrapper-md text-white">
      <div className="row">
        <div className="col-12 col-sm">
          <div className="d-flex justify-content-center">
            <ul
              className="list-unstyled"
              style={{ width: "180px", marginBottom: "40px" }}
            >
              <li>
                <h2 className="sub-heading">Kontakt</h2>
              </li>
              <li>Charley Nordahn</li>
              <li>
                <a href="tel:+4561655664">61 47 56 64</a>
              </li>
              <li>
                <a href="mailto: nordahn@protonmail.com">
                  nordahn@protonmail.com
                </a>
              </li>
              <li className="mt-3">
                <FollowMe />
              </li>
            </ul>
          </div>
        </div>

        <div className="col">
          <div className="d-flex justify-content-center">
            <ul className="list-unstyled" style={{ width: "180px" }}>
              <li>
                <h2 className="sub-heading">Referencer</h2>
              </li>
              <li>TIMESAFE ApS</li>
              <li>Lead Developer</li>
              <li>Per Bloch Andersen</li>
              <li>
                <a href="tel:+4531121054">31 12 10 54</a>
              </li>
              <li className="mb-3">
                <a href="mailto:per@timesafe.dk">per@timesafe.dk</a>
              </li>

              <li>TIMESAFE ApS</li>
              <li>CTO & Partner</li>
              <li>Jesper Horsmark</li>
              <li>
                <a href="tel:+4520402099">20 40 20 99</a>
              </li>
              <li>
                <a href="mailto:jesper@timesafe.dk">jesper@timesafe.dk</a>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};
