import * as S from "../styles/styled";
import { useState, type SubmitEvent } from "react";
import type { CreateDrinkRequest, Temperature } from "../types/drink";

interface DrinkFormProps {
  disabled: boolean;
  onSubmit: (drink: CreateDrinkRequest) => Promise<boolean>;
}

export default function DrinkForm({ disabled, onSubmit }: DrinkFormProps) {
  const [name, setName] = useState("");
  const [category, setCategory] = useState("");
  const [temperature, setTemperature] = useState<Temperature>("ICE");
  const [price, setPrice] = useState("");
  const [calories, setCalories] = useState("");
  const [description, setDescription] = useState("");

  async function handleSubmit(event: SubmitEvent<HTMLFormElement>) {
    event.preventDefault();

    const saved = await onSubmit({
      name: name.trim(),
      category: category.trim(),
      temperature,
      price: Number(price),
      calories: Number(calories),
      description: description.trim(),
    });

    if (saved) {
      setName("");
      setCategory("");
      setTemperature("ICE");
      setPrice("");
      setCalories("");
      setDescription("");
    }
  }

  return (
    <S.FormPanel onSubmit={handleSubmit}>
      <S.FormTitle>음료 추가</S.FormTitle>

      <S.FormLabel htmlFor="name">음료 이름</S.FormLabel>
      <S.FieldInput
        id="name"
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="예: 아메리카노"
        required
      />

      <S.FormLabel htmlFor="category">카테고리</S.FormLabel>
      <S.FieldInput
        id="category"
        value={category}
        onChange={(event) => setCategory(event.target.value)}
        placeholder="예: 커피, 라떼, 티, 에이드"
        required
      />

      <S.FormLabel htmlFor="temperature">온도</S.FormLabel>
      <S.FieldSelect
        id="temperature"
        value={temperature}
        onChange={(event) => setTemperature(event.target.value as Temperature)}
      >
        <option value="ICE">ICE</option>
        <option value="HOT">HOT</option>
      </S.FieldSelect>

      <S.FormLabel htmlFor="price">가격</S.FormLabel>
      <S.FieldInput
        id="price"
        type="number"
        value={price}
        onChange={(event) => setPrice(event.target.value)}
        placeholder="예: 4500"
        required
      />

      <S.FormLabel htmlFor="calories">칼로리</S.FormLabel>
      <S.FieldInput
        id="calories"
        type="number"
        value={calories}
        onChange={(event) => setCalories(event.target.value)}
        placeholder="예: 10"
        required
      />

      <S.FormLabel htmlFor="description">음료 소개</S.FormLabel>
      <S.FieldTextarea
        id="description"
        rows={5}
        value={description}
        onChange={(event) => setDescription(event.target.value)}
        placeholder="음료를 간단히 소개해 주세요!"
        required
      />

      <S.PrimaryButton type="submit" disabled={disabled}>
        {disabled ? "저장 중..." : "음료 저장"}
      </S.PrimaryButton>
    </S.FormPanel>
  );
}
