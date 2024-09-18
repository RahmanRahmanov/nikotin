<template>
  <header class="header_main">
    <div class="container_header">
      <a href="/" class="header_logo">
        <img src="@/assets/img/header_img.svg" alt="Header Image"
      /></a>
      <div class="nav_text_block">
        <a href="/" class="nav_text">главная</a>
        <a href="/" class="nav_text">о нас</a>
        <a href="/" class="nav_text">доставка</a>
        <a href="/" class="nav_text">новости</a>
      </div>
      <div class="line_btn">
        <button class="catalog_btn">
          каталог
          <div class="gradient-line"></div>
        </button>
      </div>
    </div>
  </header>
  <div class="section_full_block">
    <div class="slider-container">
      <div class="slider-content" ref="sliderContent">
        <img class="slide_header" src="@/assets/img/header_slider.png" alt="" />
        <img
          class="slide_header"
          src="@/assets/img/header_slider2.png"
          alt=""
        />
        <img
          class="slide_header"
          src="@/assets/img/header_slider3.png"
          alt=""
        />
      </div>
    </div>
    <div class="social_media">
      <div class="mail_social"></div>
      <div class="tg_social"></div>
      <div class="wp_social"></div>
    </div>
    <div class="box_title_home_pages">
      <h1 class="title color_white text_align_left">
        seven<br />
        <span class="margin_title color_white"> stars</span>
      </h1>
    </div>
  </div>
</template>

<script></script>

<!-- // export default {
  //   mounted() {
  //     this.startSlider();
  //   },
  //   data() {
  //     return {
  //       currentSlide: 1, // Текущий слайд (начинаем с 1)
  //       sliderDirection: 1, // 1 - движение вперед, -1 - назад
  //     };
  //   },
  //   methods: {
  //     startSlider() {
  //       const sliderContent = this.$refs.sliderContent;
  //       const slideWidth = 100; // Ширина слайда в vw
  
  //       setInterval(() => {
  //         // Вычисляем смещение
  //         const currentOffset = (this.currentSlide - 1) * slideWidth * this.sliderDirection;
  //         sliderContent.style.transform = `translateX(${currentOffset}vw)`;
  
  //         // Меняем направление движения при достижении 3 или 1 слайда
  //         if (this.currentSlide === 3) {
  //           this.sliderDirection = -1;
  //         } else if (this.currentSlide === 1) {
  //           this.sliderDirection = 1;
  //         }
  
  //         // Переходим к следующему слайду
  //         this.currentSlide += this.sliderDirection;
  //       }, 2000); // Интервал переключения 15 секунд
  //     },
  //   },
  // }; -->
