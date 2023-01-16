import axios from "axios";
import dotenv from "dotenv";
dotenv.config();

/**
 * cible la route /prestations pour récupérer des données de prestations
 */
export const getPrestations = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/prestations`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getPrestations -> catch";
  }
};

/**
 *  cible la route /categories pour récupérer des données de catégories
 */
export const getCategories = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/categories`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getCategories -> catch";
  }
};

/**
 *  cible la route /entreprises pour récupérer des données de catégories
 */
export const getEntreprises = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/entreprises`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getEntreprises -> catch";
  }
};

/**
 *  cible la route /clients pour récupérer des données de catégories
 */
export const getClients = async () => {
  try {
    const response = await axios.get(`${process.env.API_URL}/clients`);
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getClients -> catch";
  }
};
