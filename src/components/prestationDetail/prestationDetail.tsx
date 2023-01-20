import Prestation from "../../models/Prestation";
import "./prestationDetail.scss";

type PrestationCardProps = {
  prestation?: Prestation;
};

const PrestationDetail: React.FC<PrestationCardProps> = () => {
  return (
    <>
      <h1>Nom de la prestation</h1>
      <h2>Nom de l'entreprise</h2>
      <h2>Cordonnée géographiques (+30km)</h2>

      <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque expedita suscipit quasi? Repellendus expedita optio, error tempore aliquid soluta animi iusto. Repudiandae, nesciunt cupiditate quos recusandae laudantium alias quibusdam eveniet?</p>

    </>
  );
};

export default PrestationDetail;
