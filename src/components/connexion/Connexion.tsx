import { BsFillPersonFill } from "react-icons/bs";
import "./Connexion.scss";

const ConnexionLink = () => {
  return (
    <div className="connexion">
      <BsFillPersonFill className="person" />
      <a href="">
        <span>Connexion</span>
      </a>
    </div>
  );
};
export default ConnexionLink;
