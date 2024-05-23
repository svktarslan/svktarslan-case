import { atom } from "recoil";
import { Item } from "~/hooks/readList";

export const categoryFilter = atom<string[]>({
  key: "categoryFilter",
  default: [],
});
export const favoriteSource = atom<boolean>({
  key: "favoriteSource",
  default: false,
});
export const favoriteListStore = atom<string[]>({
  key: "favoriteListStore",
  default: [],
});
export const readListStore = atom<Item[]>({
  key: "readListStore",
  default: [],
});
