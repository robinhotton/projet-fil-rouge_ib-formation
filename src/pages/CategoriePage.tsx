import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import PrestationController from "../components/prestation/PrestationController";
import "./CategoriePage.scss";

const CategoriePage: React.FC = () => {
  return (
    <div className="CategoriePage">
      <Header />
      <PrestationController />
      <Footer />
    </div>
  );
};
export default CategoriePage;
