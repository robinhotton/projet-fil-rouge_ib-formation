import ConnexionLink from "../../components/inscriptionLink/InscriptionLink";
import DropdownMenu from "../../components/dropdown/DropdownMenu";
import SearchBarController from "../../components/searchbar/SearchBarController";
import { FaShoppingCart } from "react-icons/fa";
import "./Header.scss";
import { Link } from "react-router-dom";

const Header: React.FC = () => {
  return (
    <header>
      <Link to="/">
        <img src="/DarkMode.png" alt="Logo" />
      </Link>
      <Link to="/prestation">
        <p className="pLink">Prestations</p>
      </Link>
      <DropdownMenu placeholder="Categories" route="/categorie" />
      <Link to="/entreprise">
        <p className="pLink">Entreprises</p>
      </Link>
      <SearchBarController />
      <ConnexionLink />
      <Link to="/panier">
        <FaShoppingCart className="cart" />
      </Link>
    </header>
  );
};
export default Header;
