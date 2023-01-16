import { useState } from "react";
import axios from "axios";
import "./searchbar.scss";

const searchbar = () => {
  const [searchTerm, setSearchTerm] = useState("");

  const handleSearchInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // a verifier
  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    let adresse = "http://localhost:3000/prestations";
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

export default searchbar;
