import { memo } from "react";
import { FaRegStar, FaStar } from "react-icons/fa";
import { FiPlus } from "react-icons/fi";
import { IoMdCheckmark } from "react-icons/io";
import { useNavigate } from "react-router-dom";

import { useRecoilState } from "recoil";
import { categoryFilter, favoriteSource } from "~/store/atom";

const HomeCategory = ({ categories }: { categories: string[] }) => {
  const [filter, setFilter] = useRecoilState(categoryFilter);
  const [favorite, setFavorite] = useRecoilState(favoriteSource);
  const navigate = useNavigate();

  return (
    <div className="py-10 border-b-[1px] p-2 flex justify-center">
      <div className="flex gap-2 overflow-x-scroll whitespace-nowrap pb-4">
        <button
          onClick={() => setFavorite((x) => !x)}
          className="h-11 border-[1px] text-sm items-center justify-center px-4 rounded-xl font-medium"
        >
          {favorite ? (
            <FaStar className="text-yellow-400" size={20} />
          ) : (
            <FaRegStar className="text-yellow-400" size={20} />
          )}
        </button>

        <button
          onClick={() => navigate(`/news/${null}`, { state: "My Read List" })}
          className="h-11 border-[1px] text-sm items-center justify-center px-4 rounded-xl font-medium  bg-blue-950 text-white"
        >
          My Read List
        </button>
        {categories?.map((x) => {
          const handleClick = () => {
            setFilter((prev) => {
              if (prev.includes(x)) {
                return prev.filter((item) => item !== x);
              } else {
                return [...prev, x];
              }
            });
          };

          const isActive = filter.includes(x);
          return (
            <button
              key={x}
              onClick={handleClick}
              className={`h-11 text-sm border-[1px] flex flex-row items-center justify-center px-4 rounded-lg font-medium ${
                isActive ? "bg-blue-950 text-white" : "bg-white text-black"
              }`}
            >
              {isActive ? (
                <IoMdCheckmark className="mr-2" />
              ) : (
                <FiPlus className="mr-2" />
              )}{" "}
              {x.toUpperCase()}
            </button>
          );
        })}
      </div>
    </div>
  );
};

export default memo(HomeCategory);
