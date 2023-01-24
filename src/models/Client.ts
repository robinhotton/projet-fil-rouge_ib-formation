import Prestation from "./Prestation";

export default class Client {
  id?: number;
  nom: string;
  prenom: string;
  mail: string;
  motDePasse: string;
  panier: Prestation[] = [];

  constructor(
    nom: string = "",
    prenom: string = "",
    mail: string = "",
    motDePasse: string = ""
  ) {
    this.nom = nom;
    this.prenom = prenom;
    this.mail = mail;
    this.motDePasse = motDePasse;
  }
}
