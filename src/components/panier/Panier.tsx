import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "../prestation/PrestationCard";

const Panier: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  useEffect(() => {
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(
        prestations.filter((prestation) => prestation.idClient === 1)
      )
    );
  }, []);
  return (
    <>
      {prestations.map((prestation, index) => {
        return <PrestationCard key={index++} prestation={prestation} />;
      })}
    </>
  );
};
export default Panier;
