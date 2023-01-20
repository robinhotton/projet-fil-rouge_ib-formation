import React, { useEffect, useState } from "react";
import "./Dropdown.scss";

type DropDownProps = {
  categories: string[];
  toggleDropDown: Function;
  categorieSelection: Function;
};

const DropDown: React.FC<DropDownProps> = ({
  categories,
  categorieSelection,
}) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);

  /**
   * Passe la catégorie a son parent pour qu'il puisse l'afficher
   * @param categorie la categorie selectionné
   */
  const onClickHandler = (categorie: string): void => {
    categorieSelection(categorie);
  };

  useEffect(() => {
    setShowDropDown(showDropDown);
  }, [showDropDown]);

  return (
    <>
      <div className={showDropDown ? "dropdown" : "dropdown active"}>
        {categories.map((categorie: string, index: number): JSX.Element => {
          return (
            <p
              key={index}
              onClick={(): void => {
                onClickHandler(categorie);
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
