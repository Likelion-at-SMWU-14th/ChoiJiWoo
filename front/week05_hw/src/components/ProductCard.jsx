import * as S from "../styles/ProductCard.Styled";

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
      <p> {rank} </p>
      <img src={image} alt={brand} />
      <p> {brand} </p>
      <p> {description} </p>
      <p> {discountRate}% </p>
      <p> {price} </p>
      <div>
        {tags.map((tag) => (
          <span> {tag} </span>
        ))}
      </div>
    </S.CardWrapper>
  );
}

export default ProductCard;
