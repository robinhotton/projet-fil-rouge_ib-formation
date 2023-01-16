import Categorie from "./Categorie";
import Devis from "./Devis";
import Evaluation from "./Evaluation";

export default class Prestation {
  private _id: number;
  private _idEntreprise: number;
  private _categorie: Categorie;
  private _description: string;
  private _tauxHoraire: number;
  private _termine: boolean;
  private _devis?: Devis;
  private _evaluation?: Evaluation;

  constructor(
    id: number,
    idEntreprise: number,
    categorie: Categorie,
    description: string,
    tauxHoraire: number,
    devis: Devis,
    evaluation: Evaluation
  ) {
    this._id = id;
    this._idEntreprise = idEntreprise;
    this._categorie = categorie;
    this._description = description;
    this._tauxHoraire = tauxHoraire;
    this._termine = false;
    this._devis = devis || undefined;
    this._evaluation = evaluation || undefined;
  }

  public addDevis(devis: Devis): void {
    this._devis = devis;
  }
  public removeDevis(): void {
    this._devis = undefined;
  }

  public addEvaluation(evaluation: Evaluation): void {
    this._evaluation = evaluation;
  }
  public removeEvaluation(): void {
    this._evaluation = undefined;
  }

  get id() {
    return this._id;
  }
  get idEntreprise() {
    return this._idEntreprise;
  }
  get categorie() {
    return this._categorie;
  }
  get description() {
    return this._description;
  }
  get tauxHoraire() {
    return this._tauxHoraire;
  }
  get termine() {
    return this._termine;
  }
  get devis() {
    return this._devis;
  }
  get evaluation() {
    return this._evaluation;
  }
  set id(id: number) {
    this._id = id;
  }
  set idEntreprise(id: number) {
    this._idEntreprise = id;
  }
  set categorie(categorie: Categorie) {
    this._categorie = categorie;
  }
  set description(description: string) {
    this._description = description;
  }
  set tauxHoraire(txHoraire: number) {
    this._tauxHoraire = this.tauxHoraire;
  }
}
