import { headers } from "next/headers";
import MenuList from "@/features/menus/components/MenuList";
import MenuForm from "@/features/menus/components/MenuForm";
import Roulette from "@/features/menus/components/Roulette";

export default async function Home() {
  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const response = await fetch(`http://${host}/api/menus`, {
    cache: "no-store",
  });
  const menus = await response.json();

  return (
    <>
      <h1>오늘 뭐 먹지 ? </h1>
      <Roulette menus={menus} />
      <h2>
        메뉴 목록 <span className="badge">{menus.length}개</span>
      </h2>
      <MenuForm />
      <MenuList menus={menus} />
    </>
  );
}