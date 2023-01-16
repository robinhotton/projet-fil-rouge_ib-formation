import axios from "axios";

export const getPrestations = async () => {
  try {
    const response = await axios.get("http://localhost:3000/prestations");
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getPrestations -> catch";
  }
};

export const getCategories = async () => {
  try {
    const response = await axios.get("http://localhost:3000/categories");
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getCategories -> catch";
  }
};

export const getEntreprises = async () => {
  try {
    const response = await axios.get("http://localhost:3000/entreprises");
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getEntreprises -> catch";
  }
};

export const getClients = async () => {
  try {
    const response = await axios.get("http://localhost:3000/clients");
    return response.data;
  } catch (error) {
    return "error at: RequeteAxios.ts -> getClients -> catch";
  }
};
