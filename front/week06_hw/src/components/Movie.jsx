import { useEffect, useState } from "react";
import axios from "axios";
import { GenreButton, GenreButtonWrapper } from "../styles/GenreButton.styled";
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
} from "../styles/Movie.styled";

const GENRES = ["전체", "로맨스", "드라마", "범죄", "스릴러", "SF", "공포"];

const Movie = () => {
  const [movies, setMovies] = useState([]);
  const [selectedGenre, setSelectedGenre] = useState("전체");

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

  return (
    <Container>
      <Title> MOVIE CHART </Title>
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
      <MovieGrid>
        {filteredMovies.map((movie) => (
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
    </Container>
  );
};

export default Movie;
