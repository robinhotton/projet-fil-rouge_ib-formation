import CardsCategorie from "./CardsCategorie";
import StatsGlobales from "./CardsGlobales";
import { getPrestations, getCategories } from "../../services/RequetesAxios";

const CardsController: React.FC = () => {
  return (
    <>
      <h1>Statistiques globales</h1>
      <StatsGlobales getData={getPrestations} />
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
