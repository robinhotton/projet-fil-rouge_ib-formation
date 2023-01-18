import { useEffect, useState } from "react";
import GetAllEntreprises from "../../services/RequeteEntreprises";
import Prestation from "../../models/Prestation";
import Entreprise from "../../models/Entreprise";
import Card from "./AdminCard";

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
    setEntreprises(GetAllEntreprises());
  }, []);

  const prixMoyen = () => {
    let moy: number = 0;
    prestations.forEach((prestation) => (moy += prestation.prixTotal()));
    return moy;
  };

  const prixMin = () => {
    let min: number = prestations[0].prixTotal();
    prestations.forEach((prestation) => {
      const prixPrestation = prestation.prixTotal();
      if (prixPrestation < min) min = prixPrestation;
    });
    return min;
  };

  const prixMax = () => {
    let max: number = prestations[0].prixTotal();
    prestations.forEach((prestation) => {
      const prixPrestation: number = prestation.prixTotal();
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
      tableauARemplir[prestation.idEntreprise - 1] += 1;
    });
    return tableauARemplir;
  };

  const moyParPrestataire = () => {
    const tableauRempli: number[] = setUpTableau();
    const moy: number =
      tableauRempli.reduce(
        (accumulateur, nouvelleValeur) => (accumulateur += nouvelleValeur),
        0
      ) / tableauRempli.length;
    return moy;
  };

  const minParPrestataire = () => {
    const tableauRempli: number[] = setUpTableau();
    return Math.min(...tableauRempli);
  };

  const maxParPrestataire = () => {
    const tableauRempli: number[] = setUpTableau();
    return Math.max(...tableauRempli);
  };

  return (
    <div className="cardCategorie">
      <h2>{nomCategorie}</h2>
      <Card
        textCard="Moyenne par prestataire"
        getCardData={moyParPrestataire}
      />
      <Card
        textCard="Minimun par prestataire"
        getCardData={minParPrestataire}
      />
      <Card
        textCard="Maximum par prestataire"
        getCardData={maxParPrestataire}
      />
      <Card textCard="Prix moyen" getCardData={prixMoyen} />
      <Card textCard="Prix minimum" getCardData={prixMin} />
      <Card textCard="Prix maximum" getCardData={prixMax} />
    </div>
  );
};
export default AdminCardsCategorie;
