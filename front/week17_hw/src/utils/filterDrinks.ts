import type { Drink } from "../types/drink";

export type DrinkFilter = Partial<Pick<Drink, "category">>;

export function filterDrinks(drinks: Drink[], filter: DrinkFilter): Drink[] {
  return drinks.filter(
    (drink) => !filter.category || drink.category === filter.category,
  );
}
