import "./AsideElement.scss";
import React, { useState } from "react";
import { FaEllipsisV } from "react-icons/fa";

type AsideElementProps = {
  logo: any;
  nomCategorie: string;
};

const AsideElement: React.FC<AsideElementProps> = ({ logo, nomCategorie }) => {
  const [onClick, setOnClick] = useState<boolean>(false);

  const toggleOnClick = () => {
    setOnClick(!onClick);
  };

  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setOnClick(false);
    }
  };

  return (
    <div className="asideElement">
      <button
        className={onClick ? "active" : undefined}
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
