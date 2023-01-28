import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import EditPrestation from "../components/prestationForm/EditPrestationForm";
import "./CreatePrestationPage.scss";

const EditPrestationPage: React.FC = () => {
  return (
    <div className="FixFooterBas">
      <Header />
      <EditPrestation />
      <Footer />
    </div>
  );
};
export default EditPrestationPage;
