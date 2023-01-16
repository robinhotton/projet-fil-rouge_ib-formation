import Card from "./Card";

type CardsGlobalesProps = {
  getData: any;
};

const CardsGlobales: React.FC<CardsGlobalesProps> = (getData) => {
  const prestationsTotales = () => {};
  const prestationsEnCours = () => {};
  const prestationsTerminees = () => {};

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
export default CardsGlobales;
