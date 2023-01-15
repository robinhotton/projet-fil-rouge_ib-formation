import ConnexionLink from "../components/connexion/Connexion";
import DropdownMenu from "../components/dropdown/DropdownMenu";
import SearchBar from "../components/searchbar/SearchBar";
import { FaShoppingCart } from "react-icons/fa";

export default function Header() {
  return (
    <header>
      <img src="" alt="logo"></img>
      <DropdownMenu />
      <DropdownMenu />
      <DropdownMenu />
      <SearchBar />
      <ConnexionLink />
      <FaShoppingCart />
    </header>
  );
}
