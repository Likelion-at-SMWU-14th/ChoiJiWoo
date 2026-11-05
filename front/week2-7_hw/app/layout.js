import Link from "next/link";
import "./globals.css";

export const metadata = {
  title: "오늘 뭐 먹지?",
  description: "룰렛으로 오늘 먹을 메뉴를 정해보세요 !",
};

export default function RootLayout({ children }) {
  return (
    <html lang="ko">
      <body>
        <header className="header">
          <Link href="/">오늘 뭐 먹지?</Link>
        </header>
        <main className="container">{children}</main>
      </body>
    </html>
  );
}
