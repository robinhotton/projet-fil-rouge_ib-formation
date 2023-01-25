import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Entreprise from "../../models/Entreprise";
import Prestation from "../../models/Prestation";
import EntrepriseService from "../../services/EntrepriseService";
import PrestationService from "../../services/PrestationService";
import "./prestationDetail.scss";

type PrestationCardProps = {
  prestation?: Prestation;
};

const PrestationDetail: React.FC<PrestationCardProps> = () => {
  const [prestationDetail, setPrestationDetail] = useState<Prestation>();
  const [entreprise, setEntreprise] = useState<Entreprise>();

  let { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      PrestationService.getPrestationsById(+id).then((data) =>
        setPrestationDetail(data)
      );
    }
    if (prestationDetail?.idEntreprise) {
      EntrepriseService.getEntrepriseById(prestationDetail?.idEntreprise).then(
        (data) => setEntreprise(data)
      );
    }
  }, [prestationDetail?.idEntreprise]);

  return (
    <>
      <div className="pageDetailBlock">
        <div className="contentBlock">
          <h1 className="title bold">{prestationDetail?.categorie}</h1>
          <h2 className="entrepriseName subTitle medium">{entreprise?.name}</h2>
          <h2 className="subTitle medium">
            {entreprise?.coordonnees} - {entreprise?.zoneGeographique}
          </h2>
          <p className="content">{prestationDetail?.description}</p>
          <button className="buttonPrestationSubmit bigButtonText bold">
            <a className="bigButtonText" href="https://www.coover.fr/wp-content/uploads/2019/11/exemple-devis-gratuit.png" download="devis.png">Demander un devis</a>
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
              alt="image"
            />
          </div>
          <div className="secondRow">
            <img
              className="img3"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image"
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
              alt="image"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrestationDetail;
