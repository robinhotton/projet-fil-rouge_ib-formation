import { useState } from "react";
import axios from "axios";
import "./SearchBar.scss";

const SearchBar = () => {
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
    console.log(response.data);
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
      <button type="submit">Search</button>
    </form>
  );
};

export default SearchBar;
