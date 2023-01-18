import Prestation from "../models/Prestation";
import { useState, useEffect } from "react";

export const GetAllPrestations = () => {
  const [prestations, setPrestations] = useState<Prestation[]>([]);

  useEffect(() => {
    fetch(`http://localhost:3004/prestations`)
      .then((response) => response.json())
      .then((data: Prestation[]) => setPrestations(data));
  }, []);

  return prestations;
};
