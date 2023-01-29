import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import AllPrestations from "../components/allPrestations/AllPrestations";
import "../assets/css/utils/FooterEnBas.scss";

const AllPrestationPage: React.FC = () => {
  return (
    <div className="FooterEnBas">
      <Header />
      <AllPrestations />
      <Footer />
    </div>
  );
};
export default AllPrestationPage;
