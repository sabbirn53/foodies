import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import MealCard from "./MealCard";

export default function FeaturedSlider({ meals }) {
  return (
    <Swiper
      spaceBetween={20}
      slidesPerView={1}
      breakpoints={{
        640: { slidesPerView: 1 },
        768: { slidesPerView: 2 },
        1024: { slidesPerView: 3 },
      }}
    >
      {meals.map((meal) => (
        <SwiperSlide key={meal.idMeal}>
          <MealCard meal={meal} />
        </SwiperSlide>
      ))}
    </Swiper>
  );
}
