import { IconSvg } from "./icon.interface";

export const HtmlIcon = (props: IconSvg) => {
  return (
    <svg
      className="svg-icon"
      viewBox="0 0 500 500"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M52.8574 20L88.6922 426.402L249.487 480L411.308 426.402L447.143 20H52.8574ZM369.313 151.326H180.59L184.799 202.049H365.103L351.139 354.424L250.616 382.147V382.455H249.487L148.143 354.424L141.982 276.594H190.96L194.554 315.714L249.487 330.603L304.625 315.714L310.786 251.848H139.415L126.273 102.348H373.831L369.313 151.326Z"
        fill={props.fill}
      />
    </svg>
  );
};
