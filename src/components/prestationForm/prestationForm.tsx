import Devis from "../../models/Devis";
import Prestation from "../../models/Prestation";

const PrestationForm: React.FC = () => {
  type props = {
    prestation?: Prestation;
  };

  type champ = {
    value?: any;
    error?: string;
    isValid?: boolean;
  };

  type Form = {
    descrption: string;
    tauxHoraire: number;
    prestation: string;
    idEntreprise: number;
    devis: Devis;
  };

  return (
    <>
      <form className="prestationForm">
        <h1 className="title bold center">Ajouter une prestation</h1>

        <div className="formBlock">
          <div className="formGroupBlock">
            <div className="formGroup">
              <input
                type="text"
                name="prestationName"
                placeholder="Nom de la prestation"
              />
              <input
                type="text"
                name="entrepriseName"
                placeholder="Nom de l'entreprise"
              />
              <input
                type="text"
                name="hourlyRate"
                placeholder="Taux horraire de la prestation"
              />
            </div>

            <div className="formGroup">
              <textarea
                name="prestationContent"
                placeholder="Description de la prestation"
              ></textarea>
            </div>
          </div>
          <input type="file" name="devis" />
        </div>
        <button
          className="buttonPrestationSubmit bigButtonText bold"
          type="submit"
        >
          Valider
        </button>
      </form>
    </>
  );
};
export default PrestationForm;