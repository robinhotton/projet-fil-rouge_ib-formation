import { useEffect, useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss";
import { Link } from "react-router-dom";

/**
 *
 * @returns affichage du footer
 */
const Footer: React.FC = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  useEffect(() => {
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(prestations)
    );
  }, []);

  const prestationsEnCours = (): number => {
    return prestations.filter((prestation) => prestation.termine === false)
      .length;
  };
  const prestationsTerminees = (): number => {
    return prestations.filter((prestation) => prestation.termine === true)
      .length;
  };
  return (
    <footer>
      <div className="TopFooter">
        <p>Statistiques</p>
        <p>
          Commandes en cours : <span>{prestationsEnCours()}</span>
        </p>
        <p>
          Services livrés : <span>{prestationsTerminees()}</span>
        </p>
      </div>

      <div className="MiddleFooter">
        <ul>
          <p>À propos d'Ultramotion Corp :</p>
          <li>
            <Link to="">Nos valeurs</Link>
          </li>
          <li>
            <Link to="">Comment ça marche ?</Link>
          </li>
          <li>
            <Link to="">Devenir partenaire</Link>
          </li>
          <li>
            <Link to="">Aide et contact</Link>
          </li>
          <li>
            <Link to="">FAQ</Link>
          </li>
        </ul>
      </div>

      <div className="EndFooter">
        <div className="Social">
          <a href="https://www.facebook.com/">
            <BsFacebook className="Facebook" />
          </a>
          <a href="https://www.twitter.com/">
            <div className="TwitterDiv">
              <BsTwitter className="Twitter" />
            </div>
          </a>
          <a href="https://www.youtube.com/">
            <div className="YoutubeDiv">
              <BsYoutube className="Youtube" />
            </div>
          </a>
          <a href="http://www.linkedin.com/">
            <BsLinkedin className="Linkedin" />
          </a>
        </div>
        <p>
          © 2023 - ULTRAMOTION GROUP - <Link to="">Conditions générales</Link>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
