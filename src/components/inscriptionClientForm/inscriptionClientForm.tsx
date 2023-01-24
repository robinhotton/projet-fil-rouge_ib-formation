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
  lastName: champ;
  name: champ;
  email: champ;
  password: champ;
};

const InscriptionClientForm: React.FC<props> = ({ inscription }) => {
  const [form, setForm] = useState<Form>({
    lastName: {
      value: inscription.lastName,
      isValid: true,
    },
    name: {
      value: inscription.name,
      isValid: true,
    },
    email: {
      value: inscription.email,
      isValid: true,
    },
    password: {
      value: inscription.password,
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
    inscription.lastName = form.lastName.value;
    inscription.name = form.name.value;
    inscription.email = form.email.value;
    inscription.password = form.password.value;

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
                value={form.email.value}
                onChange={editInscription}
                placeholder="Example@gmail.com"
              />
              <input
                type="password"
                name="password"
                placeholder="MotDePasse"
                value={form.password.value}
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
