import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import img from "../../images/background/13a.jpg";
import Footer from "../../components/Footer";
import steelImg from "../../images/quality/steel-re.jpg";
import billetImg from "../../images/quality/billet.jpg";
import { Button, Container } from "react-bootstrap";
import { useState } from "react";

function QualityControl() {
  const [activeButton, setActiveButton] = useState("steel");

  const handleButtonClick = (buttonName: string) => {
    setActiveButton(buttonName);
  };
  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={"Quality Control"} />
      <Container>
        <div className="mb-3 mt-3 d-flex justify-content-center">
          <Button
            size="lg"
            variant={activeButton === "steel" ? "danger" : "outline-danger"}
            onClick={() => handleButtonClick("steel")}
            className="m-2 me-3"
          >
            Rebar Steel
          </Button>
          <Button
            size="lg"
            variant={activeButton === "billet" ? "danger" : "outline-danger"}
            onClick={() => handleButtonClick("billet")}
            className="m-2 ms-3"
          >
            Billet
          </Button>
        </div>

        {activeButton === "steel" && (
          <div className="d-flex justify-content-center">
            <img src={steelImg} alt="" className=" mt-3 mb-5 rounded-3" />
          </div>
        )}

        {activeButton === "billet" && (
          <div className="d-flex justify-content-center">
            <img src={billetImg} alt="" className=" mt-3 mb-5 rounded-3" />
          </div>
        )}
      </Container>
      <Footer />
    </>
  );
}

export default QualityControl;
