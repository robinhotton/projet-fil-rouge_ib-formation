import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import StatsGlobales from "./AdminCardsGlobales";
import CardsCategorie from "./AdminCardsCategorie";
import PrestationService from "../../services/PrestationService";
import CategoriesService from "../../services/CategorieService";
import "./AdminCardsController.scss";
import Categorie from "../../models/Categorie";

const AdminCardsController: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [categories, setCategories] = useState<Categorie[]>([]);

  /**
   * stockes toutes les prestations et toutes les catégories
   */
  useEffect(() => {
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(prestations)
    );
    CategoriesService.getAllCategories().then((categories) =>
      setCategories(categories)
    );
  }, []);

  /**
   * renvoie une copie du tableau de prestations filtré pour garder que ceux avec le bon nom de catégorie
   * @param nomCategorie le nom de la catégorie
   * @returns les prestations de la catégorie
   */
  const prestationsParCategories = (nomCategorie: string): Prestation[] => {
    const copie: Prestation[] = prestations;
    return copie.filter((prestation) => prestation.categorie === nomCategorie);
  };

  return (
    <div className="statistiques">
      <h1 className="titlePrestationPage">Statistiques globales</h1>
      <StatsGlobales allPrestations={prestations} />
      <h1 className="titlePrestationPage">Prestations</h1>
      <div className="allCategories">
        {categories.map((categorie, index) => (
          <CardsCategorie
            key={index}
            nomCategorie={categorie.nom}
            prestationsDeLaCategorie={prestationsParCategories(categorie.nom)}
          />
        ))}
      </div>
    </div>
  );
};
export default AdminCardsController;
