import Prestation from "./Prestation";

export default class Entreprise {
  id?: number;
  name: string;
  logo?: string;
  effectif: number;
  coordonnees: string;
  domaineActivite: string;
  zoneGeographique: string;
  prestations: Prestation[] = [];

  constructor(
    name: string,
    logo: string,
    effectif: number,
    coordonnees: string,
    domaineActivite: string,
    zoneGeographique: string
  ) {
    this.name = name;
    this.logo = logo;
    this.effectif = effectif;
    this.coordonnees = coordonnees;
    this.domaineActivite = domaineActivite;
    this.zoneGeographique = zoneGeographique;
  }

  createPrestation = (prestation: Prestation) => {
    if (this.id) {
      prestation.idEntreprise = this.id;
      this.prestations.push(prestation);
    }
  };
}
