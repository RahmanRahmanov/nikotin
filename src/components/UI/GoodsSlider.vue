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
            src="@/assets/img/katalog_pod/katalog_pod10.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/katalog_pod/katalog_pod4.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/katalog_pod/katalog_pod5.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/katalog_pod/katalog_pod8.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/katalog_pod/katalog_pod9.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>

      <swiper-slide>
        <div class="slide-background">
          <img
            src="@/assets/img/katalog_pod/katalog_pod2.png"
            alt="slide image"
            class="slide-image"
          />
        </div>
      </swiper-slide>
    </swiper>
  </div>
</template>

<script>
import { ref, onMounted, onBeforeUnmount } from "vue";
import { Swiper, SwiperSlide } from "swiper/vue";
import SwiperCore, { Autoplay } from "swiper/core";
import "swiper/swiper-bundle.css";

SwiperCore.use([Autoplay]);

export default {
  components: { Swiper, SwiperSlide },
  setup() {
    const slidesPerView = ref(5);

    const updateSlidesPerView = () => {
      if (window.innerWidth <= 767) {
        slidesPerView.value = 3;
      } else {
        slidesPerView.value = 5;
      }
    };

    onMounted(() => {
      updateSlidesPerView();
      window.addEventListener("resize", updateSlidesPerView);
    });

    onBeforeUnmount(() => {
      window.removeEventListener("resize", updateSlidesPerView);
    });

    return {
      slidesPerView,
    };
  },
};
</script>