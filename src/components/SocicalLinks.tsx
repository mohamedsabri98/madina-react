import { Nav } from "react-bootstrap";
import { useTranslation } from "react-i18next";

function SocicalLinks() {
  const { t } = useTranslation();
  return (
    <div className="d-flex justify-content-center m-2">
      <h3 className="main-color fw-bold mt-1">{t("Follow on")}</h3>
      <div className="ms-3">
        <Nav>
          <Nav.Link href="#" className="link-color me-4">
            <i className="bi bi-facebook fs-3"></i>
          </Nav.Link>
          <Nav.Link href="#" className="link-color me-4">
            <i className="bi bi-instagram fs-4"></i>
          </Nav.Link>
          <Nav.Link href="#" className="link-color">
            <i className="bi bi-linkedin fs-4"></i>
          </Nav.Link>
        </Nav>
      </div>
    </div>
  );
}

export default SocicalLinks;
