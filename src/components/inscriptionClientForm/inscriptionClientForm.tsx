import { useState } from "react";
import Client from "../../models/Client";
import ClientService from "../../services/ClientService";
import "./inscriptionClientForm.scss";

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

  const editInscription = (event: React.ChangeEvent<any>) => {
    const nomDuChamp: string = event.target.name;
    const valeurDuChamp: string = event.target.value;
    const nouveauChamp: champ = { [nomDuChamp]: { value: valeurDuChamp } };
    setForm({ ...form, ...nouveauChamp });
  };

  const soumission = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    inscription.prenom = form.prenom.value;
    inscription.nom = form.nom.value;
    inscription.mail = form.mail.value;
    inscription.motDePasse = form.motDePasse.value;

    ClientService.createClient(inscription);
  };

  const [isChecked, setIsChecked] = useState(false);

  return (
    <>
      <form className="inscriptionClientForm" onSubmit={soumission}>
        <div className="formBlock">
          <div className="formGroupBlock">
            <div className="formGroup">
              {" "}
              <img
                src="src\assets\img\LogoPrincipal.svg"
                className="imageInscription"
                alt="inscription"
              ></img>
              <h1 className="title bold">Un plaisir de vous revoir</h1>
              <button type="button" className="googleButton linkToGoogle">
                Se connecter avec Google
              </button>
              <p>Ou</p>
              <div className="prenomNom">
                <input
                  type="text"
                  name="prenom"
                  value={form.prenom.value}
                  onChange={editInscription}
                  placeholder="John"
                />
                <input
                  type="text"
                  name="nom"
                  placeholder="nom"
                  value={form.nom.value}
                  onChange={editInscription}
                />
              </div>
              <input
                type="text"
                name="mail"
                value={form.mail.value}
                onChange={editInscription}
                placeholder="Example@gmail.com"
              />
              <input
                type="password"
                name="motDePasse"
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
                  onChange={() => setIsChecked(!isChecked)}
                />
                <label htmlFor="cgu">
                  J'accepte les conditions générales d'utilisation.
                </label>
              </div>
            </div>
          </div>
        </div>

        <input
          className="buttonSubscribeSubmit bigButtonText"
          type="submit"
          value="S'inscrire"
          disabled={!isChecked}
        />
      </form>
    </>
  );
};
export default InscriptionClientForm;
