import { BsFillPersonFill } from "react-icons/bs";
import { Link } from "react-router-dom";
import "./Connexion.scss";

const ConnexionLink: React.FC = () => {
  return (
    <div className="connexion">
      <BsFillPersonFill className="person" />
      <Link to="/inscription/client">
        <span>S'inscrire</span>
      </Link>
    </div>
  );
};
export default ConnexionLink;
