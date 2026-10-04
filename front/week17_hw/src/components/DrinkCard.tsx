import type { Drink } from "../types/drink";
import * as S from "../styles/styled";

interface DrinkCardProps {
  drink: Drink;
}

export default function DrinkCard({ drink }: DrinkCardProps) {
  return (
    <S.Card>
      <S.CardCategory>{drink.category}</S.CardCategory>

      <S.CardTitle>
        {drink.name}
        <S.CardMark>{drink.temperature}</S.CardMark>
      </S.CardTitle>

      <S.CardInfo>
        <S.CardText>{drink.price.toLocaleString()}원</S.CardText>
        <S.CardText>{drink.calories} kcal</S.CardText>
      </S.CardInfo>

      <S.CardLabel>음료 소개</S.CardLabel>
      <S.CardText>{drink.description}</S.CardText>
    </S.Card>
  );
}
