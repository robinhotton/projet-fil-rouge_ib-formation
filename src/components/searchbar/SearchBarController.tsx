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
  const onDeleteHandler = (contactId: number) => {
    const notAId = (item: any) => item.id !== contactId;
    const updatedList = prestations.filter(notAId);
    setSearchTerm("");
    setPrestations(updatedList);
  };

  //search using filter function
  const toSearch = (searchTerm: string) => (item: any) =>
    item.name.toLowerCase().includes(searchTerm.toLowerCase());

  const prestationsFiltrees = prestations
    .filter(toSearch(searchTerm))
    .map((prestation) => (
      <PrestationCard
        key={prestation.id}
        prestation={prestation}
        deleteContact={onDeleteHandler}
      />
    ));

  return (
    <>
      <SearchBar
        prestationsValue={searchTerm}
        onChangeHandler={onSearchHandler}
      />
      {prestationsFiltrees}
    </>
  );
};
export default SearchBarController;
