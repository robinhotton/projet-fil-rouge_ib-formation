import { useState } from "react";
import { useNavigate } from "react-router";
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
  categorie: champ;
  devis: champ;
};

const PrestationForm: React.FC<props> = ({ prestation, edit }) => {
  const [form, setForm] = useState<Form>({
    description: {
      value: prestation.description,
      isValid: true,
    },
    tauxHoraire: {
      value: prestation.tauxHoraire,
      isValid: true,
    },
    categorie: {
      value: prestation.categorie,
      isValid: true,
    },
    devis: {
      value: prestation.devis,
      isValid: true,
    },
  });

  const redirection = useNavigate();

  const editPrestation = (event: React.ChangeEvent<any>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    prestation.description = form.description.value;
    prestation.tauxHoraire = form.tauxHoraire.value;
    prestation.categorie = form.categorie.value;
    prestation.devis = form.devis.value;
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
              <label htmlFor="devis" className="subTitle medium">
                Catégorie de la prestation
              </label>
              <input
                type="text"
                name="categorie"
                value={form.categorie.value}
                onChange={editPrestation}
                placeholder="Pose de câble électrique"
              />
              <label htmlFor="devis" className="subTitle medium">
                Taux horaire de la prestation
              </label>
              <input
                type="number"
                name="tauxHoraire"
                value={form.tauxHoraire.value}
                onChange={editPrestation}
                placeholder="6.5"
              />
              <label htmlFor="devis" className="subTitle medium">
                Devis de la prestation
              </label>
              <input
                type="text"
                name="devis"
                placeholder="Url direct ou lien"
                value={form.devis.value}
                onChange={editPrestation}
              />
            </div>
            <div className="formGroup">
              <label htmlFor="devis" className="subTitle medium">
                Description de la prestation
              </label>
              <textarea
                name="description"
                placeholder="Entrez une description pour décrire la prestation"
                onChange={editPrestation}
                value={form.description.value}
              ></textarea>
            </div>
          </div>
        </div>
        <input
          className="buttonPrestationSubmit bigButtonText bold"
          type="submit"
          value="Envoyer"
        />
      </form>
    </>
  );
};
export default PrestationForm;
