import Devis from "./Devis";
import Evaluation from "./Evaluation";

export default class Prestation {
  categorie: string;
  description: string;
  tauxHoraire: number;
  termine: boolean;
  id?: number;
  idEntreprise?: number;
  evaluation?: Evaluation;
  devis?: string;
  tempsPrestation!: number;
  prixMateriel!: number;

  constructor(
    categorie: string = "",
    description: string = "",
    tauxHoraire: number = 0,
    devis: string = "",
    evaluation: Evaluation = new Evaluation(5, 5, 5, 5)
  ) {
    this.categorie = categorie;
    this.description = description;
    this.tauxHoraire = tauxHoraire;
    this.termine = false;
    this.devis = devis;
    this.evaluation = evaluation;
  }

  public addEvaluation(evaluation: Evaluation): void {
    this.evaluation = evaluation;
  }

  public prixTotal(): number {
    if (this.devis) {
      return this.tauxHoraire * this.tempsPrestation + this.prixMateriel;
    } else {
      throw "Devis non ajouté";
    }
  }
}
