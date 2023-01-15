type CardProps = {
  textCard: string;
  getCardData: Function;
};

const Card: React.FC<CardProps> = ({ textCard, getCardData }) => {
  return (
    <div className="Card">
      <h1>JE SUIS UNE CARD</h1>
      <p>textCard: {textCard}</p>
      <p>getDonneeCategorie: {getCardData.toString()}</p>
    </div>
  );
};
export default Card;
