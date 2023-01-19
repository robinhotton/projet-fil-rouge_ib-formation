export default class Evaluation {
  qualiteGlobale: number;
  faciliteCommunication: number;
  qualiteTechnique: number;
  niveauExpertise: number;
  constructor(
    qualiteGlobale: number = 0,
    faciliteCommunication: number = 0,
    qualiteTechnique: number = 0,
    niveauExpertise: number = 0
  ) {
    this.qualiteGlobale = qualiteGlobale;
    this.faciliteCommunication = faciliteCommunication;
    this.qualiteTechnique = qualiteTechnique;
    this.niveauExpertise = niveauExpertise;
  }
}
