import InscriptionClientForm from "../components/inscriptionClientForm/inscriptionClientForm";
import Client from "../models/Client";

const InscriptionPage: React.FC = () => {
  return (
    <>
      <div>
        <img
          src="https://static4.depositphotos.com/1022884/350/i/600/depositphotos_3504089-stock-photo-yellow-helmet-and-plans-rools.jpg"
          alt="inscriptionClient"
        ></img>
        <div>
          <p>Déjà un inscrit chez nous ?</p>
          <a href="">Connectez-vous</a>
        </div>
        <div>
          <InscriptionClientForm inscription={new Client()} />
        </div>
      </div>
    </>
  );
};
export default InscriptionPage;
