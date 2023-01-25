import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import Panier from "../components/panier/Panier";

const PanierPage: React.FC = () => {
  return (
    <>
      <Header />
      <Panier />
      <Footer />
    </>
  );
};

export default PanierPage;
