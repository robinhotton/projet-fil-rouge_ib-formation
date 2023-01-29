import Categorie from "../models/Categorie";

export default class CategoriesService {
  public static async getAllCategories(): Promise<Categorie[]> {
    return await fetch("http://localhost:3004/categories/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  public static async getCategorieById(id: number): Promise<Categorie> {
    return await fetch(`http://localhost:3004/categories/${id}`).then(
      (response) =>
        response
          .json()
          .then((data) => (this.isEmpty(data) ? null : data))
          .catch((error) => this.error(error))
    );
  }

  private static isEmpty(data: Object): boolean {
    return Object.keys(data).length === 0;
  }

  private static error(error: Error): void {
    console.error(error);
  }
}
