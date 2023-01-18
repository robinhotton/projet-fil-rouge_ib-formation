import Prestation from "../../models/Prestation";
import { BsTrash } from "react-icons/bs";

type PrestationCardProps = {
  prestation: Prestation;
  deleteContact: Function;
};

const PrestationCard: React.FC<PrestationCardProps> = ({
  prestation,
  deleteContact,
}) => {
  return (
    <>
      {/* ajouter le html/css de la card */}
      <BsTrash onClick={deleteContact.bind(this, prestation.id)} />
    </>
  );
};
export default PrestationCard;
