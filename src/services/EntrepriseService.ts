import Entreprise from "../models/Entreprise";

export default class EntrepriseService {
  public static async getAllEntreprises(): Promise<Entreprise[]> {
    return fetch("http://localhost:3004/entreprises/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  static getEntrepriseById(id: number): Promise<Entreprise> {
    return fetch(`http://localhost:3004/entreprises/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.isEmpty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  static createPrestation(entreprise: Entreprise): Promise<Entreprise> {
    return fetch(`http://localhost:3004/entreprises/`, {
      method: "POST",
      body: JSON.stringify(entreprise),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  private static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  private static error(error: Error): void {
    console.error(error);
  }
}
