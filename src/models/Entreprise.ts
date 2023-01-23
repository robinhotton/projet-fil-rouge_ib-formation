import Prestation from "./Prestation";

export default class Entreprise {
  id?: number;
  name: string;
  logo?: string;
  effectif: number;
  coordonnees: string;
  zoneGeographique: string;

  constructor(
    name: string,
    logo: string,
    effectif: number,
    coordonnees: string,
    zoneGeographique: string
  ) {
    this.name = name;
    this.logo = logo;
    this.effectif = effectif;
    this.coordonnees = coordonnees;
    this.zoneGeographique = zoneGeographique;
  }
}
