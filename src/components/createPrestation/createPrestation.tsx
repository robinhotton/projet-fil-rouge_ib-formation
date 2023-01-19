import { useState } from "react";
import Prestation from "../../models/Prestation";
import PrestationForm from "../prestationForm/prestationForm";
import "./createPrestation.scss";

const CreatePrestation: React.FC = () => {
  const [prestation] = useState<Prestation>(new Prestation());
  return (
    <main>
      <PrestationForm prestation={prestation} edit={false} />
    </main>
  );
};

export default CreatePrestation;
