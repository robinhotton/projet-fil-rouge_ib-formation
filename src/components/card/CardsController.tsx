import axios from "axios";
import CardsCategorie from "./CardsCategorie";
import StatsGlobales from "./CardsGlobales";

const CardsController = async () => {
  //verifier ce que sa renvoi
  const getData = async () => {
    try {
      const response = await axios.get("http://localhost:3000/prestations");
      return response.data.prestations;
    } catch (error) {
      return "error at: AdminController.tsx -> getData -> catch";
    }
  };

  const getCategorie = async () => {
    try {
      const response = await axios.get("http://localhost:3000/categories");
      return response.data.categories;
    } catch (error) {
      return "error at: AdminController.tsx -> getCategorie -> catch";
    }
  };

  const categories = await getCategorie();
  return (
    <>
      <h1>Statistiques globales</h1>
      <StatsGlobales getData={getData} />
      <h1>Prestations</h1>
      <div className="allCategories">
        {categories.map((categorie: any, index: number) => (
          <CardsCategorie
            key={index}
            nomCategorie={categorie}
            getData={getData}
          />
        ))}
      </div>
    </>
  );
};
export default CardsController;
