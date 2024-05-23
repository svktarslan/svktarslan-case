import { useEffect } from "react";
import { useRecoilState } from "recoil";
import { MY_READ_LIST } from "~/config/constants";
import { readListStore } from "~/store/atom";

export interface Item {
  source: Source;
  author: string;
  title: string;
  description: string;
  url: string;
  urlToImage: string;
  publishedAt: string;
  content: string;
}

export interface Source {
  id: string;
  name: string;
}

const useReadList = () => {
  const [readList, setReadList] = useRecoilState<Item[]>(readListStore);

  useEffect(() => {
    const storedReadList = localStorage.getItem(MY_READ_LIST);
    if (storedReadList) {
      setReadList(JSON.parse(storedReadList));
    }
  }, []);

  const saveReadList = (list: Item[]) => {
    localStorage.setItem(MY_READ_LIST, JSON.stringify(list));
  };

  const addToReadList = (item: Item) => {
    setReadList((prevList) => {
      const updatedList = [...prevList, item];
      saveReadList(updatedList);
      return updatedList;
    });
  };

  const removeFromReadList = (title: string) => {
    setReadList((prevList) => {
      const updatedList = prevList.filter((item) => item.title !== title);
      saveReadList(updatedList);
      return updatedList;
    });
  };

  const isInReadList = (title: string) => {
    return readList.some((item) => item.title === title);
  };

  return {
    readList,
    addToReadList,
    removeFromReadList,
    isInReadList,
  };
};

export default useReadList;
