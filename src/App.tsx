import { FC } from "react";
import "./styles/global.scss";
import { ToolBox } from "./components/ToolBox/ToolBox.component";
import { toolIcons } from "./data/toolIcons";
import { Contact } from "./components/Contact/Contact.component";
import { About } from "./components/About/About.component";
import { Section } from "./components/Section/Section.component";
import { Navigation } from "./components/Navigation/Navigation.component";
import { navLinks } from "./data/navlinks";

export const App: FC = () => {
  return (
    <>
      <Navigation links={navLinks} />

      <Section id="about" backgroundColor={"bg-white"} hasArrow={false}>
        <About />
      </Section>

      <Section id="tool-box" backgroundColor={"bg-orange"}>
        <ToolBox toolIcons={toolIcons} />
      </Section>

      <Section id="contact" backgroundColor={"bg-black"} fill={"#f47523"}>
        <Contact />
      </Section>

      <small className="d-flex justify-content-center align-content-center w-100 bg-black text-iron p-2">
        copyright © 2025 Charley Nordahn
      </small>
    </>
  );
};
