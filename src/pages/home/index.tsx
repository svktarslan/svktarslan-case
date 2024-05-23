import { useQuery } from "@tanstack/react-query";
import { GET_SOURCE } from "~/config/constants";
import newsApi from "~/lib/newsApi/newsApi";
import HomeCategory from "./homeCategory";
import { useRecoilValue } from "recoil";
import { categoryFilter, favoriteSource } from "~/store/atom";
import HomeListRow from "./homeListRow";
import useFavoriteSource from "~/hooks/favoriteCategory";

export interface Source {
  id: string;
  name: string;
  description: string;
  url: string;
  category: string;
  language: string;
  country: string;
}

const Home = () => {
  const filter = useRecoilValue(categoryFilter);
  const favorite = useRecoilValue(favoriteSource);

  const { favoriteList } = useFavoriteSource();

  const source = useQuery({
    queryKey: [GET_SOURCE],
    queryFn: async () => {
      return newsApi.getSource();
    },
  });
  const categories = Array.from(
    new Set(source.data?.data.sources.map((item: Source) => item.category))
  );
  const sources = favorite
    ? source.data?.data.sources.filter((item: Source) =>
        favoriteList.includes(item.id)
      )
    : source.data?.data.sources;

  //pagination olmadigi icin tekrardan istek atmak istemedim bosu bosuna servisi yormamak icin
  const filteredItems =
    filter.length === 0
      ? sources
      : sources.filter((item: Source) => filter.includes(item.category));

  return (
    <div className="flex justify-center">
      <div className="max-w-7xl w-full px-5">
        <HomeCategory categories={categories as string[]} />
        <div className="flex flex-1 flex-col">
          {filteredItems?.map((x: Source) => (
            <HomeListRow
              category={x.category}
              description={x.description}
              id={x.id}
              title={x.name}
              key={x.id}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Home;
