import { useEffect, useState } from "react";
import PrestationCard from "../prestation/PrestationCard";
import PrestationService from "../../services/PrestationService";

import SearchBar from "./SearchBar";
import Prestation from "../../models/Prestation";

const SearchBarController: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>("");
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  useEffect(() => {
    PrestationService.getAllPrestations().then((prestations) =>
      setPrestations(prestations)
    );
  });

  const onSearchHandler = (event: React.ChangeEvent<HTMLInputElement>) => {
    setSearchTerm(event.target.value);
  };

  //delete the contact
  const onDeleteHandler = (prestationId: number) => {
    const notAId = (item: Prestation) => item.id !== prestationId;
    const updatedList = prestations.filter(notAId);
    setSearchTerm("");
    setPrestations(updatedList);
  };

  //search using filter function
  const toSearch = (searchTerm: string) => (item: Prestation) =>
    item.categorie.nom.toLowerCase().includes(searchTerm.toLowerCase());

  return (
    <>
      <SearchBar
        prestationsValue={searchTerm}
        onChangeHandler={onSearchHandler}
      />
      {prestations.filter(toSearch(searchTerm)).map((prestation) => (
        <PrestationCard
          key={prestation.id}
          prestation={prestation}
          deleteContact={onDeleteHandler}
        />
      ))}
    </>
  );
};
export default SearchBarController;