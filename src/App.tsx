import "./styles/App.css";
import "../node_modules/bootstrap/dist/css/bootstrap.min.css";
import "../node_modules/bootstrap/dist/js/bootstrap.min.js";
import i18n from "./lang/I18n";
import "./styles/rtl.css";
import "./styles/Media.css"
import { useState, useEffect } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import WhoWeAre from "./pages/About/WhoWeAre";
import Mission from "./pages/About/Mission";
import Vission from "./pages/About/Vission";
import Values from "./pages/About/Values";
import Rebar from "./pages/Products/Rebar";
import Bellet from "./pages/Products/Billet";
import Catalogue from "./pages/Products/Catalogue";
import QualityControl from "./pages/Quality/QualityControl";
import Certifications from "./pages/Quality/Certifications";
import MegaProjects from "./pages/Projects/MegaProjects";
import HousingProjects from "./pages/Projects/HousingProjects";
import Accreditation from "./pages/Projects/Accreditation";
import FindUs from "./pages/FindUs";

function App() {
  const [isRTL, setIsRTL] = useState(false);

  useEffect(() => {
    const updateLanguage = () => {
      const lang = i18n.language;
      setIsRTL(lang === "ar");
    };

    updateLanguage();

    i18n.on("languageChanged", updateLanguage);

    return () => {
      i18n.off("languageChanged", updateLanguage);
    };
  }, []);

  return (
    <div dir={isRTL ? "rtl" : "ltr"}>
      <Router>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vission />} />
          <Route path="/values" element={<Values />} />
          <Route path="/who-we-are" element={<WhoWeAre />} />
          <Route path="/mission" element={<Mission />} />
          <Route path="/vision" element={<Vission />} />
          <Route path="/values" element={<Values />} />
          <Route path="/rebar" element={<Rebar />} />
          <Route path="/bellet" element={<Bellet />} />
          <Route path="/catalogue" element={<Catalogue />} />
          <Route path="/quality-control" element={<QualityControl />} />
          <Route path="/certifications" element={<Certifications />} />
          <Route path="/mega-projects" element={<MegaProjects />} />
          <Route path="/housing-projects" element={<HousingProjects />} />
          <Route path="/accreditation" element={<Accreditation />} />
          <Route path="/find-us" element={<FindUs />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
