import * as S from "../styles/ProductCard.Styled";
import Tag from "./Tag";

function ProductCard({
  rank,
  image,
  description,
  discountRate,
  tags,
  brand,
  price,
}) {
  return (
    <S.CardWrapper>
      <S.ImageBox>
        <S.RankBadge>{rank}</S.RankBadge>
        <S.ProductImage src={image} alt={brand} />
      </S.ImageBox>
      <S.InfoBox>
        <S.Brand>{brand}</S.Brand>
        <S.Description>{description}</S.Description>
        <S.PriceRow>
          <S.DiscountRate discountRate={discountRate}>
            {discountRate}%
          </S.DiscountRate>
          <S.Price>{price.toLocaleString()}원</S.Price>
        </S.PriceRow>
        <S.TagRow>
          {tags.map((tag) => (
            <Tag key={tag} label={tag} />
          ))}
        </S.TagRow>
      </S.InfoBox>
    </S.CardWrapper>
  );
}

export default ProductCard;
