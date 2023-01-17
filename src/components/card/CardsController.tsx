import GetPrestations from "../../services/GetPrestations";
import CardsCategorie from "./CardsCategorie";
import StatsGlobales from "./CardsGlobales";

const CardsController: React.FC = () => {
  return (
    <>
      <h1>Statistiques globales</h1>
      <StatsGlobales getData={GetPrestations} />
      <h1>Prestations</h1>
      <div className="allCategories">
        {/* {getCategories.map((categorie: any, index: number) => (
          <CardsCategorie
            key={index}
            nomCategorie={categorie}
            getData={getPrestations}
          />
        ))} */}
      </div>
    </>
  );
};
export default CardsController;
