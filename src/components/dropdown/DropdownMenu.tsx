import React, { useState } from "react";
import DropDown from "./Dropdown";
import { RxTriangleDown } from "react-icons/rx";
import "./DropdownMenu.scss";

const DropdownMenu: React.FC = () => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [selectCategorie, setSelectCategorie] = useState<string>("");
  const categories = () => {
    return [
      " Le câblage d’armoire électrique",
      "L’accompagnement aux choix de matériels industriels",
      "L’installation de matériels",
    ];
  };

  /**
   * Activer / Désactiver le menu dropdown
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Referme le menu dropdown si un click survient en dehors des elements
   * @param event  evenement de la souris
   */
  const dismissHandler = (event: React.FocusEvent<HTMLButtonElement>): void => {
    if (event.currentTarget === event.target) {
      setShowDropDown(false);
    }
  };

  /**
   * Callback function to consume the
   * city name from the child component
   *
   * @param categorie  la ville selectionné
   */
  const categorieSelection = (categorie: string): void => {
    setSelectCategorie(categorie);
  };

  return (
    <div className="MenuContainer">
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div>{selectCategorie ? selectCategorie : "Select ..."} </div>
        {showDropDown && (
          <DropDown
            categories={categories()}
            toggleDropDown={(): void => toggleDropDown()}
            categorieSelection={categorieSelection}
          />
        )}
        <RxTriangleDown />
      </button>
    </div>
  );
};

export default DropdownMenu;
