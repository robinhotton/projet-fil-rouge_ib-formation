import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "./PrestationCard";
import "./CategorieController.scss";
import Categorie from "../../models/Categorie";
import CategoriesService from "../../services/CategorieService";

const PrestationController: React.FC = () => {
  const [categorie, setCategorie] = useState<Categorie>();
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      CategoriesService.getCategorieById(+id).then((categorie) =>
        setCategorie(categorie)
      );
    }
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(
        prestations.filter(
          (prestation) => prestation.categorie === categorie?.nom
        )
      )
    );
  }, [id]);

  return (
    <div className="categories">
      <h1>Catégorie : {categorie?.nom}</h1>
      {prestations.map((prestation, index) => {
        return (
          <div className="card">
            <PrestationCard key={index} prestation={prestation} />
          </div>
        );
      })}
    </div>
  );
};
export default PrestationController;
