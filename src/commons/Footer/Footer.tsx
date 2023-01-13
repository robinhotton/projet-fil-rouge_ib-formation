import { BsFacebook } from "react-icons/bs";
import { AiFillTwitterCircle } from "react-icons/ai";
import { BsYoutube } from "react-icons/bs";
import { BsLinkedin } from "react-icons/bs";
import "./Footer.scss";

export default function Footer() {
  return (
    <footer>
      <div className="TopFooter">
        <p>Statistiques</p>
        <p>Commandes en cours:</p>
        <span>4821</span>
        <p>Services livrés:</p>
        <span>8971</span>
      </div>

      <div className="MiddleFooter">
        <ul><p>À propos d'Ultramotion Corp</p>
          <li><a href="">Nos valeurs</a></li>
          <li><a href="">Comment ça marche ?</a></li>
          <li><a href="">Devenir partenaire</a></li>
          <li><a href="">Aide et contact</a></li>
          <li><a href="">FAQ</a></li>
        </ul> 
      </div>

      <div className="EndFooter">
        <BsFacebook className="Facebook" href="https://www.facebook.com/" />
        <AiFillTwitterCircle
          className="Twitter"
          href="https://www.twitter.com/"
        />
        <BsYoutube className="Youtube" href="https://www.youtube.com/" />
        <BsLinkedin className="Linkedin" href="http://www.linkedin.com/" />
        <p>
          © 2023 - ULTRAMOTION GROUP - <a href="">Conditions générales</a>
        </p>
      </div>
    </footer>
  );
}
