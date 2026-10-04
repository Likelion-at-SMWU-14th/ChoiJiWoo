import { useEffect, useState } from "react";
import { getDrinks } from "./api/drinks";
import type { Drink } from "./types/drink";
import * as S from "./styles/styled";
import DrinkCard from "./components/DrinkCard";
import DrinkForm from "./components/DrinkForm";

export default function App() {
  const [drinks, setDrinks] = useState<Drink[]>([]);
  const [loading, setLoading] = useState(true);

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
          {loading ? (
            <S.EmptyMessage>음료를 불러오는 중이에요...</S.EmptyMessage>
          ) : drinks.length === 0 ? (
            <S.EmptyMessage>아직 등록된 음료가 없어요.</S.EmptyMessage>
          ) : (
            <S.Cards>
              {drinks.map((drink) => (
                <DrinkCard key={drink.id} drink={drink} />
              ))}
            </S.Cards>
          )}
        </S.ListPanel>

        <aside>
          <DrinkForm />
        </aside>
      </S.Layout>
    </S.Page>
  );
}
