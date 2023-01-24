import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import Entreprise from "../../models/Entreprise";
import AdminCard from "./AdminCard";
import EntrepriseService from "../../services/EntrepriseService";
import "./AdminCardsCategorie.scss";

type AdminCardsCategorieProps = {
  nomCategorie: string;
  prestationsDeLaCategorie: Prestation[];
};

const AdminCardsCategorie: React.FC<AdminCardsCategorieProps> = ({
  nomCategorie,
  prestationsDeLaCategorie,
}) => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);
  const [entreprises, setEntreprises] = useState<Entreprise[]>([]);

  /**
   * recupère toutes les entreprises et affecte les prestations de la categorie recu en parametre
   */
  useEffect(() => {
    setPrestations(prestationsDeLaCategorie);
    EntrepriseService.getAllEntreprises().then((entreprise) =>
      setEntreprises(entreprise)
    );
  }, []);

  /**
   * logique pour afficher le prix moyen d'une catégorie de prestation
   */
  const prixMoyen = (): number => {
    let moy: number = 0;
    if (prestations.length === 0) return moy;
    prestations.forEach(
      (prestation) =>
        (moy +=
          prestation.tauxHoraire * prestation.tempsPrestation! +
          prestation.prixMateriel!)
    );
    return +(moy / prestations.length).toFixed(2);
  };

  /**
   * logique pour afficher le prix minimum d'une catégorie de prestation
   */
  const prixMin = (): number => {
    let min: number = Infinity;
    prestations.forEach((prestation) => {
      const prixPrestation =
        prestation.tauxHoraire * prestation.tempsPrestation! +
        prestation.prixMateriel!;
      if (prixPrestation < min) min = prixPrestation;
    });
    if (min === Infinity) return prixMax();
    else return min;
  };

  /**
   * logique pour afficher le prix maximum d'une catégorie de prestation
   */
  const prixMax = (): number => {
    let max: number = 0;
    prestations.forEach((prestation) => {
      const prixPrestation: number =
        prestation.tauxHoraire * prestation.tempsPrestation! +
        prestation.prixMateriel!;
      if (prixPrestation > max) max = prixPrestation;
    });
    return max;
  };

  /**
   * fonction qui permet de setup un tableau remplis de 0 de taille entreprises.length qui represente le nombre de prestation de la catégorie par entreprise
   * @returns le tableau de 0
   */
  const setUpTableauZero = (): number[] => {
    const tableauDeZero: number[] = [];
    entreprises.forEach(() => {
      tableauDeZero.push(0);
    });
    return tableauDeZero;
  };

  /**
   * remplis le tableau en augmentant le nombre de la case tableau de 1 de l'entreprise pourr chaqu'une de ses prestations de la catégorie
   * @returns le tableau remplis
   */
  const setUpTableau = (): number[] => {
    const tableauARemplir: number[] = setUpTableauZero();
    prestations.forEach((prestation) => {
      if (prestation.idEntreprise) {
        tableauARemplir[prestation.idEntreprise - 1] += 1;
      }
    });
    return tableauARemplir;
  };

  /**
   * Utilise le tableau setUp pour calculer la moyenne des prestations des entreprises pour cette catégorie
   */
  const moyParPrestataire = (): number => {
    const tableauRempli: number[] = setUpTableau();
    const moy: number =
      tableauRempli.reduce(
        (accumulateur, nouvelleValeur) => (accumulateur += nouvelleValeur),
        0
      ) / tableauRempli.length;
    return moy;
  };

  /**
   * Utilise le tableau setUp pour calculer la minimun des prestations des entreprises pour cette catégorie
   */
  const minParPrestataire = (): number => {
    const tableauRempli: number[] = setUpTableau();
    return Math.min(...tableauRempli);
  };

  /**
   * Utilise le tableau setUp pour calculer la maximum des prestations des entreprises pour cette catégorie
   */
  const maxParPrestataire = (): number => {
    const tableauRempli: number[] = setUpTableau();
    return Math.max(...tableauRempli);
  };

  return (
    <div className="cardCategorie">
      <h2>{nomCategorie}</h2>
      <div className="statsNombre">
        <AdminCard
          textCard="Moyenne par prestataire"
          getCardData={moyParPrestataire()}
        />
        <AdminCard
          textCard="Minimun par prestataire"
          getCardData={minParPrestataire()}
        />
        <AdminCard
          textCard="Maximum par prestataire"
          getCardData={maxParPrestataire()}
        />
      </div>
      <div className="statsPrix">
        <AdminCard textCard="Prix moyen" getCardData={prixMoyen()} />
        <AdminCard textCard="Prix minimum" getCardData={prixMin()} />
        <AdminCard textCard="Prix maximum" getCardData={prixMax()} />
      </div>
    </div>
  );
};
export default AdminCardsCategorie;
