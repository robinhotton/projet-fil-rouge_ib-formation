import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import PrestationController from "../components/prestation/PrestationController";
import "../assets/css/utils/FooterEnBas.scss";

const CategoriePage: React.FC = () => {
  return (
    <div className="FooterEnBas">
      <Header />
      <PrestationController />
      <Footer />
    </div>
  );
};
export default CategoriePage;
