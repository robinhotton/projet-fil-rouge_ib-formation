export default class Devis {
  private _tempsPrestation!: number;
  private _prixMateriel!: number;

  constructor(tempsPrestation: number, prixMateriel: number) {
    this.tempsPrestation = tempsPrestation;
    this.prixMateriel = prixMateriel;
  }

  get tempsPrestation(): number {
    return this._tempsPrestation;
  }
  get prixMateriel(): number {
    return this._prixMateriel;
  }
  set tempsPrestation(tempsPrestation: number) {
    if (this.estPositif(tempsPrestation)) this._prixMateriel = tempsPrestation;
    else throw this.messageErreur();
  }
  set prixMateriel(prixMateriel: number) {
    if (this.estPositif(prixMateriel)) this._prixMateriel = prixMateriel;
    else throw this.messageErreur();
  }

  private estPositif(prix: number): boolean {
    if (prix >= 0) return true;
    else return false;
  }

  private messageErreur(): string {
    return "Le nombre doit être positif";
  }
}
