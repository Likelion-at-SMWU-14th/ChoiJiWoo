import Link from "next/link";
import { headers } from "next/headers";
import { notFound } from "next/navigation";

export default async function MenuDetailPage({ params }) {
  const { id } = await params;


  await new Promise((resolve) => setTimeout(resolve, 1000));

  const requestHeaders = await headers();
  const host = requestHeaders.get("host");
  const response = await fetch(`http://${host}/api/menus/${id}`, {
    cache: "no-store",
  });

  if (!response.ok) notFound();

  const menu = await response.json();

  return (
    <article>
      <span className="badge">{menu.category}</span>
      <h1>{menu.name}</h1>
      <p>{menu.description || "아직 설명이 없어요."}</p>
      <Link href="/">돌아가기</Link>
    </article>
  );
}