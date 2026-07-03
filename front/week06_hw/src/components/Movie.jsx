import { useEffect, useState } from "react";
import axios from "axios";
import { GenreButton, GenreButtonWrapper } from "../styles/GenreButton.styled";
import { SearchInput } from "../styles/SearchBar.styled";
import {
  Container,
  Title,
  MovieGrid,
  MovieCard,
  Poster,
  MovieInfo,
  MovieTitle,
  Rating,
  Genre,
  Description,
  Header,
  EmptyMessage,
} from "../styles/Movie.styled";

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
    <Container>
      <Header>
        <Title> MOVIE CHART </Title>
        <SearchInput
          type="text"
          placeholder="영화 제목 검색"
          value={keyword}
          onChange={(e) => setKeyword(e.target.value)}
        />
      </Header>
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
        <EmptyMessage>검색 결과가 없습니다.</EmptyMessage>
      ) : (
        <MovieGrid>
          {searchedMovies.map((movie) => (
            <MovieCard key={movie.id}>
              <Poster src={movie.poster} alt={movie.title} />
              <MovieInfo>
                <MovieTitle>{movie.title}</MovieTitle>
                <Rating> ⭐ {movie.rating}</Rating>
                <Genre> {movie.genre}</Genre>
                <Description> {movie.description}</Description>
              </MovieInfo>
            </MovieCard>
          ))}
        </MovieGrid>
      )}
    </Container>
  );
};

export default Movie;
