import { useEffect, useState } from "react";
import { createDrink, getDrinks, deleteDrink } from "./api/drinks";
import type { CreateDrinkRequest, Drink } from "./types/drink";
import * as S from "./styles/styled";
import DrinkCard from "./components/DrinkCard";
import DrinkForm from "./components/DrinkForm";
import { filterDrinks, type DrinkFilter } from "./utils/filterDrinks";

export default function App() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);
  const [saving, setSaving] = useState(false);
  const [deletingId, setDeletingId] = useState<Drink["id"] | null>(null);
  const [filter, setFilter] = useState<DrinkFilter>({});

  const categories = Array.from(new Set(drinks.map((drink) => drink.category)));
  const visibleDrinks = filterDrinks(drinks, filter);
  async function loadDrinks() {
    setLoading(true);
    try {
      setDrinks(await getDrinks());
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  }

  async function handleCreate(drink: CreateDrinkRequest): Promise<boolean> {
    setSaving(true);
    try {
      const created = await createDrink(drink);
      setDrinks((prev) => [...prev, created]);
      return true;
    } catch (error: unknown) {
      console.error(error);
      return false;
    } finally {
      setSaving(false);
    }
  }

  async function handleDelete(id: Drink["id"]) {
    setDeletingId(id);
    try {
      await deleteDrink(id);
      setDrinks((prev) => prev.filter((drink) => drink.id !== id));
    } catch (error: unknown) {
      console.error(error);
    } finally {
      setDeletingId(null);
    }
  }
  useEffect(() => {
    void loadDrinks();
  }, []);

  return (
    <S.Page>
      <S.SectionHeading>
        <S.SectionTitle>오늘의 음료</S.SectionTitle>
      </S.SectionHeading>

      <S.Layout>
        <S.ListPanel>
          <S.TabRow>
            <S.TabButton
              type="button"
              $active={!filter.category}
              onClick={() => setFilter({})}
            >
              전체
            </S.TabButton>

            {categories.map((category) => (
              <S.TabButton
                key={category}
                type="button"
                $active={filter.category === category}
                onClick={() => setFilter({ category })}
              >
                {category}
              </S.TabButton>
            ))}
          </S.TabRow>
          {loading ? (
            <S.EmptyMessage>음료를 불러오는 중이에요...</S.EmptyMessage>
          ) : drinks.length === 0 ? (
            <S.EmptyMessage>아직 등록된 음료가 없어요.</S.EmptyMessage>
          ) : (
            <S.Cards>
              {visibleDrinks.map((drink) => (
                <DrinkCard
                  key={drink.id}
                  drink={drink}
                  deleting={deletingId === drink.id}
                  onDelete={handleDelete}
                />
              ))}
            </S.Cards>
          )}
        </S.ListPanel>

        <aside>
          <DrinkForm disabled={saving} onSubmit={handleCreate} />
        </aside>
      </S.Layout>
    </S.Page>
  );
}
