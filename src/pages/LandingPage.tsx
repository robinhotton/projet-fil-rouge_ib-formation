import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import GridCategorie from "../components/gridCategorie/GridCategorie";
import LandingForm from "../components/landingForm/LandingForm";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <LandingForm />
      <GridCategorie />
      <Footer />
    </>
  );
};
export default LandingPage;
