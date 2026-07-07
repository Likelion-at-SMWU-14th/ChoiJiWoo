import styled from "styled-components";

export const SearchInput = styled.input`
  width: 100%;
  max-width: 250px;
  padding: 12px 18px;
  margin-top: 8px;
  border-radius: 20px;
  border: 1px solid #ff7a2f;
  background-color: #262626;
  color: #ffffff;
  font-size: 15px;
  outline: none;
  transition: border-color 0.2s ease, background-color 0.2s ease;

  &::placeholder {
    color: #888;
  }

`;