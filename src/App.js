import { Fragment } from "react";
import { CertificatePart } from "./Components/CertificatePart/CertificatePart";
import { Contact } from "./Components/Contact/Contact";
import { Footer } from "./Components/Footer/Footer";
import { MobileNavbar } from "./Components/Navbar/MobileNavbar";
import { Navbar } from "./Components/Navbar/Navbar";
import { SkillPart } from "./Components/SkillPart/SkillPart";
import { Timeline } from "./Components/Timeline/Timeline";
import TopPartMain from "./Components/TopPart/TopPartMain";
import { ToTop } from "./Components/ToTop/ToTop";

function App() {
  return (
    <Fragment>
      <ToTop />
      <Navbar />
      <TopPartMain />
      <CertificatePart />
      <SkillPart />
      <MobileNavbar />
      <Timeline />
      <Contact />
      <Footer />
    </Fragment>
  );
}

export default App;
