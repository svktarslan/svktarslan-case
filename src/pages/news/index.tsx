import { useQuery } from "@tanstack/react-query";
import { FaAngleLeft } from "react-icons/fa";
import { useNavigate, useParams } from "react-router-dom";
import Card, { Item } from "~/components/card";
import { GET_NEWS_WITH_ID } from "~/config/constants";
import useReadList from "~/hooks/readList";
import newsApi from "~/lib/newsApi/newsApi";

import "swiper/css";
import "swiper/css/pagination";
import NewsSwiper from "./newsSwiper";

const News = () => {
  const { newId } = useParams();
  const navigate = useNavigate();
  const category = history.state.usr as string;
  const { readList } = useReadList();
  const news = useQuery({
    queryKey: [GET_NEWS_WITH_ID, newId],
    enabled: newId !== "null",
    queryFn: async () => {
      if (!newId) return;
      return newsApi.getNews({ sources: newId, sortBy: "publishedAt" });
    },
  });

  const data = newId === "null" ? readList : news.data?.data.articles;

  return (
    <div className="flex justify-center">
      <div className="max-w-6xl w-full px-5">
        <NewsSwiper data={data?.slice(0, 3)} />
        <div className="w-full flex py-5 justify-between items-center">
          <h1 className="text-2xl font-semibold">{category.toUpperCase()}</h1>
          <button
            onClick={() => navigate(-1)}
            className={`h-11 text-sm border-[1px] flex flex-row items-center justify-center px-4 rounded-lg font-medium  bg-blue-950 text-white`}
          >
            <FaAngleLeft className="text-white" size={18} />
            Go To Source
          </button>
        </div>
        <div className="py-5 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-10">
          {data?.slice(3).map((item: Item) => (
            <Card
              key={item.title}
              type="small"
              item={item}
              onClick={() => navigate("/detail", { state: item })}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default News;
