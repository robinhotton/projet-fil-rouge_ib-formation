import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import CreatePrestation from "../components/createPrestation/createPrestation";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <CreatePrestation
        prestationName={""}
        entrepriseName={""}
        prestationContent={""}
        hourlyRate={0}
        devis={""}
      />
      <Footer />
    </>
  );
};
export default LandingPage;
