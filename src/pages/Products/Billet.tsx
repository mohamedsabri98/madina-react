import React from "react";
import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import img from "../../images/background/13.jpg"
import Footer from "../../components/Footer";
import BilletTab from "../../components/BilletTab";
function Billet() {
  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={"Billet"}/>
      <BilletTab />
      <Footer />
    </>
  );
}

export default Billet;
