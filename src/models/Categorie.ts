export default class Categorie {
  private _id: number;
  private _nom: string;

  constructor(id: number, nom: string) {
    this._id = id;
    this._nom = nom;
  }

  get id() {
    return this._id;
  }
  get nom() {
    return this._nom;
  }
  set nom(value: string) {
    this.nom = value;
  }
}
