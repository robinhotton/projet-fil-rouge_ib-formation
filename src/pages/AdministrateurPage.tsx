import Aside from "../components/aside/Aside";
import AdminCardsController from "../components/adminCard/AdminCardsController";
import "./AdministrateurPage.scss";
import AdminHeader from "../components/adminHeader/AdminHeader";

const AdministrateurPage: React.FC = () => {
  return (
    <div className="AdminPage">
      <Aside />
      <div className="AdminContent">
        <div className="AdminHeader">
          <AdminHeader name="Robin" />
        </div>
        <AdminCardsController />
      </div>
    </div>
  );
};
export default AdministrateurPage;
