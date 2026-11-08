import { getMenu } from "@/features/menus/server/service";

export async function GET(request, { params }) {
  const { id } = await params;
  const menu = getMenu(Number(id));

  if (!menu) {
    return Response.json({ message: "메뉴를 찾을 수 없어요." }, { status: 404 });
  }
  return Response.json(menu);
}