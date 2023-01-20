import ConnexionLink from "../../components/connexion/Connexion";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBarController from "../../components/searchbar/SearchBarController";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <img src="" alt="logo"></img>
      <DropdownMenu />
      <DropdownMenu />
      <DropdownMenu />
      {/* <SearchBarController /> */}
      <ConnexionLink />
      <FaShoppingCart className="cart" />
    </header>
  );
};
export default Header;
