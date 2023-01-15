type Prestation = {
  id: number;
  idEntreprise: number;
  nom: string;
  localisation: string;
  description: string;
  tauxHoraire: string;
  termine: boolean;
  devis: {
    id: number;
    tempsPrestation: string;
    prixMateriel: string;
  };
  evaluations: {
    id: number;
    status: string;
    qualiteGlobale: number;
    faciliteCommunication: number;
    qualiteTechnique: number;
    niveauExpertise: number;
  };
};
export default Prestation;
