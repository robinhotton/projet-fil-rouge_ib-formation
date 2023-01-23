import "./AdminCard.scss";

type AdminCardProps = {
  textCard: string;
  getCardData: number;
};

const AdminCard: React.FC<AdminCardProps> = ({ textCard, getCardData }) => {
  return (
    <div className="AdminCard">
      <p>{textCard}</p>
      <p>{getCardData}</p>
    </div>
  );
};
export default AdminCard;
