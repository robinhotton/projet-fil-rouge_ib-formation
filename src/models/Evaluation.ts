export default class Evaluation {
  private _qualiteGlobale!: number;
  private _faciliteCommunication!: number;
  private _qualiteTechnique!: number;
  private _niveauExpertise!: number;

  constructor(
    qualiteGlobale: number,
    faciliteCommunication: number,
    qualiteTechnique: number,
    niveauExpertise: number
  ) {
    this.qualiteGlobale = qualiteGlobale;
    this.faciliteCommunication = faciliteCommunication;
    this.qualiteTechnique = qualiteTechnique;
    this.niveauExpertise = niveauExpertise;
  }

  get qualiteGlobale(): number {
    return this._qualiteGlobale;
  }
  get faciliteCommunication(): number {
    return this._faciliteCommunication;
  }
  get qualiteTechnique(): number {
    return this._qualiteTechnique;
  }
  get niveauExpertise(): number {
    return this._niveauExpertise;
  }
  set qualiteGlobale(note: number) {
    if (this.comprisEntre1et5(note)) this._qualiteGlobale = note;
    else throw this.messageErreur;
  }
  set faciliteCommunication(note: number) {
    if (this.comprisEntre1et5(note)) this._faciliteCommunication = note;
    else throw this.messageErreur;
  }
  set qualiteTechnique(note: number) {
    if (this.comprisEntre1et5(note)) this._qualiteTechnique = note;
    else throw this.messageErreur;
  }
  set niveauExpertise(note: number) {
    if (this.comprisEntre1et5(note)) this._niveauExpertise = note;
    else throw this.messageErreur;
  }

  private comprisEntre1et5(note: number): boolean {
    if (note < 1 || note > 5) return false;
    else return true;
  }

  private messageErreur(): string {
    return "Le nombre doit être compris entre 1 et 5 inclus";
  }
}
