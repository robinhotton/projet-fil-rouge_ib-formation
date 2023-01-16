import axios from "axios";
import dotenv from "dotenv";

let URL: string;

const initializer = () => {
  dotenv.config();
  URL = "" + process.env.API_URL;
};

/**
 * cible la route /prestations pour récupérer des données de prestations
 */
export const getPrestations = async () => {
  initializer();
  try {
    const response = await axios.get(`${URL}/prestations`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getPrestations -> catch";
  }
};

/**
 *  cible la route /categories pour récupérer des données de catégories
 */
export const getCategories = async () => {
  initializer();
  try {
    const response = await axios.get(`${URL}/categories`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getCategories -> catch";
  }
};

/**
 *  cible la route /entreprises pour récupérer des données de catégories
 */
export const getEntreprises = async () => {
  initializer();
  try {
    const response = await axios.get(`${URL}/entreprises`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getEntreprises -> catch";
  }
};

/**
 *  cible la route /clients pour récupérer des données de catégories
 */
export const getClients = async () => {
  initializer();
  try {
    const response = await axios.get(`${URL}/clients`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getClients -> catch";
  }
};
