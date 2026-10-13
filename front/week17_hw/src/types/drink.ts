export type Temperature = "ICE" | "HOT";

export interface Drink {
  id: string;
  name: string;
  category: string;
  price: number;
  temperature: Temperature;
  calories: number;
  description: string;
}

export type CreateDrinkRequest = Omit<Drink, "id">;
