import * as S from "../styles/styled";

export default function DrinkCard() {
  return (
    <S.Card>
      <S.CardCategory>커피</S.CardCategory>

      <S.CardTitle>
        아메리카노
        <S.CardMark>ICE</S.CardMark>
      </S.CardTitle>

      <S.CardInfo>
        <S.CardText>4,500원</S.CardText>
        <S.CardText>10 kcal</S.CardText>
      </S.CardInfo>

      <S.CardLabel>음료 소개</S.CardLabel>
      <S.CardText>깔끔하고 고소한 맛의 커피입니다.</S.CardText>
    </S.Card>
  );
}
