import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router";
import Entreprise from "../../models/Entreprise";
import Prestation from "../../models/Prestation";
import EntrepriseService from "../../services/EntrepriseService";
import PrestationService from "../../services/PrestationService";
import "./prestationDetail.scss";
import { FiEdit } from "react-icons/fi";
import { Link } from "react-router-dom";

type PrestationCardProps = {
  prestation?: Prestation;
};

const PrestationDetail: React.FC<PrestationCardProps> = () => {
  const [prestationDetail, setPrestationDetail] = useState<Prestation>();
  const [entreprise, setEntreprise] = useState<Entreprise>();

  /**
   * id de l'url qui est utilisé pour récupéré la bonne prestation
   */
  let { id } = useParams<string>();

  /**
   * permet de rediriger l'url grâce a la route du routeur
   */
  const redirection = useNavigate();

  /**
   * Récupère	la prestation grâce a son id et le useParams id.
   * Fais une jointure entre l'idEntreprise de de la prestation et l'id de l'entreprise, puis stocke l'entreprise dans le hook entreprise.
   */
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
  }, [id, prestationDetail?.idEntreprise]);

  /**
   * Ajoute au panier quand le client clique sur le bouton et redirige sur la page prestation
   */
  const handleClick = () => {
    if (prestationDetail) {
      //par defaut sur le client 1, a changer quand on aura la connexion
      prestationDetail.idClient = 1;
      PrestationService.updatePrestation(prestationDetail);
      redirection("/panier");
    }
  };

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
          <div className="flex">
            <button
              className="buttonPrestationSubmit bigButtonText bold"
              onClick={() => handleClick()}
            >
              Ajouter au panier
            </button>
            <Link to={`/prestation/edit/${id}`}>
              <FiEdit className="editPrestation" />{" "}
            </Link>
          </div>
        </div>
        <div className="galeryBlock">
          <div className="firstRow">
            <img
              className="detail-img1"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image1"
            />
            <img
              className="detail-img2"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image2"
            />
          </div>
          <div className="secondRow">
            <img
              className="detail-img3"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image3"
            />
          </div>
          <div className="thirdRow">
            <img
              className="detail-img4"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image4"
            />
            <img
              className="detail-img5"
              src="https://images.pexels.com/photos/8853535/pexels-photo-8853535.jpeg?auto=compress&amp;cs=tinysrgb&amp;w=600"
              alt="image5"
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default PrestationDetail;
