import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationForm from "../prestationForm/prestationForm";

const EditPrestation: React.FC = () => {
  const [prestation, setPrestation] = useState<Prestation>(new Prestation());
  const { id } = useParams<string>();

  useEffect(() => {
    if (id) {
      PrestationService.getPrestationsById(+id).then((prestation) => {
        setPrestation(prestation);
      });
    }
  }, [id]);

  return (
    <main>
      {prestation?.id ? (
        <>
          <PrestationForm prestation={prestation} edit={true} />
        </>
      ) : (
        <></>
      )}
    </main>
  );
};

export default EditPrestation;
