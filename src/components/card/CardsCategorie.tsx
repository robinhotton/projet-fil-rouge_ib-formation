import Prestation from "../../models/Prestation";
import Card from "./Card";

type CardsCategorieProps = {
  nomCategorie: any;
  getData: any;
};

const CardsCategorie: React.FC<CardsCategorieProps> = ({
  nomCategorie,
  getData,
}) => {
  const filteredData = () => {
    getData.filter(
      (prestation: Prestation) => prestation.categorie === nomCategorie
    );
  };

  const prixMoyen = () => {};
  /*
    const data = filteredData;
    return (
      data.reduce(
        (accumulator: number, currentValue: number) =>
          accumulator + currentValue,
        0
      ) / data.length
    );
  */

  const prixMin = () => {};
  //return Math.min(filteredData);

  const prixMax = () => {};
  //return Math.max(filteredData);

  const moyParPrestataire = () => {};
  const minParPrestataire = () => {};
  const maxParPrestataire = () => {};

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
export default CardsCategorie;