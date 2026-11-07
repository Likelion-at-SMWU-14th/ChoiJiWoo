import Link from "next/link";

export default function MenuList({ menus }) {
  return (
    <ul className="menu-list">
      {menus.map((menu) => (
        <li className="menu-card" key={menu.id}>
          <Link href={`/menus/${menu.id}`}>
            <span className="badge">{menu.category}</span> {menu.name}
          </Link>
        </li>
      ))}
    </ul>
  );
}