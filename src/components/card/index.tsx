/* eslint-disable react-refresh/only-export-components */
import { MouseEventHandler } from "react";
import { FiPlus } from "react-icons/fi";
import { IoMdClose } from "react-icons/io";
import useReadList from "~/hooks/readList";
import { dateToStringDateAndHour } from "~/utils";

const defaultImage = "https://picsum.photos/220/145";

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

const Card = ({
  type,
  item,
  onClick,
}: {
  type: "small" | "medium" | "large";
  item: Item;
  onClick: MouseEventHandler<HTMLDivElement> | undefined;
}) => {
  const { addToReadList, isInReadList, removeFromReadList } = useReadList();
  const description = item.description;
  return (
    <div className="w-full">
      <div onClick={onClick}>
        {type === "large" && (
          <h1 className="my-4 font-semibold text-2xl">{item.title}</h1>
        )}

        <div className="relative pb-[56.25%]">
          <img
            src={item.urlToImage ?? defaultImage}
            alt="Logo"
            className={`absolute top-0 left-0 w-full h-full object-cover rounded-xl ${
              type !== "large" && "max-w-[510px] max-h-[300px]"
            }`}
          />
        </div>
        <h2 className={`py-4 font-semibold ${type !== "large" && "truncate"}`}>
          {description}
        </h2>
      </div>
      <div className="flex flex-row justify-between">
        <div
          onClick={() => {
            if (isInReadList(item.title)) {
              removeFromReadList(item.title);
            } else {
              addToReadList(item);
            }
          }}
          className="cursor-pointer flex flex-1 flex-row text-[10px] text-blue-950 items-center"
        >
          {isInReadList(item.title) ? <IoMdClose /> : <FiPlus />}{" "}
          {isInReadList(item.title)
            ? "Remove from read list"
            : "Add to read list"}
        </div>
        <div className="flex flex-1 flex-row text-[10px] text-gray-400 justify-end items-center">
          {dateToStringDateAndHour(item.publishedAt)}
        </div>
      </div>
    </div>
  );
};

export default Card;
