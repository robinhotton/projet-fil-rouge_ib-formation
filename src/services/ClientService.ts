import Client from "../models/Client";
import Prestation from "../models/Prestation";

export default class ClientService {
  public static async getAllClients(): Promise<Client[]> {
    return fetch("http://localhost:3004/clients/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  static getClientById(idClient: number): Promise<Client> {
    return fetch(`http://localhost:3004/clients/${idClient}`).then((response) =>
      response
        .json()
        .then((data) => (this.isEmpty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  static prestationsPanier(idClient: number): Promise<Prestation> {
    return fetch(`http://localhost:3004/clients/${idClient}/panier/`)
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static ajouterPrestation(
    idClient: number,
    prestation: Prestation
  ): Promise<Prestation> {
    return fetch(`http://localhost:3004/clients/${idClient}/panier/`, {
      headers: { "content-type": "application/json" },
      method: "POST",
      body: JSON.stringify(prestation),
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
