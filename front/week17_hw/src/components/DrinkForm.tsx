import * as S from "../styles/styled";

export default function DrinkForm() {
  return (
    <S.FormPanel onSubmit={(event) => event.preventDefault()}>
      <S.FormTitle>음료 추가</S.FormTitle>

      <S.FormLabel htmlFor="name">음료 이름</S.FormLabel>
      <S.FieldInput id="name" placeholder="예: 아메리카노" />

      <S.FormLabel htmlFor="category">카테고리</S.FormLabel>
      <S.FieldInput id="category" placeholder="예: 커피, 라떼, 티, 에이드" />

      <S.FormLabel htmlFor="temperature">온도</S.FormLabel>
      <S.FieldInput id="temperature" placeholder="ICE 또는 HOT" />

      <S.FormLabel htmlFor="price">가격</S.FormLabel>
      <S.FieldInput id="price" placeholder="예: 4500" />

      <S.FormLabel htmlFor="calories">칼로리</S.FormLabel>
      <S.FieldInput id="calories" placeholder="예: 10" />

      <S.FormLabel htmlFor="description">음료 소개</S.FormLabel>
      <S.FieldTextarea
        id="description"
        rows={5}
        placeholder="음료를 간단히 소개해 주세요!"
      />

      <S.PrimaryButton type="submit">음료 저장</S.PrimaryButton>
    </S.FormPanel>
  );
}
