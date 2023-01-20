import Entreprise from "../models/Entreprise";

export default class EntrepriseService {
  public static async getAllEntreprises(): Promise<Entreprise[]> {
    return fetch("http://localhost:3004/entreprises/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  private static error(error: Error): void {
    console.error(error);
  }
}
