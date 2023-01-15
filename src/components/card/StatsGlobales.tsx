import Card from "./Card";

const StatsGlobales = (getData: any) => {
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
export default StatsGlobales;
