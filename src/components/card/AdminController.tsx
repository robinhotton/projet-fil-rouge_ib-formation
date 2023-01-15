import axios from "axios";
import AdminCategorie from "./AdminCategorie";
import StatsGlobales from "./StatsGlobales";

const AdminController = () => {
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
      .get("http://localhost:3000/categoriesPrestations")
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
             <AdminCategorie
          nomCategorie={categorie}
          getData={getData}
        />
        }); */}
      </div>
    </>
  );
};
export default AdminController;
