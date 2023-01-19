import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import CreatePrestation from "../components/createPrestation/createPrestation";

const LandingPage: React.FC = () => {
  return (
    <>
      <Header />
      <CreatePrestation />
      <Footer />
    </>
  );
};
export default LandingPage;
