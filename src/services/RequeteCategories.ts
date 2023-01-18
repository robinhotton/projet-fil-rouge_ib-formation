import { useState, useEffect } from "react";
import Categorie from "../models/Categorie";

const GetAllCategories = () => {
  const [categories, setCategories] = useState<Categorie[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3004/prestations`)
      .then((response) => response.json())
      .then((data: Categorie[]) => setCategories(data));
  }, []);

  return categories;
};
export default GetAllCategories;
