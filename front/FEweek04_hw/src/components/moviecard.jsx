import styled from "styled-components";

const Section = styled.div`
  background-color: #e9e1dc;
  border-radius: 30px;
  padding: 60px;
  display: flex;
  justify-content: center;
  gap: 40px;
`;

const Card = styled.div`
  width: 280px;
  background-color: #f5f1ee;
  padding: 25px;
  border-radius: 20px;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.2);
  text-align: center;

  &:hover {
    transform: scale(1.05);
    transition: 0.3s;
  }
`;

const Poster = styled.img`
  width: 100%;
  height: 350px;
  object-fit: cover;
`;

const MovieTitle = styled.h2`
  margin-top: 20px;
`;

const Description = styled.p`
  color: #555;
`;

const Badge = styled.div`
  margin-top: 10px;
  color: #c26a7a;
`;

function MovieCard() {
  return (
    <Section>
      <Card>
        <Poster src="/notebook.png" />

        <MovieTitle>노트북</MovieTitle>

        <Description>
          한 남자가 치매에 걸린 연인에게 두 사람의 이야기를 들려주는 영화
        </Description>

        <Badge>{true ? "⭐ Loved it" : "⭐ Good"}</Badge>
      </Card>

      <Card>
        <Poster src="/ifonly.png" />

        <MovieTitle>이프온리</MovieTitle>

        <Description>
          하루를 다시 살게 된 남자가 소중한 사람을 위해 변해가는 영화
        </Description>

        <Badge>{false ? "⭐ Loved it" : "⭐ Good"}</Badge>
      </Card>

      <Card>
        <Poster src="/lalaland.png" />

        <MovieTitle>라라랜드</MovieTitle>

        <Description>
          배우를 꿈꾸는 여자와 재즈 음악가의 성장 이야기를 담은 영화
        </Description>

        <Badge>{false ? "⭐ Loved it" : "⭐ Good"}</Badge>
      </Card>
    </Section>
  );
}

export default MovieCard;
