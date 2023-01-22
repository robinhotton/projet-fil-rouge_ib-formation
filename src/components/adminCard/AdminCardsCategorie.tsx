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

  useEffect(() => {
    setPrestations(prestationsDeLaCategorie);
    EntrepriseService.getAllEntreprises().then((entreprise) =>
      setEntreprises(entreprise)
    );
  }, []);

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

  const setUpTableauZero = (): number[] => {
    const tableauDeZero: number[] = [];
    entreprises.forEach(() => {
      tableauDeZero.push(0);
    });
    return tableauDeZero;
  };

  const setUpTableau = (): number[] => {
    const tableauARemplir: number[] = setUpTableauZero();
    prestations.forEach((prestation) => {
      if (prestation.idEntreprise) {
        tableauARemplir[prestation.idEntreprise - 1] += 1;
      }
    });
    return tableauARemplir;
  };

  const moyParPrestataire = (): number => {
    const tableauRempli: number[] = setUpTableau();
    const moy: number =
      tableauRempli.reduce(
        (accumulateur, nouvelleValeur) => (accumulateur += nouvelleValeur),
        0
      ) / tableauRempli.length;
    return moy;
  };

  const minParPrestataire = (): number => {
    const tableauRempli: number[] = setUpTableau();
    return Math.min(...tableauRempli);
  };

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
