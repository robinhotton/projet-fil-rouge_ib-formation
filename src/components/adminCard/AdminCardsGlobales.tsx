import Prestation from "../../models/Prestation";
import Card from "./AdminCard";
import "./AdminCardsGlobales.scss";

type AdminCardsGlobalesProps = {
  allPrestations: Prestation[];
};

const AdminCardsGlobales: React.FC<AdminCardsGlobalesProps> = ({
  allPrestations,
}) => {
  const prestationsTotales = (): number => {
    return allPrestations.length;
  };
  const prestationsEnCours = (): number => {
    return allPrestations.filter((prestation) => prestation.termine === false)
      .length;
  };
  const prestationsTerminees = (): number => {
    return allPrestations.filter((prestation) => prestation.termine === true)
      .length;
  };

  return (
    <div className="cardsGlobales">
      <Card textCard="Prestations totales" getCardData={prestationsTotales()} />
      <Card
        textCard="Prestations en cours"
        getCardData={prestationsEnCours()}
      />
      <Card
        textCard="Prestations terminées"
        getCardData={prestationsTerminees()}
      />
    </div>
  );
};
export default AdminCardsGlobales;
