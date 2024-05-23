import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MY_FAVORITE_SOURCE } from "~/config/constants";
import { favoriteListStore } from "~/store/atom";

const useFavoriteSource = () => {
  const [favoriteList, setFavoriteList] =
    useRecoilState<string[]>(favoriteListStore);

  useEffect(() => {
    const storedReadList = localStorage.getItem(MY_FAVORITE_SOURCE);
    if (storedReadList) {
      setFavoriteList(JSON.parse(storedReadList));
    }
  }, []);

  const saveFavoriteList = (list: string[]) => {
    localStorage.setItem(MY_FAVORITE_SOURCE, JSON.stringify(list));
  };

  const addToFavoriteList = (id: string) => {
    const updatedList = [...favoriteList, id];
    setFavoriteList(updatedList);
    saveFavoriteList(updatedList);
  };

  const removeFromFavoriteList = (id: string) => {
    const updatedList = favoriteList.filter((item) => item !== id);
    setFavoriteList(updatedList);
    saveFavoriteList(updatedList);
  };

  const isInFavoriteList = (id: string) => {
    return favoriteList.includes(id);
  };

  return {
    favoriteList,
    addToFavoriteList,
    removeFromFavoriteList,
    isInFavoriteList,
  };
};

export default useFavoriteSource;
