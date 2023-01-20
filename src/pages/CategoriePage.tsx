import { useEffect, useState } from "react";
import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import PrestationCard from "../components/prestation/PrestationCard";
import Prestation from "../models/Prestation";
import PrestationService from "../services/PrestationService";

const CategoriePage: React.FC = () => {
  // const [prestations, setPrestations] = useState<Prestation[]>([]);

  // useEffect(() => {
  //   PrestationService.getAllPrestations().then((prestations) =>
  //     setPrestations(prestations)
  //   );
  // });
  return (
    <>
      <Header />
      {/* {prestations.map((prestation) => { */}
      {/* <PrestationCard prestation={prestation} /> */}
      <PrestationCard />
      {/* })} */}

      <Footer />
    </>
  );
};

export default CategoriePage;
