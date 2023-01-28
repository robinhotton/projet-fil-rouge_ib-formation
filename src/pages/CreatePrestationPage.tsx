import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import CreatePrestation from "../components/prestationForm/createPrestationForm";
import "./CreatePrestationPage.scss";
const CreatePrestationPage: React.FC = () => {
  return (
    <div className="FixFooterBas">
      <Header />
      <CreatePrestation />
      <Footer />
    </div>
  );
};
export default CreatePrestationPage;
