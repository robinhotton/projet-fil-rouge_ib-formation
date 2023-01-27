import { useState } from "react";
import Client from "../../models/Client";
import ClientService from "../../services/ClientService";
import "./inscriptionClientForm.scss";
import { FcGoogle } from "react-icons/fc";
import { useNavigate } from "react-router";

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

  const [isChecked, setIsChecked] = useState(false);
  const [changeValue, setChangeValue] = useState(false);
  const redirection = useNavigate();

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

    if (changeValue) {
      redirection("/inscription/entreprise");
    } else {
      redirection("/");
    }
  };

  return (
    <>
      <img
        src="../../assets/img/LogoPrincipal.svg"
        className="imageInscription"
        alt="inscription"
      ></img>
      <form onSubmit={soumission}>
        <button type="button" className="googleButton linkToGoogle">
          <FcGoogle /> Se connecter avec Google
        </button>
        <div className="otherBlock">
          <hr className="line" />
          <p className="or content center">Ou</p>
          <hr className="line" />
        </div>

        <div className="formGroup">
          <div className="nameGroup">
            <div className="inputBlock">
              <label htmlFor="prenom" className="subTitle medium">
                Prenom :
              </label>
              <input
                type="text"
                name="prenom"
                placeholder="John"
                value={form.prenom.value}
                onChange={editInscription}
              />
            </div>
            <div className="inputBlock">
              <label htmlFor="prenom" className="subTitle medium">
                Nom :
              </label>
              <input
                type="text"
                name="nom"
                placeholder="Doe"
                value={form.nom.value}
                onChange={editInscription}
              />
            </div>
          </div>
          <div className="inputBlock emailGroup">
            <label htmlFor="prenom" className="subTitle medium">
              Email :
            </label>
            <input
              type="email"
              name="mail"
              value={form.mail.value}
              onChange={editInscription}
              placeholder="Example@gmail.com"
            />
          </div>
          <label htmlFor="prenom" className="subTitle medium">
            Mot de passe :
          </label>
          <div className="inputBlock passwordGroup">
            <input
              type="password"
              name="motDePasse"
              placeholder="MotDePasse"
              value={form.motDePasse.value}
              onChange={editInscription}
            />
          </div>
          <div className="checkboxLine">
            <input
              type="checkbox"
              name="prestataireSouscription"
              className="prestataireSouscription"
              value="prestataireSouscription"
              onClick={() => setChangeValue(!changeValue)}
            />
            <label htmlFor="prestataireSouscription" className="content">
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
              onChange={() => setIsChecked(!isChecked)}
            />
            <label htmlFor="cgu" className="content">
              J'accepte les conditions générales d'utilisation.
            </label>
          </div>

          <input
            className="buttonPrestationSubmit bigButtonText"
            type="submit"
            value={changeValue ? "Suivant" : "S'inscrire"}
            disabled={!isChecked}
          />
        </div>
      </form>
    </>
  );
};
export default InscriptionClientForm;
