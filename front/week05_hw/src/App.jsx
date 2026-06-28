import "./App.css";
import * as S from "./styles/ProductCard.Styled";
import * as N from "./styles/NavBar.Styled";
import productData from "./data/productData";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import productImage1 from "./assets/아틀리에 나인.webp";
import productImage2 from "./assets/파르티멘토 우먼.webp";
import productImage3 from "./assets/아디다스.webp";
import productImage4 from "./assets/락피쉬웨더웨어.webp";
import productImage5 from "./assets/푸마.webp";
import myPageIcon from "./assets/mypage.svg";
import myLikeIcon from "./assets/mylike.svg";
import shoppingbagIcon from "./assets/shoppingbag.svg";
import loginIcon from "./assets/login.svg";

const navItems = [
  "BEST",
  "WOMEN",
  "MEN",
  "INTERIOR",
  "KITCHEN",
  "ELECTRONICS",
  "DIGITAL",
  "BEAUTY",
  "FOOD",
  "LEISURE",
  "KIDS",
  "CULTURE",
  "EARTH",
];

const subCategories = [
  "전체",
  "여성의류",
  "여성가방",
  "여성슈즈",
  "여성액세서리",
  "여성주얼리",
  "가구/인테리어",
  "주방/생활",
  "가전",
  "컴퓨터/디지털",
  "뷰티",
  "푸드",
  "레져",
  "컬쳐",
  "어스",
  "남성의류",
  "남성가방",
  "남성슈즈",
  "남성액세서리",
  "남성주얼리",
];

function App() {
  return (
    <>
      <N.Header>
        <N.Logo>29CM</N.Logo>

        <N.HeaderMenu>
          <N.MenuItem>
            <img src={myPageIcon} alt="" width="16" />
            <span>MY PAGE</span>
          </N.MenuItem>
          <N.MenuItem>
            <img src={myLikeIcon} alt="" width="16" />
            <span>MY LIKE</span>
          </N.MenuItem>
          <N.MenuItem>
            <img src={shoppingbagIcon} alt="" width="16" />
            <span>SHOPPING BAG</span>
          </N.MenuItem>
          <N.MenuItem>
            <img src={loginIcon} alt="" width="16" />
            <span>LOGIN</span>
          </N.MenuItem>
        </N.HeaderMenu>
      </N.Header>
      <N.PageTitle>Special-Order Showcase PT 29Magazine</N.PageTitle>
      <N.Bar>
        {navItems.map((item, index) => (
          <NavBar key={item} label={item} active={index === 0} />
        ))}
      </N.Bar>

      <N.Bar>
        {subCategories.map((item, index) => (
          <NavBar key={item} label={item} active={index === 0} variant="sub" />
        ))}
      </N.Bar>

      <S.CardList>
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
      </S.CardList>
    </>
  );
}

export default App;
