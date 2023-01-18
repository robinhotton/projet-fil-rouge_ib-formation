import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import Categorie from "../../models/Categorie";
import StatsGlobales from "./AdminCardsGlobales";
import CardsCategorie from "./AdminCardsCategorie";
import GetAllCategories from "../../services/RequeteCategories";
import PrestationService from "../../services/PrestationService";

const AdminCardsController: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    setCategories(GetAllCategories());
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(prestations)
    );
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
export default AdminCardsController;
