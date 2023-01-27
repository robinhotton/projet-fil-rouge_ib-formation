import { Link } from "react-router-dom";
import InscriptionClientForm from "../../components/inscriptionClientForm/inscriptionClientForm";
import Client from "../../models/Client";
import "./InscriptionPage.scss";

const InscriptionPage: React.FC = () => {
  return (
    <>
      <div className="registerBlock">
        <div className="registerImgBlock">
          <img
            src="https://static4.depositphotos.com/1022884/350/i/600/depositphotos_3504089-stock-photo-yellow-helmet-and-plans-rools.jpg"
            alt="inscriptionClient"
          />
        </div>

        <div className="registerFormBlock">
          <div className="content">
            <p>
              Déjà un inscrit chez nous ? <Link to="/" className="link">Connectez-vous</Link>
            </p>
          </div>
          <div className="formClientBlock">
            <InscriptionClientForm inscription={new Client()} />
          </div>
        </div>
      </div>
    </>
  );
};
export default InscriptionPage;
