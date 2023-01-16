import { useEffect, useState } from "react";
import axios from "axios";
import "./searchbar.scss";
import "dotenv/config";

const SearchBar: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");

  /**
   * URL de l'api json-server, utilisation du `.env`
   */
  const jsonServer: string = "" + process.env.JSONSERVER;

  /**
   * récupère les données du json-server grace à axios
   */
  useEffect(() => {
    axios.get(jsonServer).then((response) => setSearchTerm(response.data));
  }, []);

  /**
   * Permet de mettre à jour l'état de la recherche saisie en fonction des entrées de l'utilisateur.
   * @param event modification de la recherche de la searchbar
   */
  const handleSearchInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Permet d'envoyer la requête HTTP vers l'API lorsque l'utilisateur soumet le formulaire de recherche.
   * @param event submit form
   * @returns informations souhaitées par l'utilisateurs
   */
  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    let adresse = jsonServer;
    if (searchTerm !== "") adresse += "/" + searchTerm;
    const response = await axios.get(adresse);
    return response.data;
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        className="searchbar"
        type="text"
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search..."
      />
      <button className="searchButton" type="submit">
        Search
      </button>
    </form>
  );
};

export default SearchBar;
