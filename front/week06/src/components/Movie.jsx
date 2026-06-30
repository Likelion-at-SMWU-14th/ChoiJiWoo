import { useEffect, useState } from "react";
import axios from "axios";
import styled from "styled-components";

const Movie = () => {
  const [movies, setMovies] = useState([]);
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

  return (
    <Container>
      <Title> 무비차트 </Title>
      <MovieGrid>
        {movies.map((movie) => (
          <MovieCard key={movie.id}>
            <Poster src={movie.poster} alt={movie.title} />

            <MovieInfo>
              <MovieTitle>{movie.title}</MovieTitle>
              <Rating> {movie.rating}</Rating>
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
