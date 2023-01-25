import InscriptionClientForm from "../components/inscriptionClientForm/inscriptionClientForm";
import Client from "../models/Client";
import "./InscriptionPage.scss";
const InscriptionPage: React.FC = () => {
  return (
    <>
      <div>
        <img
          src="https://static4.depositphotos.com/1022884/350/i/600/depositphotos_3504089-stock-photo-yellow-helmet-and-plans-rools.jpg"
          className="imageConnexion"
          alt="inscriptionClient"
        ></img>
        <div>
          <p>
            Déjà un inscrit chez nous ?{" "}
            <a href="" className="link">
              Connectez-vous
            </a>
          </p>
        </div>
        <div>
          <InscriptionClientForm inscription={new Client()} />
        </div>
      </div>
    </>
  );
};
export default InscriptionPage;
