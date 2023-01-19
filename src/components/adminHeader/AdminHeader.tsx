import { MdWavingHand } from "react-icons/md";
import { BsPersonCircle } from "react-icons/bs";
import "./AdminHeader.scss";

type AdminHeaderProps = {
  name: string;
};

const AdminHeader: React.FC<AdminHeaderProps> = ({ name }) => {
  return (
    <>
      <h1 className="adminHeaderTitle">Hello, {name}</h1>
      <div className="adminHeaderLogo">
        <MdWavingHand className="adminHeaderHand" />
        <BsPersonCircle className="adminHeaderPerson" />
      </div>
    </>
  );
};
export default AdminHeader;
