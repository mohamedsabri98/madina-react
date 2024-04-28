import MainHeader from "../../components/MainHeader";
import PageHeader from "../../components/PageHeader";
import img from "../../images/background/13a.jpg";
import Footer from "../../components/Footer";
import RebarTab from "../../components/RebarTab";
function Rebar() {
  return (
    <>
      <MainHeader />
      <PageHeader image={img} title={"Steel Rebar"} />
      <RebarTab />
      <Footer />
    </>
  );
}

export default Rebar;
