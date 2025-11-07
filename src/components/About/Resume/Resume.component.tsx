import { FC } from "react";
import "./Resume.style.scss";

export const Resume: FC = () => {
  return (
    <div className="resume-wrapper">
		<div className={"profile-img-wrapper"}>
			<img
				src="./assets/img/profiletest.png"
				alt="Profilbillede"
				className="profile-img "
			/>
		</div>

		<p className="mb-0 textbox">
			En kvalitetsbevidst frontend-udvikler med flair for design og stor
			faglig stolthed, som er drevet af at udvikle brugervenlige digitale
			løsninger. Jeg modtager feedback med tålmodighed og åbent sind, og
			vigtigst af alt motiveret af succesoplevelser.
		</p>
    </div>
  );
};
