import Evaluation from "./Evaluation";

export default class Prestation {
  id?: number;
  idEntreprise?: number;
  categorie: string;
  description: string;
  tauxHoraire: number;
  tempsPrestation?: number;
  prixMateriel?: number;
  termine: boolean;
  devis?: string;
  evaluation?: Evaluation;

  constructor(
    categorie: string = "",
    description: string = "",
    tauxHoraire: number = 0,
    devis: string = "",
    evaluation: Evaluation = new Evaluation(),
    tempsPrestation: number = 0,
    prixMateriel: number = 0
  ) {
    this.categorie = categorie;
    this.description = description;
    this.tauxHoraire = tauxHoraire;
    this.termine = false;
    this.devis = devis;
    this.evaluation = evaluation;
    this.tempsPrestation = tempsPrestation;
    this.prixMateriel = prixMateriel;
  }

  public prixTotal(): number {
    if (this.tempsPrestation && this.prixMateriel) {
      return this.tauxHoraire * this.tempsPrestation + this.prixMateriel;
    } else return 0;
  }
}
