import "./AsideElement.scss";
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

// Type de données pour les propriétés du composant AsideElement
type AsideElementProps = {
  logo: string | React.ReactElement;
  nomCategorie: string;
};

// Déclaration et implémentation du composant AsideElement
const AsideElement: React.FC<AsideElementProps> = ({ logo, nomCategorie }) => {
  // Etat pour gérer l'affichage du composant
  const [onClick, setOnClick] = useState<boolean>(false);

  // Fonction pour inverser la valeur de l'état onClick
  const toggleOnClick = () => {
    setOnClick(!onClick);
  };

  // Fonction pour cacher le composant lorsque l'utilisateur clique en dehors de celui-ci
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setOnClick(false);
    }
  };

  // Rendu du composant
  return (
    <div className="asideElement">
      <button
        // Ajout de la classe active si onClick est vrai
        className={onClick ? "active" : ""}
        // Gestion des événements click et blur pour gérer l'affichage du composant
        onClick={(): void => toggleOnClick()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="Categorie">
          {logo}
          <p className="content">{nomCategorie}</p>
          <FaEllipsisV />
        </div>
      </button>
    </div>
  );
};
export default AsideElement;
