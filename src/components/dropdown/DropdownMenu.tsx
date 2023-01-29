import React, { useState, useEffect } from "react";
import DropDown from "./Dropdown";
import { RxTriangleDown } from "react-icons/rx";
import "./DropdownMenu.scss";
import CategoriesService from "../../services/CategorieService";

type DropdownMenuProps = {
  placeholder: string;
  route: string;
};

const DropdownMenu: React.FC<DropdownMenuProps> = ({ placeholder, route }) => {
  const [showDropDown, setShowDropDown] = useState<boolean>(false);
  const [categories, setCategories] = useState<string[]>([]);

  /**
   * récupère uniquement les nom des categories
   */
  useEffect(() => {
    CategoriesService.getAllCategories().then((categories) =>
      setCategories(categories.map((categorie) => categorie.nom))
    );
  }, []);

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

  return (
    <div className="MenuContainer">
      <button
        className={showDropDown ? "active" : undefined}
        onClick={(): void => toggleDropDown()}
        onBlur={(e: React.FocusEvent<HTMLButtonElement>): void =>
          dismissHandler(e)
        }
      >
        <div className="flex-align">
          <p className="menuHeader bold">{placeholder} </p>
          <RxTriangleDown />
        </div>
        {showDropDown && (
          <DropDown
            categories={categories}
            route={route}
            toggleDropDown={(): void => toggleDropDown()}
          />
        )}
      </button>
    </div>
  );
};

export default DropdownMenu;
