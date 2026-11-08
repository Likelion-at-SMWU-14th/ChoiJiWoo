"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function MenuForm() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [category, setCategory] = useState("한식");

  async function handleSubmit(event) {
    event.preventDefault();

    const response = await fetch("/api/menus", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, category }),
    });

    if (!response.ok) return;

    setName("");
    router.refresh();
  }

  return (
    <form className="menu-form" onSubmit={handleSubmit}>
      <input
        value={name}
        onChange={(event) => setName(event.target.value)}
        placeholder="메뉴 이름"
        required
      />
      <select value={category} onChange={(event) => setCategory(event.target.value)}>
        {["한식", "중식", "일식", "양식", "분식"].map((item) => (
          <option key={item}>{item}</option>
        ))}
      </select>
      <button type="submit">추가</button>
    </form>
  );
} 