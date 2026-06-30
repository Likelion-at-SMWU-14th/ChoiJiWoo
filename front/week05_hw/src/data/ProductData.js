import productImage1 from "../assets/아틀리에 나인.webp";
import productImage2 from "../assets/파르티멘토 우먼.webp";
import productImage3 from "../assets/아디다스.webp";
import productImage4 from "../assets/락피쉬웨더웨어.webp";
import productImage5 from "../assets/푸마.webp";

const productData = [
    {
        id: 1,
        rank: 1,
        image: productImage1,
        brand: "아틀리에 나인",
        description: "[5차] [제제로 PICK] POINTEL SLIMFIT ROUN...",
        discountRate: 40,
        price: 23400,
        tags: ["쿠폰", "조건부 무료배송"],
    },
    {
        id: 2,
        rank: 2,
        image: productImage2,
        brand: "파르티멘토 우먼",
        description: "PWC EVERYDAY BALLOON JOGGER PANTS...",
        discountRate: 10,
        price: 47700,
        tags: ["무료배송", "단독"],
    },
    {
        id: 3,
        rank: 3,
        image: productImage3,
        brand: "아디다스",
        description: "[29CM 단독] 도쿄 - 크림화이트:원더베이지 / KI...",
        discountRate: 46,
        price: 75320,
        tags: ["쿠폰", "무료배송", "에디션"],
    },
    {
        id: 4,
        rank: 4,
        image: productImage4,
        brand: "락피쉬웨더웨어",
        description: "GLAIR STRAPPY SANDALS - CLEAR STAR",
        discountRate: 27,
        price: 46010,
        tags: ["조건부 무료배송"],
    },
    {
        id: 5,
        rank: 5,
        image: productImage5,
        brand: "푸마",
        description: "메모리아 샌들 - 블랙:실버 / 406430-01",
        discountRate: 10,
        price: 89100,
        tags: ["쿠폰", "무료배송"],
    },
];

export default productData;