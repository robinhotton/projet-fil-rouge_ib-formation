import InscriptionPrestataireForm from "../../components/inscriptionPrestataireForm/inscriptionPrestataireForm";
import Entreprise from "../../models/Entreprise";
import "./InscriptionPrestatairePage.scss";

const InscriptionEntreprisePage: React.FC = () => {
  return (
    <>
      <div className="registerPrestataireBlock">
        <div className="registerImgBlock">
          <img
            src="https://static4.depositphotos.com/1022884/350/i/600/depositphotos_3504089-stock-photo-yellow-helmet-and-plans-rools.jpg"
            alt="inscriptionPrestataire"
          />
        </div>
        <div className="registerPrestataireFormBlock">
          <InscriptionPrestataireForm inscription={new Entreprise()} />
        </div>
      </div>
    </>
  );
};
export default InscriptionEntreprisePage;
