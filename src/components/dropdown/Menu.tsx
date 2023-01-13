import React, { useState } from "react";
import DropDown from "./Dropdown";
import { RxTriangleDown } from "react-icons/rx";
import "./Menu.scss";

type placeHolderProps = {
  placeholder?: string;
};

const Menu: React.FC<placeHolderProps> = (placeholder): JSX.Element => {
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
   * Toggle the drop down menu
   */
  const toggleDropDown = () => {
    setShowDropDown(!showDropDown);
  };

  /**
   * Hide the drop down menu if click occurs
   * outside of the drop-down element.
   *
   * @param event  The mouse event
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
   * @param city  The selected city
   */
  const categorieSelection = (categorie: string): void => {
    setSelectCategorie(categorie);
  };

  return (
    <>
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
            showDropDown={false}
            toggleDropDown={(): void => toggleDropDown()}
            categorieSelection={categorieSelection}
          />
        )}
        <RxTriangleDown />
      </button>
    </>
  );
};

export default Menu;
