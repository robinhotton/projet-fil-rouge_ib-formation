import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import Categorie from "../../models/Categorie";
import CategoriesService from "../../services/CategorieService";

const LandingForm: React.FC = () => {
  const [categories, setCategories] = useState<Categorie[]>([]);
  const [city, setCity] = useState<string>();
  const [dropdownValue, setDropdownValue] = useState<string>();

  useEffect(() => {
    CategoriesService.getAllCategories().then((categories) =>
      setCategories(categories)
    );
  });

  const redirection = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const categorie: number =
      categories.findIndex((categorie) => categorie.nom === dropdownValue) + 1;
    if (categorie === 0) redirection(`/categorie/1`);
    else redirection(`/categorie/${categorie}`);
  };

  return (
    <form onSubmit={handleSubmit}>
      <label>
        Ville:
        <input
          type="text"
          value={city}
          onChange={(event) => setCity(event.target.value)}
        />
      </label>
      <br />
      <label>
        Choisir un type de projet:
        <select
          value={dropdownValue}
          onChange={(event) => setDropdownValue(event.target.value)}
        >
          {categories.map((categorie, index) => (
            <option key={index} value={categorie.nom}>
              {categorie.nom}
            </option>
          ))}
        </select>
      </label>
      <br />
      <button type="submit">Envoyer</button>
    </form>
  );
};

export default LandingForm;
