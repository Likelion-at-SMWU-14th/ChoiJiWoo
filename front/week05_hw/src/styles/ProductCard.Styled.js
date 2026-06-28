import styled from "styled-components";

export const CardList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 24px;
  padding: 32px;
  background-color: #ffffff;
  width: 100%;
`;

export const CardWrapper = styled.div`
  width: 240px;
  display: flex;
  flex-direction: column;
  gap: 6px;
`;

export const ImageBox = styled.div`
  position: relative;
  width: 100%;
  height: 240px;
  overflow: hidden;
  border-radius: 4px;
  background-color: #f5f5f5;
  cursor: pointer;
`;

export const ProductImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
`;

export const RankBadge = styled.span`
  position: absolute;
  top: 8px;
  left: 8px;
  background-color: #000000;
  color: #ffffff;
  font-size: 12px;
  font-weight: 600;
  padding: 2px 8px;
  border-radius: 2px;
`;

export const InfoBox = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2px;
  padding-top: 8px;
`;

export const Brand = styled.p`
  font-size: 14px;
  font-weight: 700;
  color: #111111;
  margin: 0;
`;

export const Description = styled.p`
  font-size: 13px;
  color: #555555;
  margin: 0;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
`;

export const PriceRow = styled.div`
  display: flex;
  align-items: center;
  gap: 6px;
  margin-top: 4px;
`;

export const DiscountRate = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: ${(props) => (props.discountRate >= 30 ? "#f42929" : "#ff8a3d")};
`;

export const Price = styled.span`
  font-size: 15px;
  font-weight: 700;
  color: #111111;
`;

export const TagRow = styled.div`
  display: flex;
  gap: 4px;
  margin-top: 4px;
`;

export const Tag = styled.span`
  font-size: 11px;
  color: #1f1e1e;
  border: 1px solid #ffffff;
  background-color: #e7e6e6;
  border-radius: 3px;
  padding: 2px 6px;
`;