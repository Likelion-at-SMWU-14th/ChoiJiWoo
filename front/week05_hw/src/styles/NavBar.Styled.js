import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 32px;
  border-bottom: 1px solid #eeeeee;
`;

export const BarItem = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
`;

export const SubBarItem = styled.span`
  font-size: 14px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  color: ${(props) => (props.active ? "#000000" : "#999999")};
  cursor: pointer;
`;