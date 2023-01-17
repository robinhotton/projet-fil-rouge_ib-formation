import { useEffect, useState } from "react";
import { GetAllPrestations } from "../../services/RequetesPrestations";
import Prestation from "../../models/Prestation";
import Categorie from "../../models/Categorie";
import StatsGlobales from "./CardsGlobales";
import CardsCategorie from "./CardsCategorie";
import GetAllCategories from "../../services/RequeteCategories";

const CardsController: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    setCategories(GetAllCategories());
    setPrestations(GetAllPrestations());
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
