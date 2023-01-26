import Footer from "../../commons/Footer/Footer";
import Header from "../../commons/header/Header";
import GridCategorie from "../../components/gridCategorie/GridCategorie";
import LandingForm from "../../components/landingForm/LandingForm";
import "./LandingPage.scss";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <img
        className="image-LandingPage"
        src="https://s7d2.scene7.com/is/image/Caterpillar/CM20170110-43489-17107"
        alt="chantier btp"
      />
      <LandingForm />
      <GridCategorie />
      <Footer />
    </>
  );
};
export default LandingPage;
