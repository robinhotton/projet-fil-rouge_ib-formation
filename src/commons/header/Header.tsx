import ConnexionLink from "../../components/connexion/Connexion";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBarController from "../../components/searchbar/SearchBarController";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <p>logo</p>
      <Link to="/prestations">
        <p className="pLink">prestations</p>
      </Link>
      <Link to="/prestations">
        <p className="pLink">entreprises</p>
      </Link>
      <DropdownMenu placeholder="categories" route="/categorie" />
      <SearchBarController />
      <ConnexionLink />
      <FaShoppingCart className="cart" />
    </header>
  );
};
export default Header;
