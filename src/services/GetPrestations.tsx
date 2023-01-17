import dotenv from "dotenv";
import Prestation from "../models/Prestation";
import { useState, useEffect } from "react";

let URL: string;

const initializer = () => {
  dotenv.config();
  URL = "" + process.env.API_URL;
};

/**
 * cible la route /prestations pour récupérer des données de prestations
 */
const GetPrestations: React.FC = () => {
  initializer();
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  useEffect(() => {
    fetch(URL + "/prestations")
      .then((response) => response.json())
      .then((data) => setPrestations(data));
  }, []);

  return (
    <>
      {prestations.map((prestation) => (
        <h1 key={prestation.id}>{prestation.description}</h1>
      ))}
    </>
  );
};
export default GetPrestations;

// /**
//  *  cible la route /categories pour récupérer des données de catégories
//  */
// export const getCategories = async () => {
//   initializer();
//   try {
//     const response = await axios.get(`${URL}/categories`);
//     return response.data;
//   } catch (error) {
//     return "error at: RequeteAxios.ts -> getCategories -> catch";
//   }
// };

// /**
//  *  cible la route /entreprises pour récupérer des données de catégories
//  */
// export const getEntreprises = async () => {
//   initializer();
//   try {
//     const response = await axios.get(`${URL}/entreprises`);
//     return response.data;
//   } catch (error) {
//     return "error at: RequeteAxios.ts -> getEntreprises -> catch";
//   }
// };

// /**
//  *  cible la route /clients pour récupérer des données de catégories
//  */
// export const getClients = async () => {
//   initializer();
//   try {
//     const response = await axios.get(`${URL}/clients`);
//     return response.data;
//   } catch (error) {
//     return "error at: RequeteAxios.ts -> getClients -> catch";
//   }
// };
