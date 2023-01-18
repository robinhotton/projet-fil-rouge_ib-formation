import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import Categorie from "../../models/Categorie";
import StatsGlobales from "./CardsGlobales";
import CardsCategorie from "./CardsCategorie";
import GetAllCategories from "../../services/RequeteCategories";
import PrestationService from "../../services/PrestationService";

const CardsController: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    setCategories(GetAllCategories());
    setPrestations(PrestationService.GetAllPrestations());
  }, []);

  const prestationsParCategories = (nomCategorie: string): Prestation[] => {
    const copie: Prestation[] = prestations;
    return copie.filter(
      (prestation) => prestation.categorie.nom === nomCategorie
    );
  };

  return (
    <div className="statistiques">
      <h1>Statistiques globales</h1>
      <StatsGlobales allPrestations={prestations} />
      <h1>Prestations</h1>
      <div className="allCategories">
        {categories.map((categorie) => (
          <CardsCategorie
            key={categorie.id}
            nomCategorie={categorie.nom}
            prestationsDeLaCategorie={prestationsParCategories(categorie.nom)}
          />
        ))}
      </div>
    </div>
  );
};
export default CardsController;
