import type { Paises } from "../types/paisesTypes";

export async function getPaises(): Promise<Paises[]> {
  const response = await fetch(
    "https://restcountries.com/v3.1/all?fields=name,cca3"
  );

  if (!response.ok) {
    throw new Error("Erro ao buscar países");
  }

  return response.json() as Promise<Paises[]>;
}