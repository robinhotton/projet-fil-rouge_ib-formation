import "./AdminCard.scss";

type AdminCardProps = {
  textCard: string;
  getCardData: number;
};

const AdminCard: React.FC<AdminCardProps> = ({ textCard, getCardData }) => {
  return (
    <div className="Card">
      <p className="contentCard center">{textCard}</p>
      <p className="contentCard center">{getCardData}</p>
    </div>
  );
};
export default AdminCard;
