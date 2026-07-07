import styled from "styled-components";

export const GenreButtonWrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 24px;
`;

export const GenreButton = styled.button`
  padding: 8px 16px;
  border-radius: 20px;
  border: 1px solid #ff7a2f;
  background-color: ${(props) => (props.$active ? "#ff7a2f" : "transparent")};
  color: ${(props) => (props.$active ? "#fff" : "#ff7a2f")};
  font-size: 14px;
  font-weight: 600;
  cursor: pointer;
  transition: transform 0.15s ease, background-color 0.15s ease, color 0.15s ease;


  &:hover {
    background-color: #ff7a2f;
    color: #fff;
    transform: scale(1.08);
  }
`;