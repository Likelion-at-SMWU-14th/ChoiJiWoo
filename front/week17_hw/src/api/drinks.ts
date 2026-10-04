import axios from "axios";
import type { Drink } from "../types/drink";
import type { CreateDrinkRequest } from "../types/drink";

export async function createDrink(drink: CreateDrinkRequest): Promise<Drink> {
  const response = await api.post<Drink>("/drinks", drink);
  return response.data;
}

const api = axios.create({
  baseURL: "http://localhost:8000",
});

async function getResource<T>(path: string): Promise<T> {
  const response = await api.get<T>(path);
  return response.data;
}

export function getDrinks(): Promise<Drink[]> {
  return getResource<Drink[]>("/drinks");
}

export function getDrink(id: Drink["id"]): Promise<Drink> {
  return getResource<Drink>(`/drinks/${id}`);
}
