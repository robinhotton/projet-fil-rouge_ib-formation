import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "../prestation/PrestationCard";
import "./Panier.scss";
import "../../assets/css/utils/FooterEnBas.scss";
import { useNavigate } from "react-router-dom";

const Panier: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  const redirection = useNavigate();

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

  const validerPanier = () => {
    prestations.forEach((prestation) => {
      prestation.idClient = 0;
      PrestationService.updatePrestation(prestation);
    });
    redirection("/");
  };

  return (
    <div className="FooterEnBas adjust">
      {prestations.length > 0 ? (
        <>
          <div className="flexPanier">
            <h1 className="title">Votre panier :</h1>
            <button className="buttonPrestationSubmit" onClick={validerPanier}>
              <span className="moreButton buttonText bold">
                Valider le panier
              </span>
            </button>
          </div>
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
