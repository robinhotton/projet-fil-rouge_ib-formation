import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "./PrestationCard";
import "./AllPrestations.scss";

const AllPrestations: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  useEffect(() => {
    PrestationService.getAllPrestations().then((allPrestations) =>
      setPrestations(allPrestations)
    );
  }, []);

  return (
    <div className="AllPrestations">
      {prestations.map((prestation, index) => {
        return (
          <div key={index++} className="card">
            <PrestationCard prestation={prestation} />
          </div>
        );
      })}
    </div>
  );
};
export default AllPrestations;
