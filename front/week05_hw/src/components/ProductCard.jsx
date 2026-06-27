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
    <div>
      <p> {rank} </p>
      <img src={image} alt={brand} />
      <p> {brand} </p>
      <p> {description} </p>
      <p> {discountRate} </p>
      <p> {price} </p>
      <div>
        {tags.map((tag) => (
          <span> {tag} </span>
        ))}
      </div>
    </div>
  );
}

export default ProductCard;
