import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import { Link, useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Prestation from "../models/Prestation";
import PrestationService from "../services/PrestationService";
import { FiEdit } from "react-icons/fi";
import PrestationCard from "../components/prestation/PrestationCard";

const PrestationPage: React.FC = () => {
  const [prestation, setPrestation] = useState<Prestation>();
  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      PrestationService.getPrestationsById(+id).then((prestation) =>
        setPrestation(prestation)
      );
    }
  }, [id]);

  return (
    <>
      <Header />
      {prestation?.id ? (
        <>
          <div className="card">
            <PrestationCard prestation={prestation} />
          </div>
        </>
      ) : (
        <h1>Ce héros n'existe pas</h1>
      )}
      <Footer />
    </>
  );
};
export default PrestationPage;
