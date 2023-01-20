import { BsFacebook } from "react-icons/bs";
import { BsTwitter } from "react-icons/bs";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

/**
 *
 * @returns affichage du footer
 */
const Footer: React.FC = () => {
  return (
    <footer>
      <div className="TopFooter">
        <p>Statistiques</p>
        <p>
          Commandes en cours : <span>4821</span>
        </p>
        <p>
          Services livrés : <span>8971</span>
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
