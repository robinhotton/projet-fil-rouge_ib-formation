import { Link } from "react-router-dom";
import "./GridCategorie.scss";

const GridCategorie: React.FC = () => {
  return (
    <main className="categorie-grid">
      <div className="categorie">
        <Link to="/categorie/1">
          <img
            src="https://journal-electricite.com/wp-content/uploads/2021/10/schema-de-cablage-tableau-electrique.jpg"
            alt="Le câblage d'armoire électrique"
          />
          <p className="titleCard">Le câblage d'armoire électrique</p>
        </Link>
      </div>

      <div className="categorie">
        <Link to="/categorie/2">
          <img
            src="https://www.allnews.ch/sites/default/files/images/Poignee_Main_CS_Barings_384043599_Keystone_RS.jpg"
            alt="L'accompagnement aux choix de matériels industriels"
          />
          <p className="titleCard">
            L'accompagnement aux choix de matériels industriels
          </p>
        </Link>
      </div>

      <div className="categorie">
        <Link to="/categorie/3">
          <img
            src="https://www.automatisme-vision-service.com/oktThemes/ra160-s/images/integ/image2.jpg"
            alt="L'installation de matériels"
          />
          <p className="titleCard">L'installation de matériels</p>
        </Link>
      </div>

      <div className="categorie">
        <Link to="/categorie/4">
          <img
            src="https://www.alternance-professionnelle.fr/wp-content/uploads/2017/09/emploi-secteur-BTP.jpg"
            alt="Autre"
          />
          <p className="titleCard">Autre</p>
        </Link>
      </div>
    </main>
  );
};
export default GridCategorie;
