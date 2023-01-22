import ConnexionLink from "../../components/connexion/Connexion";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBarController from "../../components/searchbar/SearchBarController";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <p className="pLink">logo</p>
      </Link>
      <Link to="/prestation">
        <p className="pLink">prestations</p>
      </Link>
      <DropdownMenu placeholder="categories" route="/categorie" />
      <Link to="/entreprise">
        <p className="pLink">entreprises</p>
      </Link>
      <SearchBarController />
      <ConnexionLink />
      <FaShoppingCart className="cart" />
    </header>
  );
};
export default Header;
