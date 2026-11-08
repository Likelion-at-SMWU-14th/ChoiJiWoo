import { addMenu, getMenus } from "@/features/menus/server/service";

export function GET() {
  return Response.json(getMenus());
}

export async function POST(request) {
  const { name, category } = await request.json();

  if (!name?.trim()) {
    return Response.json(
      { message: "메뉴 이름을 입력해 주세요." },
      { status: 400 },
    );
  }

  const menu = addMenu(name.trim(), category);
  return Response.json(menu, { status: 201 });
}