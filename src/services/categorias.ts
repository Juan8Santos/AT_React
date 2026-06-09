import type { Categoria } from "../types/categoriaTypes";

export async function getCategorias(): Promise<Categoria[]> {
  const response = await fetch(
    "https://www.themealdb.com/api/json/v1/1/categories.php"
  );

  const data = await response.json();

  return data.categories;
}