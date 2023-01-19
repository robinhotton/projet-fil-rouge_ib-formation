import Categorie from "./Categorie";
import Devis from "./Devis";
import Evaluation from "./Evaluation";

export default class Prestation {
  id?: number;
  idEntreprise?: number;
  categorie: Categorie;
  description: string;
  tauxHoraire: number;
  termine: boolean;
  evaluation?: Evaluation;
  devis?: Devis;
  tempsPrestation!: number;
  prixMateriel!: number;

  constructor(
    categorie: Categorie = new Categorie(0, ""),
    description: string = "",
    tauxHoraire: number = 0,
    devis: Devis = new Devis(5, 5),
    evaluation: Evaluation = new Evaluation(5, 5, 5, 5)
  ) {
    this.categorie = categorie;
    this.description = description;
    this.tauxHoraire = tauxHoraire;
    this.termine = false;
    this.devis = devis;
    this.evaluation = evaluation;
  }

  public addDevis(devis: Devis): void {
    this.devis = devis;
  }

  public addEvaluation(evaluation: Evaluation): void {
    this.evaluation = evaluation;
  }

  public prixTotal(): number {
    if (this.devis) {
      return (
        this.tauxHoraire * this.devis.tempsPrestation + this.devis.prixMateriel
      );
    } else {
      throw "Devis non ajouté";
    }
  }
}
