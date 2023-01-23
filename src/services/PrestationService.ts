import Prestation from "../models/Prestation";

export default class PrestationService {
  static getAllPrestations(): Promise<Prestation[]> {
    return fetch("http://localhost:3004/prestations/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  static getPrestationsById(id: number): Promise<Prestation> {
    return fetch(`http://localhost:3004/prestations/${id}`).then((response) =>
      response
        .json()
        .then((data) => (this.isEmpty(data) ? null : data))
        .catch((error) => this.error(error))
    );
  }

  static updatePrestation(prestation: Prestation): Promise<Prestation> {
    return fetch(`http://localhost:3004/prestations/${prestation.id}`, {
      method: "PUT",
      body: JSON.stringify(prestation),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static createPrestation(prestation: Prestation): Promise<Prestation> {
    return fetch(`http://localhost:3004/prestations/`, {
      method: "POST",
      body: JSON.stringify(prestation),
      headers: { "content-type": "application/json" },
    })
      .then((response) => response.json())
      .catch((error) => this.error(error));
  }

  static deletePrestations(prestation: Prestation): Promise<{}> {
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
