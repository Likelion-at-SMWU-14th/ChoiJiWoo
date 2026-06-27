import "./App.css";
import productData from "./data/productData";
import ProductCard from "./components/ProductCard";
import productImage1 from "./assets/아틀리에 나인.webp";
import productImage2 from "./assets/파르티멘토 우먼.webp";
import productImage3 from "./assets/아디다스.webp";
import productImage4 from "./assets/락피쉬웨더웨어.webp";
import productImage5 from "./assets/푸마.webp";

function App() {
  return (
    <>
      <ProductCard
        rank={productData[0].rank}
        brand={productData[0].brand}
        description={productData[0].description}
        discountRate={productData[0].discountRate}
        price={productData[0].price}
        tags={productData[0].tags}
        image={productImage1}
      />
      <ProductCard
        rank={productData[1].rank}
        brand={productData[1].brand}
        description={productData[1].description}
        discountRate={productData[1].discountRate}
        price={productData[1].price}
        tags={productData[1].tags}
        image={productImage2}
      />
      <ProductCard
        rank={productData[2].rank}
        brand={productData[2].brand}
        description={productData[2].description}
        discountRate={productData[2].discountRate}
        price={productData[2].price}
        tags={productData[2].tags}
        image={productImage3}
      />
      <ProductCard
        rank={productData[3].rank}
        brand={productData[3].brand}
        description={productData[3].description}
        discountRate={productData[3].discountRate}
        price={productData[3].price}
        tags={productData[3].tags}
        image={productImage4}
      />
      <ProductCard
        rank={productData[4].rank}
        brand={productData[4].brand}
        description={productData[4].description}
        discountRate={productData[4].discountRate}
        price={productData[4].price}
        tags={productData[4].tags}
        image={productImage5}
      />
    </>
  );
}

export default App;
