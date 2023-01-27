import Prestation from "./Prestation";

export default class Entreprise {
  id?: number;
  name: string;
  logo?: string;
  effectif: number;
  coordonnees: string;
  zoneGeographique: string;
  domaine: string;
  description: string;

  constructor(
    name: string = "",
    logo: string = "http://www.logo.com",
    effectif: number = 0,
    coordonnees: string = "",
    zoneGeographique: string = "",
    domaine: string = "",
    description: string = ""
  ) {
    this.name = name;
    this.logo = logo;
    this.effectif = effectif;
    this.coordonnees = coordonnees;
    this.zoneGeographique = zoneGeographique;
    this.domaine = domaine;
    this.description = description;
  }
}
