export default class CategoriesService {
  public static async getAllCategories(): Promise<string[]> {
    return fetch("http://localhost:3004/categories/").then((response) =>
      response.json().catch((error) => this.error(error))
    );
  }

  private static error(error: Error): void {
    console.error(error);
  }
}
