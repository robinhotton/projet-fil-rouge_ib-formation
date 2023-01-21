import { useEffect, useState } from "react";
import Footer from "../commons/Footer/Footer";
import Header from "../commons/header/Header";
import PrestationCard from "../components/prestation/PrestationCard";
import Prestation from "../models/Prestation";
import PrestationService from "../services/PrestationService";
import "./CategoriePage.scss";

const CategoriePage: React.FC = () => {
  // const [prestations, setPrestations] = useState<Prestation[]>([]);

  // useEffect(() => {
  //   PrestationService.getAllPrestations().then((prestations) =>
  //     setPrestations(prestations)
  //   );
  // });
  return (
    <>
      {/* {prestations.map((prestation) => { */}
      {/* <PrestationCard prestation={prestation} /> */}
      <body>
        <Header />
        <div className="categories">
          <div className="card1">
            <PrestationCard />
          </div>
          <div className="card2">
            <PrestationCard />
          </div>
          <div className="card3">
            <PrestationCard />
          </div>
          <div className="card4">
            <PrestationCard />
          </div>
          <div className="card5">
            <PrestationCard />
          </div>
          <div className="card6">
            <PrestationCard />
          </div>
          <div className="card7">
            <PrestationCard />
          </div>
          <div className="card8">
            <PrestationCard />
          </div>
          <div className="card9">
            <PrestationCard />
          </div>
        </div>
        <Footer />
      </body>
      {/* })} */}
    </>
  );
};
export default CategoriePage;
