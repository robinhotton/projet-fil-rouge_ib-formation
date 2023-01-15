import { useState } from "react";
import axios from "axios";
import "dotenv/config";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const jsonServer = process.env.JSONSERVER as string;

  const handleSearchInput = (event: any) => {
    setSearchTerm(event.target.value);
  };

  // a verifier
  const handleSearchSubmit = async (event: any) => {
    event.preventDefault();
    let adresse = jsonServer;
    if (searchTerm !== "") adresse += "/" + searchTerm;
    const response = await axios.get(adresse);
    console.log(response.data);
  };

  return (
    <form onSubmit={handleSearchSubmit}>
      <input
        type="text"
        value={searchTerm}
        onChange={handleSearchInput}
        placeholder="Search..."
      />
      <button type="submit">Search</button>
    </form>
  );
}

export default SearchBar;
