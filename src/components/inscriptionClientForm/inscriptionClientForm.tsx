import { useState } from "react";
import Client from "../../models/Client";
import ClientService from "../../services/ClientService";

type props = {
  inscription: Client;
};

type champ = {
  value?: any;
  error?: string;
  isValid?: boolean;
};

type Form = {
  prenom: champ;
  nom: champ;
  mail: champ;
  motDePasse: champ;
};

const InscriptionClientForm: React.FC<props> = ({ inscription }) => {
  const [form, setForm] = useState<Form>({
    prenom: {
      value: inscription.prenom,
      isValid: true,
    },
    nom: {
      value: inscription.nom,
      isValid: true,
    },
    mail: {
      value: inscription.mail,
      isValid: true,
    },
    motDePasse: {
      value: inscription.motDePasse,
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

  /**
   * Prends le client recu en paramètre etle créer, grâce aux informations stocké dans le hook form avant de push dans la base de donnée
   * @param event Ce lance quand on clique sur le bouton submit
   */
  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inscription.prenom = form.prenom.value;
    inscription.nom = form.nom.value;
    inscription.mail = form.mail.value;
    inscription.motDePasse = form.motDePasse.value;

    ClientService.createClient(inscription);
  };
  return (
    <>
      <form className="inscriptionClientForm" onSubmit={soumission}>
        <div className="formBlock">
          <div className="formGroupBlock">
            <div className="formGroup">
              {" "}
              <img src="../../assets/img/LogoPrincipal.svg"></img>
              <h1 className="title bold">Un plaisir de vous revoir</h1>
              <button type="button" className="googleButton">
                Se connecter avec Google
              </button>
              <p>Ou</p>
              <input
                type="text"
                name="email"
                value={form.mail.value}
                onChange={editInscription}
                placeholder="Example@gmail.com"
              />
              <input
                type="password"
                name="password"
                placeholder="MotDePasse"
                value={form.motDePasse.value}
                onChange={editInscription}
              />
              <div>
                <input
                  type="checkbox"
                  name="prestataireSouscription"
                  className="prestataireSouscription"
                  value="prestataireSouscription"
                />
                <label htmlFor="prestataireSouscription">
                  Je souhaite m'inscrire en tant que prestataire
                </label>
              </div>
              <div>
                <input
                  type="checkbox"
                  name="cgu"
                  className="cgu"
                  value="cgu"
                  required
                />
                <label htmlFor="cgu">
                  J'accepte les conditions générales d'utilisation.
                </label>
              </div>
            </div>
          </div>
        </div>

        <input
          className="buttonSubscribeSubmit"
          type="submit"
          value="S'inscrire"
        />
      </form>
    </>
  );
};
export default InscriptionClientForm;
