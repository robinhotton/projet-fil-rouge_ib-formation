import Prestation from "../../models/Prestation";
import Card from "./AdminCard";

type AdminCardsGlobalesProps = {
  allPrestations: Prestation[];
};

const AdminCardsGlobales: React.FC<AdminCardsGlobalesProps> = ({
  allPrestations,
}) => {
  const prestationsTotales = () => {
    return allPrestations.length;
  };
  const prestationsEnCours = () => {
    return allPrestations.filter((prestation) => prestation.termine === false)
      .length;
  };
  const prestationsTerminees = () => {
    return allPrestations.filter((prestation) => prestation.termine === true)
      .length;
  };

  return (
    <div className="cardsGlobales">
      <Card textCard="Prestations totales" getCardData={prestationsTotales} />
      <Card textCard="Prestations en cours" getCardData={prestationsEnCours} />
      <Card
        textCard="Prestations terminées"
        getCardData={prestationsTerminees}
      />
    </div>
  );
};
export default AdminCardsGlobales;
