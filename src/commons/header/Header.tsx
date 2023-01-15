import ConnexionLink from "../../components/connexion/Connexion";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBar from "../../components/searchbar/SearchBar";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

export default function Header() {
  return (
    <header>
      <img src="" alt="logo"></img>
      <DropdownMenu />
      <DropdownMenu />
      <DropdownMenu />
      <SearchBar />
      <ConnexionLink />
      <FaShoppingCart className="cart" />
    </header>
  );
}
