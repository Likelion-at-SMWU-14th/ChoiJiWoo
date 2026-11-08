import { menus } from "./data";

export function getMenus() {
  return menus;
}

export function getMenu(id) {
  return menus.find((menu) => menu.id === id);
}

export function addMenu(name, category) {
  const menu = { id: Date.now(), name, category, description: "" };
  menus.unshift(menu);
  return menu;
}