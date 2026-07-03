import styled from "styled-components";

export const Container = styled.div`
  min-height: 100vh;
  margin: 0;
  padding: 40px;
  background-color: #141414;
  color: #ffffff;
`;

export const Title = styled.h1`
  margin-bottom: 32px;
  font-size: 60px;
  font-weight: 700;
  font-family: "Archivo Black", sans-serif;
  text-shadow: 0 4px 20px rgba(255, 122, 47, 0.3);
`;

export const MovieGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
`;

export const MovieCard = styled.div`
  overflow: hidden;
  border-radius: 16px;
  background-color: #1f1f1f;
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.35);
  transition: transform 0.2s ease, box-shadow 0.2s ease;
  cursor: pointer;

  &:hover {
    transform: scale(1.03);
  }
`;

export const Poster = styled.img`
  width: 100%;
  height: 360px;
  object-fit: cover;
  display: block;
`;

export const MovieInfo = styled.div`
  padding: 16px;
`;

export const MovieTitle = styled.h2`
  margin-bottom: 8px;
  font-size: 20px;
  font-weight: 700;
  color: #ffffff;
`;

export const Rating = styled.p`
  margin-bottom: 8px;
  color: #ffd166;
  font-size: 15px;
`;

export const Genre = styled.p`
  display: inline-block;
  margin-bottom: 12px;
  padding: 4px 10px;
  border-radius: 999px;
  background-color: #ff7a2f;
  color: white;
  font-size: 13px;
  font-weight: 600;
`;

export const Description = styled.p`
  color: #cccccc;
  font-size: 14px;
  line-height: 1.5;
`;

export const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 32px;
`;

export const EmptyMessage = styled.p`
  color: #888;
  font-size: 18px;
  text-align: center;
  padding: 80px 0;
`;
