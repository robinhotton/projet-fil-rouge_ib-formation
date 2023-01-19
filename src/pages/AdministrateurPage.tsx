import Aside from "../components/aside/Aside";
import AdminCardsController from "../components/adminCard/AdminCardsController";

const AdministrateurPage: React.FC = () => {
  return (
    <>
      <AdminCardsController />
      <Aside />
    </>
  );
};
export default AdministrateurPage;
