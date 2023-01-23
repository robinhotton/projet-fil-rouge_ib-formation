import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "./PrestationCard";
import "./AllPrestations.scss";
import { Link } from "react-router-dom";

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
          <Link to={`/prestation/${prestation.id}`}>
          <div key={index++} className="card">
            <PrestationCard prestation={prestation} />
          </div>
          </Link>
        );
      })}
    </div>
  );
};
export default AllPrestations;
