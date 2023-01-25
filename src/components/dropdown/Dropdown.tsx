import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./Dropdown.scss";

type DropDownProps = {
  categories: string[];
  route: string;
  toggleDropDown: Function;
};

const DropDown: React.FC<DropDownProps> = ({ categories, route }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * permet de réagir à l'evenement
   */
  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  /**
   * permet le rediriger la route
   */
  const redirection = useNavigate();

  /**
   * Passe la catégorie a son parent pour qu'il puisse l'afficher
   * @param categorie la categorie selectionné
   */
  const onClickHandler = (index: number): void => {
    redirection(`${route}/${index + 1}`);
  };

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {categories.map((categorie: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(index);
              }}
            >
              {categorie}
            </p>
          );
        })}
      </div>
    </>
  );
};

export default DropDown;
