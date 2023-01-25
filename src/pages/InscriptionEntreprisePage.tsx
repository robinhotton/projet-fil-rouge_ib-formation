import InscriptionPrestataireForm from "../components/inscriptionPrestataireForm/inscriptionPrestataireForm";
import Entreprise from "../models/Entreprise";

const InscriptionEntreprisePage: React.FC = () => {
  return (
    <>
      <div>
        <img
          src="https://static4.depositphotos.com/1022884/350/i/600/depositphotos_3504089-stock-photo-yellow-helmet-and-plans-rools.jpg"
          alt="inscriptionPrestataire"
        ></img>
        <div>
          <InscriptionPrestataireForm inscription={new Entreprise()} />
        </div>
      </div>
    </>
  );
};
export default InscriptionEntreprisePage;
