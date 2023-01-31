import { useEffect, useState } from "react";
import SearchBar from "./SearchBar";
import Categorie from "../../models/Categorie";
import CategoriesService from "../../services/CategorieService";
import "./SearchBarController.scss";
import { Link } from "react-router-dom";

const SearchBarController: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [categories, setCategories] = useState<Categorie[]>([]);

  /**
   * remplis le hook prestations
   */
  useEffect(() => {
    CategoriesService.getAllCategories().then((categories) =>
      setCategories(categories)
    );
  }, []);

  /**
   * A chaque changement de la barre de recherche, la fonction se lance.
   * @param event évènement qui récupère la recherche de la searchbar et le stocke dans le hook searchterm.
   */
  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  /**
   * Permet de chercher une prestation grâce à sa catégorie
   * @param searchTerm le paramètre reçu grâce à la searchbar
   * @returns les prestations
   */
  const toSearch = (searchTerm: string) => (item: Categorie) =>
    item.nom.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <>
      <div className="searchResult">
        <SearchBar
          prestationsValue={searchTerm}
          onChangeHandler={onSearchHandler}
        />
        {searchTerm === "" ? (
          <></>
        ) : (
          <>
            {categories.filter(toSearch(searchTerm)).map((categorie, index) => (
              <Link to={`/categorie/${categorie.id}`}>
                <p key={index}>{categorie.nom}</p>
              </Link>
            ))}
          </>
        )}
      </div>
    </>
  );
};
export default SearchBarController;
