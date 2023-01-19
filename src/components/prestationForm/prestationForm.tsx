import { useState } from "react";
import { useNavigate } from "react-router";
import Devis from "../../models/Devis";
import Prestation from "../../models/Prestation";
import PrestationService from "../../services/PrestationService";

type props = {
  prestation: Prestation;
  edit: boolean;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  description: champ;
  tauxHoraire: champ;
  categorieName: champ;
  devis: champ;
};

const PrestationForm: React.FC<props> = ({ prestation, edit }) => {
  const [form, setForm] = useState<Form>({
    description: {
      value: prestation?.description,
      isValid: true,
    },
    tauxHoraire: {
      value: prestation?.tauxHoraire,
      isValid: true,
    },
    categorieName: {
      value: prestation?.categorie.nom,
      isValid: true,
    },
    devis: {
      value: prestation?.devis,
      isValid: true,
    },
  });

  const redirection = useNavigate();

  const editPrestation = (event: React.ChangeEvent<HTMLInputElement>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const description = form.description.value;
    const tauxHoraire = form.tauxHoraire.value;
    const categorieName = form.categorieName.value;
    const devis = form.devis.value;
    if (edit) maj();
    else ajout();
  };
  const ajout = () => {
    PrestationService.createPrestation(prestation).then(() => redirection(`/`));
  };
  const maj = () => {
    PrestationService.updatePrestation(prestation).then(() =>
      redirection(`/${prestation.id}`)
    );
  };

  const supprPrestation = () => {
    PrestationService.deletePrestations(prestation);
    redirection(`/`);
  };

  return (
    <>
      <form className="prestationForm" onSubmit={soumission}>
        <h1 className="title bold center">Ajouter une prestation</h1>

        <div className="formBlock">
          <div className="formGroupBlock">
            <div className="formGroup">
              <input
                type="text"
                name="categorie"
                placeholder="Nom de la prestation"
              />
              <input
                type="text"
                name="tauxHoraire"
                placeholder="Taux horraire de la prestation"
              />
            </div>
            <div className="formGroup">
              <textarea
                name="description"
                placeholder="Description de la prestation"
              ></textarea>
            </div>
          </div>
          <input type="text" name="devis" />
        </div>
        <input
          className="buttonPrestationSubmit bigButtonText bold"
          type="submit"
        />
      </form>
    </>
  );
};
export default PrestationForm;
