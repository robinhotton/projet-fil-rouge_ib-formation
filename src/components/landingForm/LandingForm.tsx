import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router";
import CategoriesService from "../../services/CategorieService";

const LandingForm: React.FC = () => {
  const [categories, setCategories] = useState<string[]>([]);
  const [city, setCity] = useState("");
  const [dropdownValue, setDropdownValue] = useState("");

  useEffect(() => {
    CategoriesService.getAllCategories().then((categories) =>
      setCategories(categories)
    );
  });

  const redirection = useNavigate();

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    console.log(`City: ${city}`);
    console.log(`Type de projet: ${dropdownValue}`);
    redirection(`/categorie/`);
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
          {categories.map((category, index) => (
            <option key={index} value={category}>
              {category}
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
