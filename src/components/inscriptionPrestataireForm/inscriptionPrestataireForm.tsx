import { useState } from "react";
import { useNavigate } from "react-router";
import Entreprise from "../../models/Entreprise";
import EntrepriseService from "../../services/EntrepriseService";

type props = {
  inscription: Entreprise;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  name: champ;
  description: champ;
  coordonnees: champ;
  domaine: champ;
  zoneGeographique: champ;
  effectif: champ;
};

const InscriptionPrestataireForm: React.FC<props> = ({ inscription }) => {
  const [form, setForm] = useState<Form>({
    name: {
      value: inscription.name,
      isValid: true,
    },
    description: {
      value: inscription.description,
      isValid: true,
    },
    coordonnees: {
      value: inscription.coordonnees,
      isValid: true,
    },
    domaine: {
      value: inscription.domaine,
      isValid: true,
    },
    zoneGeographique: {
      value: inscription.zoneGeographique,
      isValid: true,
    },
    effectif: {
      value: inscription.effectif,
      isValid: true,
    },
  });

  /**
   * stocke la modification dans le hook form dans la bonne variable
   * @param event Ce lance quand une modification est faite sur un champs
   */
  const editInscription = (event: React.ChangeEvent<any>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const redirection = useNavigate();
  /**
   * Prends l'entreprise recu en paramètre etle créer, grâce aux informations stocké dans le hook form avant de push dans la base de donnée
   * @param event Ce lance quand on clique sur le bouton submit
   */
  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inscription.name = form.name.value;
    inscription.description = form.description.value;
    inscription.coordonnees = form.coordonnees.value;
    inscription.domaine = form.domaine.value;
    inscription.zoneGeographique = form.zoneGeographique.value;
    inscription.effectif = form.effectif.value;
    EntrepriseService.createEntreprise(inscription);
    redirection("/");
  };

  return (
    <>
      <form onSubmit={soumission}>
        <h1 className="title bold center">
          S'inscrire en tant que prestataire
        </h1>

        <div className="formBlock">
          <div className="formGroupBlock">
            <div className="formPrestataireGroup">
              <div className="inputBlock">
                <label htmlFor="name" className="subTitle medium">
                  Nom de l'entreprise :
                </label>
                <input
                  type="text"
                  name="name"
                  value={form.name.value}
                  onChange={editInscription}
                  placeholder="Nom de l'entreprise"
                />
              </div>
              <div className="inputBlock">
                <label htmlFor="description" className="subTitle medium">
                  Description de l'entreprise :
                </label>
                <textarea
                  name="description"
                  placeholder="Description de l'entreprise"
                  onChange={editInscription}
                  value={form.description.value}
                ></textarea>
              </div>
              <div className="inputBlock">
                <label htmlFor="coordonnees" className="subTitle medium">
                  Coordonnées :
                </label>
                <input
                  type="text"
                  name="coordonnees"
                  placeholder="Coordonnées de l'entreprise"
                  value={form.coordonnees.value}
                  onChange={editInscription}
                />
              </div>
              <div className="inputBlock">
                <label htmlFor="domaine" className="subTitle medium">
                  Domaine activité :
                </label>
                <input
                  type="text"
                  name="domaine"
                  placeholder="Domaine activité de l'entreprise : Couvreur"
                  value={form.domaine.value}
                  onChange={editInscription}
                />
              </div>
              <div className="inputBlock">
                <label htmlFor="domaine" className="subTitle medium">
                  Zone Géographique :
                </label>
                <input
                  type="text"
                  name="zoneGeographique"
                  placeholder="Zone géographique de l'entreprise : Métropôle Lilloise"
                  value={form.zoneGeographique.value}
                  onChange={editInscription}
                />
              </div>
              <div className="inputBlock">
                <label htmlFor="domaine" className="subTitle medium">
                  Nombre effectif :
                </label>
                <input
                  type="number"
                  name="effectif"
                  value={form.effectif.value}
                  onChange={editInscription}
                  placeholder="Effectif de l'entreprise"
                />
              </div>
            </div>
          </div>
        </div>

        <input
          className="buttonPrestationSubmit bigButtonText bold"
          type="submit"
          value="Valider l'inscription"
        />
      </form>
    </>
  );
};
export default InscriptionPrestataireForm;
