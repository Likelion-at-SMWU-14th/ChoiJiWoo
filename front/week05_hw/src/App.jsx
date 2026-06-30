import "./App.css";
import * as S from "./styles/ProductCard.Styled";
import * as N from "./styles/NavBar.Styled";
import productData from "./data/productData";
import ProductCard from "./components/ProductCard";
import NavBar from "./components/NavBar";
import myPageIcon from "./assets/mypage.svg";
import myLikeIcon from "./assets/mylike.svg";
import shoppingbagIcon from "./assets/shoppingbag.svg";
import loginIcon from "./assets/login.svg";
import searchIcon from "./assets/search.svg";
import { navItems, subCategories } from "./data/navData";

function App() {
  return (
    <>
      <N.Header>
        <N.Logo>29CM</N.Logo>

        <N.HeaderMenu>
          <N.MenuItem>
            <img src={myPageIcon} alt="" width="14" />
            <span>MY PAGE</span>
          </N.MenuItem>
          <N.MenuItem>
            <img src={myLikeIcon} alt="" width="14" />
            <span>MY LIKE</span>
          </N.MenuItem>
          <N.MenuItem>
            <img src={shoppingbagIcon} alt="" width="14" />
            <span>SHOPPING BAG</span>
          </N.MenuItem>
          <N.MenuItem>
            <img src={loginIcon} alt="" width="14" />
            <span>LOGIN</span>
          </N.MenuItem>
        </N.HeaderMenu>
      </N.Header>
      <N.TitleRow>
        <N.PageTitle>Special-Order Showcase PT 29Magazine</N.PageTitle>
        <img src={searchIcon} alt="검색" width="30" />
      </N.TitleRow>{" "}
      <N.Bar>
        {navItems.map((item) => (
          <NavBar key={item.id} label={item.label} active={item.active} />
        ))}
      </N.Bar>
      <N.SubBar>
        {subCategories.map((category) => (
          <NavBar
            key={category.id}
            label={category.label}
            active={category.active}
            variant="sub"
          />
        ))}
      </N.SubBar>
      <S.CardList>
        <ProductCard
          rank={productData[0].rank}
          image={productData[0].image}
          brand={productData[0].brand}
          description={productData[0].description}
          discountRate={productData[0].discountRate}
          price={productData[0].price}
          tags={productData[0].tags}
        />
        <ProductCard
          rank={productData[1].rank}
          image={productData[1].image}
          brand={productData[1].brand}
          description={productData[1].description}
          discountRate={productData[1].discountRate}
          price={productData[1].price}
          tags={productData[1].tags}
        />
        <ProductCard
          rank={productData[2].rank}
          image={productData[2].image}
          brand={productData[2].brand}
          description={productData[2].description}
          discountRate={productData[2].discountRate}
          price={productData[2].price}
          tags={productData[2].tags}
        />
        <ProductCard
          rank={productData[3].rank}
          image={productData[3].image}
          brand={productData[3].brand}
          description={productData[3].description}
          discountRate={productData[3].discountRate}
          price={productData[3].price}
          tags={productData[3].tags}
        />
        <ProductCard
          rank={productData[4].rank}
          image={productData[4].image}
          brand={productData[4].brand}
          description={productData[4].description}
          discountRate={productData[4].discountRate}
          price={productData[4].price}
          tags={productData[4].tags}
        />
      </S.CardList>
    </>
  );
}

export default App;
