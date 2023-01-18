import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import "./SearchBar.scss";
//import "dotenv/config";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<Prestation[]>([]);

  /**
   * URL de l'api json-server, utilisation du `.env`
   */
  const jsonServer: string = "http://localhost:3004/prestations";
  //const jsonServer: string = "" + process.env.JSONSERVER;

  /**
   * récupère les données du json-server grace à axios
   */
  useEffect(() => {
    fetch(jsonServer)
      .then((response) => response.json())
      .then((data) => setSearchTerm(data));
  }, []);

  /**
   * Permet de mettre à jour l'état de la recherche saisie en fonction des entrées de l'utilisateur.
   * @param event modification de la recherche de la searchbar
   */
  const changeSearch = (event: React.ChangeEvent<HTMLInputElement>) => {
    // setSearchTerm(event.target.value);
  };

  /**
   * Permet d'envoyer la requête HTTP vers l'API lorsque l'utilisateur soumet le formulaire de recherche.
   * @param event submit form
   * @returns informations souhaitées par l'utilisateurs
   */
  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    let adresse = jsonServer;
    if (searchTerm) adresse += "/" + searchTerm;
    fetch(adresse)
      .then((response) => response.json())
      .then((data) => setSearchTerm(data));
    return searchTerm;
  };

  return (
    <form onSubmit={soumission}>
      <input
        className="searchbar"
        type="text"
        //value={}
        onChange={changeSearch}
        placeholder="Search..."
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
