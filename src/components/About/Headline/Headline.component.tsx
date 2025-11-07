import { FC } from "react";
import {TypingName} from "../../animations/Name/Name.component";
import "./Headline.style.scss"

export const Headline: FC = () => {
	return (
		<div id="headline" className="d-flex flex-column align-items-center mb-3">
			<div className="headline bg-black text-white w-100 p-3">
				<TypingName />
			</div>

			<div className="subheading w-100 mt-2 mb-4 ">
				Frontend-udvikler med flair for design
			</div>
		</div>
	);
};
