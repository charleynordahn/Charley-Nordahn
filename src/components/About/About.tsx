import { FC } from "react";

export const About: FC = () => {
  return (
    <div className="container-fluid p-0 content-wrapper-md">
      <div className="row">
        <div className="col-12 p-3">
          <h1 className="heading">Frontend-udvikler med flair for design</h1>
        </div>
      </div>
      <div className="row">
        <div className="col-12 col-md-auto">
          <div className="d-flex justify-content-center align-items-center">
            <img
              src="./assets/img/profile.png"
              alt="Profilbillede"
              className="rounded-circle"
              width={"180px"}
              height={"180px"}
            />
          </div>
        </div>
        <div className="col">
          <div className="d-flex align-content-center justify-content-center flex-column w-100 h-100 p-3">
            <p>
              Er døbt Charley Nordahn og har i 38 år haft begge ben forankret i
              den jyske muld. Jeg er en kvalitetsbevidst frontend-udvikler med
              flair for design og stor faglig stolthed, som er drevet af at
              udvikle brugervenlige digitale løsninger. Jeg modtager feedback
              med tålmodighed og åbent sind, og vigtigst af alt motiveret af
              succesoplevelser.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};
