import { useState } from "react";
import { Outlet } from "react-router-dom";
import S from "../styles/Movie.styled";
import { SearchInput } from "../styles/SearchBar.styled";

const Layout = () => {
  const [keyword, setKeyword] = useState("");

  return (
    <S.Container>
      <S.Header>
        <S.Title> MOVIE CHART </S.Title>
        <SearchInput
          type="text"
          placeholder="영화 제목 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </S.Header>

      <Outlet context={{ keyword }} />
    </S.Container>
  );
};

export default Layout;
