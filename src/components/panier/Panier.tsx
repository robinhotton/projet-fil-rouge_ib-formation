import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "../prestation/PrestationCard";
import "./Panier.scss";
import "../../assets/css/utils/FooterEnBas.scss";

const Panier: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  /**
   * stocke que les prestations qui sont assignées au client grace a l'idClient des prestations
   */
  useEffect(() => {
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(
        prestations.filter((prestation) => prestation.idClient === 1)
      )
    );
  }, []);

  return (
    <div className="FooterEnBas adjust">
      {prestations.length > 0 ? (
        <>
          <h1 className="title">Votre panier :</h1>
          <div className="panier">
            {prestations.map((prestation, index) => {
              return <PrestationCard key={index++} prestation={prestation} />;
            })}
          </div>
        </>
      ) : (
        <h1>Le panier est vide</h1>
      )}
    </div>
  );
};
export default Panier;
