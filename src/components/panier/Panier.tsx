import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "../prestation/PrestationCard";
import "./Panier.scss";

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
    <div className="panier">
      {prestations.map((prestation, index) => {
        return <PrestationCard key={index++} prestation={prestation} />;
      })}
    </div>
  );
};
export default Panier;
