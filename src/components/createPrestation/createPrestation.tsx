import PrestationForm from "../prestationForm/prestationForm";
import "./createPrestation.scss";

type createPrestationProps = {
  prestationName: string;
  entrepriseName: string;
  prestationContent: string;
  hourlyRate: number;
  devis: string;
};

const CreatePrestation: React.FC<createPrestationProps> = ({
  prestationName,
  entrepriseName,
  prestationContent,
  hourlyRate,
  devis,
}) => {
  return (
    <main>
      <PrestationForm />
    </main>
  );
};

export default CreatePrestation;
