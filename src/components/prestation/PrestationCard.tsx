import Prestation from "../../models/Prestation";
import "./PrestationCard.scss";
type PrestationCardProps = {
  prestation?: Prestation;
};

const PrestationCard: React.FC<PrestationCardProps> = ({ prestation }) => {
  return (
    <>
      <h1>je suis une card</h1>
      {/* ajouter le html/css de la card */}
    </>
  );
};
export default PrestationCard;
