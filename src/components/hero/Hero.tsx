import { Recipe } from '../../types'
import Container from '../container/Container'
import { Navigation, Pagination, A11y, Autoplay } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import HeroCard from '../hero-card/HeroCard';
import { Skeleton } from 'antd';

const Hero = ({ recipes }: { recipes: Recipe[]}) => {
  return (
    <div>
      <Container>
        <div className="topRating overflow-hidden h-[550px]">
          <Swiper
            modules={[Navigation, Pagination, Autoplay, A11y]}
            spaceBetween={50}
            slidesPerView={3}
            navigation
            autoplay={{ delay: 3000, disableOnInteraction: true }}
            loop={true}
            pagination={{ clickable: true }}
            onSwiper={(swiper) => console.log(swiper)}
            onSlideChange={() => console.log("slide change")}
          >
            {recipes.map((recipe, index) => (
              <SwiperSlide key={index}>
                {recipe ? (
                  <HeroCard recipe={recipe} />
                ) : (
                  <Skeleton.Image
                    style={{ height: 500, width: "100%" }}
                    active
                  />
                )}
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </Container>
    </div>
  );
}

export default Hero
