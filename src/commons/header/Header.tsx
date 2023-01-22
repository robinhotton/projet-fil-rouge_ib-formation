import ConnexionLink from "../../components/connexion/Connexion";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBarController from "../../components/searchbar/SearchBarController";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <svg xmlns="http://www.w3.org/2000/svg">
        <image href="LogoDarkMode.svg" />
      </svg>

      <DropdownMenu />
      <DropdownMenu />
      <DropdownMenu />
      <SearchBarController />
      <ConnexionLink />
      <FaShoppingCart className="cart" />
    </header>
  );
};
export default Header;
