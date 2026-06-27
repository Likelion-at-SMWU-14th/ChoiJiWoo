import "./App.css";
import ProductCard from "./components/ProductCard";
import productImage1 from "./assets/아틀리에 나인.webp";

function App() {
  return (
    <>
      <ProductCard
        rank={1}
        brand="아틀리에 나인"
        description="[5차] [제제로 PICK] POINTEL SLIMFIT ROUN..."
        discountRate={40}
        price={23400}
        tags={["쿠폰", "조건부 무료배송"]}
        image={productImage1}
      />
    </>
  );
}

export default App;
