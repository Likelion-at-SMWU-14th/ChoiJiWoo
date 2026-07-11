import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import axios from "axios";
import {
  DetailWrapper,
  BackLink,
  DetailPoster,
  DetailInfo,
  DetailTitle,
  DetailRating,
  DetailGenre,
  DetailDescription,
  LoadingText,
} from "../styles/MovieDetail.styled";

const MovieDetailPage = () => {
  const { id } = useParams();
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

  const movie = movies.find((m) => m.id === id);
  if (!movie) return <LoadingText>로딩중</LoadingText>;

  return (
    <>
      <BackLink to="/">뒤로가기</BackLink>

      <DetailWrapper>
        <DetailPoster src={movie.poster} alt={movie.title} />
        <DetailInfo>
          <DetailTitle>{movie.title}</DetailTitle>
          <DetailRating>⭐ {movie.rating}</DetailRating>
          <DetailGenre>{movie.genre}</DetailGenre>
          <DetailDescription>{movie.description}</DetailDescription>
        </DetailInfo>
      </DetailWrapper>
    </>
  );
};

export default MovieDetailPage;
