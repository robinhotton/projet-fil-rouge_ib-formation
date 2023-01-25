import { useEffect, useState } from "react";
import PrestationCard from "../prestation/PrestationCard";
import PrestationService from "../../services/PrestationService";
import SearchBar from "./SearchBar";
import Prestation from "../../models/Prestation";

const SearchBarController: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  /**
   * remplis le hook prestations
   */
  useEffect(() => {
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(prestations)
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
  const toSearch = (searchTerm: string) => (item: any) =>
    item.categorie.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <>
      <SearchBar
        prestationsValue={searchTerm}
        onChangeHandler={onSearchHandler}
      />
      {searchTerm === "" ? (
        <></>
      ) : (
        <>
          {prestations.filter(toSearch(searchTerm)).map((prestation) => (
            <PrestationCard key={prestation.id} prestation={prestation} />
          ))}
        </>
      )}
    </>
  );
};
export default SearchBarController;
