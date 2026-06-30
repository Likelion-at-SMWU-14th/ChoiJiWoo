import * as S from "../styles/NavBar.Styled";

function NavBar({ label, active, variant }) {
  if (variant === "sub") {
    return <S.SubBarItem active={active}>{label}</S.SubBarItem>;
  }
  return <S.BarItem active={active}>{label}</S.BarItem>;
}

export default NavBar;
