import * as S from "./styles/styled";
import DrinkCard from "./components/DrinkCard";
import DrinkForm from "./components/DrinkForm";

export default function App() {
  return (
    <S.Page>
      <S.Layout>
        <S.ListPanel>
          <S.SectionHeading>
            <S.SectionTitle>오늘의 음료</S.SectionTitle>
          </S.SectionHeading>

          <S.Cards>
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
            <DrinkCard />
          </S.Cards>
        </S.ListPanel>

        <aside>
          <DrinkForm />
        </aside>
      </S.Layout>
    </S.Page>
  );
}
