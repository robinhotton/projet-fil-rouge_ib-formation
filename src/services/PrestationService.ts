import Prestation from "../models/Prestation";

export default class PrestationService {
  public static async getAllPrestations(): Promise<Prestation[]> {
    return fetch("http://localhost:3004/prestations/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  public static async getHerosById(id: number): Promise<Prestation> {
    return fetch(`http://localhost:3004/prestations/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.isEmpty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  public static async updateHero(prestation: Prestation): Promise<Prestation> {
    return fetch(`http://localhost:3004/prestations/${hero.id}`, {
      method: "PUT",
      body: JSON.stringify(prestation),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  public static async createHero(prestation: Prestation): Promise<Prestation> {
    return fetch(`http://localhost:3004/prestations/`, {
      method: "POST",
      body: JSON.stringify(prestation),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  public static async deleteHeros(prestation: Prestation): Promise<{}> {
    return fetch(`http://localhost:3004/prestations/${prestation.id}`, {
      method: "DELETE",
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
