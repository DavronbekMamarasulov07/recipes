import { IProps } from "../../types";
import Card from "../card/Card";
import Container from "../container/Container";
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";

const TopReyting = ({ recipes, title }: IProps) => {
  const ratingRecipes = recipes.sort((a, b) => b.rating - a.rating).slice(0, 8);

  return (
    <div className="mt-[150px]">
      <Container>
        <div className="topRating overflow-hidden h-[800px]">
          <h1 className="text-4xl font-bold mb-8 text-[#222]">{title}</h1>
          <Swiper
            modules={[Navigation, Pagination, A11y, Autoplay]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 1000, disableOnInteraction: true }}
            loop={true}
          >
            {ratingRecipes.map((recipe, index) => (
              <SwiperSlide key={index}>
                <Card recipe={recipe} countLine={3} />
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
};

export default TopReyting;
