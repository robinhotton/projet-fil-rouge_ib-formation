import Prestation from "../../models/Prestation";
import "./prestationDetail.scss";

type PrestationCardProps = {
  prestation?: Prestation;
};

const PrestationDetail: React.FC<PrestationCardProps> = () => {
  return (
    <>
      <div className="pageDetailBlock">
        <div className="contentBlock">
          <h1 className="title bold">Nom de la prestation</h1>
          <h2 className="entrepriseName subTitle medium">
            Nom de l'entreprise
          </h2>
          <h2 className="subTitle medium">Cordonnée géographiques (+30km)</h2>
          <p className="content">
            Lorem ipsum, dolor sit amet consectetur adipisicing elit. Cumque
            expedita suscipit quasi? Repellendus expedita optio, error tempore
            aliquid soluta animi iusto. Repudiandae, nesciunt cupiditate quos
            recusandae laudantium alias quibusdam eveniet?
          </p>
          <button className="buttonPrestationSubmit bigButtonText bold">
            Demander un devis
          </button>
        </div>
        <div className="galeryBlock">
          <div className="firstRow">
            <img
              className="img1"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image"
            />
            <img
              className="img2"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt=""
            />
          </div>
          <div className="secondRow">
            <img
              className="img3"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt=""
            />
          </div>
          <div className="thirdRow">
            {" "}
            <img
              className="img4"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image"
            />
            <img
              className="img5"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt=""
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrestationDetail;
