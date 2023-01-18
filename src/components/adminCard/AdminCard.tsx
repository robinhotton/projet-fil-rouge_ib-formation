type AdminCardProps = {
  textCard: string;
  getCardData: Function;
};

const AdminCard: React.FC<AdminCardProps> = ({ textCard, getCardData }) => {
  return (
    <div className="Card">
      <p>textCard: {textCard}</p>
      <p>getDonneeCategorie: {getCardData.toString()}</p>
    </div>
  );
};
export default AdminCard;
