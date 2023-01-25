import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";
import PrestationForm from "./prestationForm";

const EditPrestation: React.FC = () => {
  const [prestation, setPrestation] = useState<Prestation>(new Prestation());

  /**
   * id de la prestation a récupèré grace a l'url
   */
  const { id } = useParams<string>();

  /**
   * recupère la prestation grace a son id
   */
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
        <h1>La prestation n'existe pas</h1>
      )}
    </main>
  );
};

export default EditPrestation;
