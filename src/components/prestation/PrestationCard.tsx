import Prestation from "../../models/Prestation";
import "./PrestationCard.scss";
type PrestationCardProps = {
  prestation?: Prestation;
};

const PrestationCard: React.FC<PrestationCardProps> = ({ prestation }) => {
  return (
    <div className="fullCard">
      <img
        src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&cs=tinysrgb&w=600"
        alt="prestation"
      />
      <div className="infoCard">
        <h1 className="titleCard">NOM DE L'ENTREPRISE</h1>
        <h2 className="coord">Nom de la ville</h2>
        <p className="contentCard">
          Réparation / mise en place d'armoire électrique
        </p>
      </div>
      <button>En savoir plus</button>
    </div>
  );
};
export default PrestationCard;
