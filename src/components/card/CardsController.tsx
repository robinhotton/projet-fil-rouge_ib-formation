import axios from "axios";
import CardsCategorie from "./CardsCategorie";
import StatsGlobales from "./CardsGlobales";

const CardsController = () => {
  //verifier ce que sa renvoi
  const getData = async () => {
    return await axios
      .get("http://localhost:3000/prestations")
      .then((response: any) => {
        return JSON.parse(response.data);
      })
      .then((response) => response)
      .catch(() => {
        return "error at: AdminController.tsx -> getData -> catch";
      });
  };

  const getCategorie = async () => {
    return await axios
      .get("http://localhost:3000/categories")
      .then((response: any) => {
        return JSON.parse(response.data);
      })
      .then((response) => response)
      .catch(() => {
        return "error at: AdminController.tsx -> getData -> catch";
      });
  };

  return (
    <>
      <h1>Statistiques globales</h1>
      <StatsGlobales getData={getData} />
      <h1>Prestations</h1>
      <div className="allCategories">
        {/* getCategorie.forEach((categorie : any) => {
             <CardsCategorie
          nomCategorie={categorie}
          getData={getData}
        />
        }); */}
      </div>
    </>
  );
};
export default CardsController;
