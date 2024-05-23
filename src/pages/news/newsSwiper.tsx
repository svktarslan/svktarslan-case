import { useNavigate } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Pagination } from "swiper/modules";
import Card, { Item } from "~/components/card";

import "swiper/css";
import "swiper/css/pagination";
import { memo } from "react";

const NewsSwiper = ({ data }: { data: Item[] }) => {
  const navigate = useNavigate();

  return (
    <div className="max-h-96 grid-cols-2 relative overflow-hidden w-full mt-5">
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        autoplay={{
          delay: 8000,
        }}
        modules={[Autoplay, Pagination]}
        style={{ width: "100%", height: "100%", paddingBottom: "30px" }}
        breakpoints={{
          375: {
            slidesPerView: 1,
          },
          800: {
            slidesPerView: 2,
            spaceBetween: 80,
          },
        }}
      >
        {data?.map((item: Item) => (
          <SwiperSlide key={item.title}>
            <Card
              key={item.title}
              type="medium"
              item={item}
              onClick={() => navigate("/detail", { state: item })}
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(NewsSwiper);
