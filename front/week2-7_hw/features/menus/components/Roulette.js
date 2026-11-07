"use client";

import { useState } from "react";
import Link from "next/link";

const categories = ["전체", "한식", "중식", "일식", "양식", "분식"];

export default function Roulette({ menus }) {
  const [category, setCategory] = useState("전체");
  const [current, setCurrent] = useState(null);
  const [spinning, setSpinning] = useState(false);

  const candidates =
    category === "전체"
      ? menus
      : menus.filter((menu) => menu.category === category);

  function handleSpin() {
    if (candidates.length === 0) return;
    setSpinning(true);

    const timer = setInterval(() => {
      setCurrent(candidates[Math.floor(Math.random() * candidates.length)]);
    }, 100);

    setTimeout(() => {
      clearInterval(timer);
      setSpinning(false);
    }, 2000);
  }

  function handleChangeCategory(event) {
    setCategory(event.target.value);
    setCurrent(null);
  }

  return (
    <section>
      <select value={category} onChange={handleChangeCategory} disabled={spinning}>
        {categories.map((item) => (
          <option key={item} value={item}>
            {item}
          </option>
        ))}
      </select>

      <div className="box">
        {!current ? (
          <p>버튼을 눌러보세요!</p>
        ) : spinning ? (
          <p>{current.name}</p>
        ) : (
          <p>
            오늘은 <Link href={`/menus/${current.id}`}>{current.name}</Link> !
          </p>
        )}
      </div>

      <button onClick={handleSpin} disabled={spinning || candidates.length === 0}>
        {spinning ? "고르는 중..." : "룰렛 돌리기"}
      </button>
    </section>
  );
}