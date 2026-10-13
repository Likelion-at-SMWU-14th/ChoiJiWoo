import type { Drink } from "../types/drink";
import * as S from "../styles/styled";

interface DrinkCardProps {
  drink: Drink;
  deleting: boolean;
  onDelete: (id: Drink["id"]) => void;
}

export default function DrinkCard({
  drink,
  deleting,
  onDelete,
}: DrinkCardProps) {
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
      <S.CardActions>
        <S.CardButton
          type="button"
          disabled={deleting}
          onClick={() => onDelete(drink.id)}
        >
          {deleting ? "삭제 중..." : "삭제"}
        </S.CardButton>
      </S.CardActions>
    </S.Card>
  );
}
