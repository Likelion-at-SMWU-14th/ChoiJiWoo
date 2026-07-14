import { useParams } from "react-router-dom";
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
import { useMovies } from "../hooks/useMovies";

const MovieDetailPage = () => {
  const { id } = useParams();
  const movies = useMovies();

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
