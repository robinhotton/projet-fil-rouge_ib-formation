import { useEffect, useState } from "react";
import Entreprise from "../../models/Entreprise";
import Prestation from "../../models/Prestation";
import EntrepriseService from "../../services/EntrepriseService";
import "./PrestationCard.scss";
type PrestationCardProps = {
  prestation: Prestation;
};

const PrestationCard: React.FC<PrestationCardProps> = ({ prestation }) => {
  const [entreprise, setEntreprise] = useState<Entreprise>();

  /**
   * lien entre la prtestation et son entreprise
   */
  useEffect(() => {
    if (prestation.idEntreprise) {
      EntrepriseService.getEntrepriseById(prestation.idEntreprise).then(
        (entreprise) => setEntreprise(entreprise)
      );
    }
  }, []);

  return (
    <div className="fullCard">
      <img
        src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&cs=tinysrgb&w=600"
        className="imagePrestationCard"
        alt="prestation"
      />

      <div className="cardBody">
        <h1 className="titleCard bold">{entreprise?.name}</h1>
        <h2 className="subtitle coord medium">{entreprise?.zoneGeographique}</h2>
        <p className="contentCard">{prestation.description}</p>
        <button className="moreButton buttonText bold">En savoir plus</button>
      </div>
    </div>
  );
};
export default PrestationCard;
