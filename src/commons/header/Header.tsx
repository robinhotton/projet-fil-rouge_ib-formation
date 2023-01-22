import ConnexionLink from "../../components/connexion/Connexion";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBarController from "../../components/searchbar/SearchBarController";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";

const Header: React.FC = () => {
  return (
    <header>
      <p>logo</p>
      <DropdownMenu placeholder="prestations" route="/prestation" />
      <DropdownMenu placeholder="categories" route="/categorie" />
      <DropdownMenu placeholder="categories" route="/categorie" />
      <SearchBarController />
      <ConnexionLink />
      <FaShoppingCart className="cart" />
    </header>
  );
};
export default Header;
