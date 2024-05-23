/* eslint-disable react-refresh/only-export-components */
import { MdChevronRight } from "react-icons/md";
import { FaRegStar, FaStar } from "react-icons/fa";

import { useNavigate } from "react-router-dom";
import useFavoriteSource from "~/hooks/favoriteCategory";
import { memo } from "react";

const HomeListRow = ({
  title,
  description,
  id,
  category,
}: {
  title: string;
  description: string;
  id: string;
  category: string;
}) => {
  const { addToFavoriteList, isInFavoriteList, removeFromFavoriteList } =
    useFavoriteSource();

  const navigate = useNavigate();

  return (
    <div>
      <div className="flex flex-1 flex-row border-b-2 border-dashed py-9 cursor-pointer relative">
        <div
          onClick={() => navigate(`/news/${id}`, { state: category })}
          className="flex flex-1 flex-col cursor-pointer"
        >
          <div className="text-purple-700 text-lg font-semibold">{title}</div>
          <div className="text-gray-400 text-sm mt-2">{description}</div>
        </div>
        <div className="flex justify-end items-center min-w-24">
          <MdChevronRight size={30} className="text-gray-400" />
        </div>
        <div
          onClick={() => {
            isInFavoriteList(id)
              ? removeFromFavoriteList(id)
              : addToFavoriteList(id);
          }}
          className="absolute top-2 right-2"
        >
          {isInFavoriteList(id) ? (
            <FaStar className="text-yellow-400" size={20} />
          ) : (
            <FaRegStar className="text-yellow-400" size={20} />
          )}
        </div>
      </div>
    </div>
  );
};

export default memo(HomeListRow);
