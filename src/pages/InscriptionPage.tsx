import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";

const InscriptionPage: React.FC = () => {
  return (
    <>
      <div>
        <img
          src="https://static4.depositphotos.com/1022884/350/i/600/depositphotos_3504089-stock-photo-yellow-helmet-and-plans-rools.jpg"
          alt="inscription"
        ></img>
        <div>
          <InscriptionClientForm inscription={new Client()} />
        </div>
      </div>
    </>
  );
};
export default InscriptionPage;
