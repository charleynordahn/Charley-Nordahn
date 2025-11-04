import "./styles/custom.scss";
import { ToolBox } from "./components/ToolBox/ToolBox";
import { toolIcons } from "./data/toolIcons";
import { Contact } from "./components/Contact/Contact";
import { About } from "./components/About/About";
import { Section } from "./components/Section/Section";
import { Navigation } from "./components/Navigation/Navigation";
import { navLinks } from "./data/navlinks";

function App() {
  return (
    <>
      <Navigation links={navLinks} />
      <Section id="about" backgroundColor={"bg-white"} fill={"#00a0a5"}>
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
}

export default App;
