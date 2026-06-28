import styled from "styled-components";

export const Bar = styled.div`
  display: flex;
  gap: 24px;
  padding: 16px 32px;
  border-bottom: 1px solid #cac9c9;
`;

export const BarItem = styled.span`
  font-size: 13px;
  font-weight: 700;
  color: #000000;
  cursor: pointer;
`;

export const SubBarItem = styled.span`
  font-size: 12px;
  font-weight: ${(props) => (props.active ? "700" : "400")};
  color: ${(props) => (props.active ? "#000000" : "#999999")};
  cursor: pointer;
`;

export const Header = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 12px 32px 4px;
`;

export const Logo = styled.div`
  font-size: 20px;
  font-weight: 500;
  letter-spacing: 1px;
  cursor: pointer;
`;

export const HeaderMenu = styled.div`
  display: flex;
  gap: 24px;
  align-items: center;
  font-size: 9px;
  color: #696969;
`;

export const MenuItem = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  cursor: pointer;
`;

export const PageTitle = styled.h1`
  font-size: 35px;
  font-weight: 700;
  margin: 0;
  word-spacing: 12px;
`;

export const TitleRow = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 8px 24px 0;
`;