import styled from "styled-components";

const HeaderContainer = styled.div`
  text-align: center;
  margin-bottom: 50px;
`;

const Line = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 20px;
  color: #f3a6b2;
`;

const Hr = styled.div`
  width: 250px;
  height: 2px;
  background-color: #f3a6b2;
`;

const Title = styled.h1`
  color: #f3a6b2;
  font-size: 60px;
  font-style: italic;
`;

function Header() {
  return (
    <HeaderContainer>
      <Line>
        <Hr />
        ✦
        <Hr />
      </Line>

      <Title>MY MOVIE TASTE</Title>
    </HeaderContainer>
  );
}

export default Header;
