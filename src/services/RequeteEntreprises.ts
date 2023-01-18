import { useState, useEffect } from "react";
import Categorie from "../models/Categorie";
import Entreprise from "../models/Entreprise";

const GetAllEntreprises = () => {
  const [entreprises, setEntreprises] = useState<Entreprise[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3004/entreprises`)
      .then((response) => response.json())
      .then((data: Categorie[]) => setEntreprises(data));
  }, []);

  return entreprises;
};
export default GetAllEntreprises;
