import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import CreatePrestation from "../components/prestationForm/createPrestationForm";

const CreatePrestationPage: React.FC = () => {
  return (
    <>
      <Header />
      <CreatePrestation />
      <Footer />
    </>
  );
};
export default CreatePrestationPage;
