<template>
  <div class="container_slider_reviews1">
    <swiper
      :modules="{ Autoplay }"
      :slidesPerView="slidesPerView"
      :spaceBetween="2"
      :autoplay="{ delay: 3000, disableOnInteraction: false }"
      :speed="5000"
      class="mySwiper"
    >
      <!-- Статически указанные слайды с изображениями -->
      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/goods_blackc-strawb.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/goods_cola-lemon.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/goods_grapeice.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/goods_raroot-sod.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/goods_blackc-strawb.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>
      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/goods_grapeice.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slidesPerView = ref(5); // Число видимых слайдов

    return {
      slidesPerView,
    };
  },
};
</script>

<style scoped>
.container_slider_reviews1 {
  width: 100%;
  padding: 1rem 0;
}

.slide-background {
  width: 13.75rem; /* Ширина блока */
  height: 21.13rem; /* Высота блока */
  background: rgb(255, 255, 255); /* Белый фон */
  border-radius: 1.88rem; /* Скругление углов */
  display: flex;
  justify-content: center;
  align-items: center;
}

.slide-image {
  width: 6.25rem; /* Ширина изображения */
  height: 11.79rem; /* Высота изображения */
  object-fit: cover; /* Чтобы изображение не деформировалось */
}
</style>
