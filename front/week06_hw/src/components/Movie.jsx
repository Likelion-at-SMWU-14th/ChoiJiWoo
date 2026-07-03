import { useEffect, useState } from "react";
import axios from "axios";
import { GenreButton, GenreButtonWrapper } from "../styles/GenreButton.styled";
import { SearchInput } from "../styles/SearchBar.styled";
import S from "../styles/Movie.styled";

const GENRES = ["전체", "로맨스", "드라마", "범죄", "스릴러", "SF", "공포"];

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("전체");
  const [keyword, setKeyword] = useState("");

  useEffect(() => {
    axios
      .get("http://localhost:8000/movies")
      .then((res) => {
        setMovies(res.data);
      })
      .catch((err) => {
        console.error("에러 발생", err);
      });
  }, []);
  const filteredMovies =
    selectedGenre === "전체"
      ? movies
      : movies.filter((movie) => movie.genre === selectedGenre);
  const searchedMovies = filteredMovies.filter((movie) =>
    movie.title.includes(keyword),
  );
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
      <GenreButtonWrapper>
        {GENRES.map((genre) => (
          <GenreButton
            key={genre}
            $active={selectedGenre === genre}
            onClick={() => setSelectedGenre(genre)}
          >
            {genre}
          </GenreButton>
        ))}
      </GenreButtonWrapper>

      {searchedMovies.length === 0 ? (
        <S.EmptyMessage>검색 결과가 없습니다.</S.EmptyMessage>
      ) : (
        <S.MovieGrid>
          {searchedMovies.map((movie) => (
            <S.MovieCard key={movie.id}>
              <S.Poster src={movie.poster} alt={movie.title} />
              <S.MovieInfo>
                <S.MovieTitle>{movie.title}</S.MovieTitle>
                <S.Rating> ⭐ {movie.rating}</S.Rating>
                <S.Genre> {movie.genre}</S.Genre>
                <S.Description> {movie.description}</S.Description>
              </S.MovieInfo>
            </S.MovieCard>
          ))}
        </S.MovieGrid>
      )}
    </S.Container>
  );
};

export default Movie;
