// main header component
import { useTranslation } from "react-i18next";
import { useEffect, useState } from "react";
import { Button, Nav, NavDropdown, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import logo from "../images/logo.png";
import i18n from "../lang/I18n";

function MainHeader() {
  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;

      if (offset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const { t } = useTranslation();
  const isArabic = i18n.language === "ar";

  return (
    <header className={`${isSticky ? "sticky-header" : ""}`}>
      <Navbar expand="sm" className="navbar-custom">
        <div className="container-fluid">
          <div className="d-flex justify-content-between align-items-center w-100">
            <div className="ms-5 ps-3">
              <Navbar.Brand href="#">
                <img src={logo} alt="logo" className="mt-2" />
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="basic-navbar-nav" />
            </div>
            <div className="me-5">
              <Navbar.Collapse id="basic-navbar-nav">
                <Nav className="ml-auto me-4">
                  <Link to="/" className="text-white me-3 nav-link">
                    {t("Home")}
                  </Link>
                  <NavDropdown
                    title={t("About")}
                    id="about-dropdown"
                    className="text-white me-3"
                  >
                    <Link to="/who-we-are" className="dropdown-item">
                      {t("Who We Are")}
                    </Link>
                    <Link to="/vision" className="dropdown-item">
                      {t("Vision")}
                    </Link>
                    <Link to="/mission" className="dropdown-item">
                      {t("Mission")}
                    </Link>
                    <Link to="/values" className="dropdown-item">
                      {t("Values")}
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={t("Products")}
                    id="products-dropdown"
                    className="text-white me-3"
                  >
                    <Link to="/rebar" className="dropdown-item">
                      {t("Rebar")}
                    </Link>
                    <Link to="/bellet" className="dropdown-item">
                      {t("Bellet")}
                    </Link>
                    <Link to="/catalogue" className="dropdown-item">
                      {t("Catalogue")}
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={t("Quality")}
                    id="quality-dropdown"
                    className="text-white me-3"
                  >
                    <Link to="/quality-control" className="dropdown-item">
                      {t("Quality Control")}
                    </Link>
                    <Link to="/certifications" className="dropdown-item">
                      {t("Certifications")}
                    </Link>
                  </NavDropdown>
                  <NavDropdown
                    title={t("Projects")}
                    id="peojects-dropdown"
                    className="text-white me-3"
                  >
                    <Link to="/mega-projects" className="dropdown-item">
                      {t("Mega Projects")}
                    </Link>
                    <Link to="/housing-projects" className="dropdown-item">
                      {t("Housing Projects")}
                    </Link>
                    <Link to="/accreditation" className="dropdown-item">
                      {t("Accreditation & Approvals")}
                    </Link>
                  </NavDropdown>
                  <Link to="/find-us" className="text-white me-3 nav-link">
                    {t("Find us")}
                  </Link>
                  <Button
                    className={isArabic ? "d-none" : "m-1"}
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      i18n.changeLanguage("ar");
                    }}
                  >
                    AR
                  </Button>
                  <Button
                    className={!isArabic ? "d-none" : "m-1"}
                    variant="outline-danger"
                    size="sm"
                    onClick={() => {
                      i18n.changeLanguage("en");
                    }}
                  >
                    En
                  </Button>
                </Nav>
              </Navbar.Collapse>
            </div>
          </div>
        </div>
      </Navbar>
    </header>
  );
}

export default MainHeader;
