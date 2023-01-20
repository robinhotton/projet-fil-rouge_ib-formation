type AdminCardProps = {
  textCard: string;
  getCardData: number;
};

const AdminCard: React.FC<AdminCardProps> = ({ textCard, getCardData }) => {
  return (
    <div className="Card">
      <p>textCard: {textCard}</p>
      <p>data: {getCardData}</p>
    </div>
  );
};
export default AdminCard;
