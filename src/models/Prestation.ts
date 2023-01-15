type Prestation = {
  id: number;
  idEntreprise: number;
  categorie: string;
  description: string;
  tauxHoraire: number;
  termine: boolean;
  devis: {
    tempsPrestation: number;
    prixMateriel: number;
  };
  evaluations: {
    qualiteGlobale: number;
    faciliteCommunication: number;
    qualiteTechnique: number;
    niveauExpertise: number;
  };
};
export default Prestation;
