import styled from "styled-components";
import { Link } from "react-router-dom";

export const DetailWrapper = styled.div`
  display: flex;
  gap: 48px;
  margin-top: 24px;
`;

export const BackLink = styled(Link)`
  display: inline-block;
  margin-bottom: 24px;
  color: #888;
  text-decoration: none;
  font-size: 14px;

  &:hover {
    color: #ff7a2f;
  }
`;

export const DetailPoster = styled.img`
  width: 320px;
  height: 480px;
  object-fit: cover;
  border-radius: 16px;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.5);
`;

export const DetailInfo = styled.div`
  flex: 1;
  padding-top: 16px;
`;

export const DetailTitle = styled.h1`
  margin-bottom: 16px;
  font-size: 36px;
  font-weight: 700;
  color: #ffffff;
`;

export const DetailRating = styled.p`
  margin-bottom: 12px;
  color: #ffd166;
  font-size: 18px;
  font-weight: 600;
`;

export const DetailGenre = styled.span`
  display: inline-block;
  margin-bottom: 20px;
  padding: 6px 14px;
  border-radius: 999px;
  background-color: #ff7a2f;
  color: white;
  font-size: 14px;
  font-weight: 600;
`;

export const DetailDescription = styled.p`
  color: #cccccc;
  font-size: 16px;
  line-height: 1.8;
  white-space: pre-line;
`;

export const LoadingText = styled.div`
  color: #888;
  font-size: 18px;
  padding: 80px 0;
  text-align: center;
`;