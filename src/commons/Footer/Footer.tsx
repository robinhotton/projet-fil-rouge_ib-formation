import { useEffect, useState } from "react";
import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import "./Footer.scss";

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
  });

  const prestationsTotales = (): number => {
    return prestations.length;
  };
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
            <a href="">Nos valeurs</a>
          </li>
          <li>
            <a href="">Comment ça marche ?</a>
          </li>
          <li>
            <a href="">Devenir partenaire</a>
          </li>
          <li>
            <a href="">Aide et contact</a>
          </li>
          <li>
            <a href="">FAQ</a>
          </li>
        </ul>
      </div>

      <div className="EndFooter">
        <div className="Social">
          <BsFacebook className="Facebook" href="https://www.facebook.com/" />
          <div className="TwitterDiv">
            <BsTwitter className="Twitter" href="https://www.twitter.com/" />
          </div>
          <div className="YoutubeDiv">
            <BsYoutube className="Youtube" href="https://www.youtube.com/" />
          </div>
          <BsLinkedin className="Linkedin" href="http://www.linkedin.com/" />
        </div>
        <p>
          © 2023 - ULTRAMOTION GROUP - <a href="">Conditions générales</a>
        </p>
      </div>
    </footer>
  );
};
export default Footer;
