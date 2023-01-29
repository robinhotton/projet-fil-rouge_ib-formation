import { useEffect, useState } from "react";
import { Link, useParams } from "react-router-dom";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationCard from "./PrestationCard";
import "./PrestationController.scss";
import Categorie from "../../models/Categorie";
import CategoriesService from "../../services/CategorieService";

const PrestationController: React.FC = () => {
  const [categorie, setCategorie] = useState<Categorie>();
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  /**
   * id de l'url qui est utilisé pour récupéré la bonne catégorie
   */
  const { id } = useParams<string>();

  /**
   * stocke les prestations dont la catégorie correspondent a l'id recu en paramètre grace a l'url
   */
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
  }, [categorie?.nom, id]);

  return (
    <>
      <h1 className="titleCategory bold">Catégorie : {categorie?.nom}</h1>
      <div className="categories">
        {prestations.length > 0 ? (
          <>
            {prestations.map((prestation, index) => {
              return (
                <Link to={`/prestation/${prestation.id}`}>
                  <div key={index++} className="card">
                    <PrestationCard prestation={prestation} />
                  </div>
                </Link>
              );
            })}
          </>
        ) : (
          <>
            <Link to="">
              <PrestationCard prestation={new Prestation()} />
            </Link>
          </>
        )}
      </div>
    </>
  );
};
export default PrestationController;
