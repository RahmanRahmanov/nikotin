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
  <div class="about_us_container">
    <div class="about_us_block">
      <p class="onas_us_block">о нас</p>
      <div class="about_us_container_text">
        <p class="about_us_text">Яркие ароматы и вкусопередача</p>
        <p class="about_us_text">
          За время работы мы получили много<br />
          положительных отзывов от наших<br />
          партнёров.
        </p>
        <p class="about_us_text">
          Нашей продукцией являются<br />
          Электронные сигареты и жидкости<br />
          для электронных сигарет
        </p>
        <p class="about_us_text">
          Мы представляем только <br />
          оригинальную продукцию и стараемся<br />
          быть лучшим партнёром для наших<br />
          клиентов!
        </p>
      </div>
    </div>
    <div class="block_on_block">
      <p class="text_block_on_block">
        текст,где описан опыт,путь и другая интереная информация о компании
        текст,где описан опыт,путь и другая интересная инф
        <br />
        <br />
        текст, где описан опыт, путь и другая интересная информация
      </p>
    </div>
  </div>
  <div class="tri_block">
    <div class="nomber_tri_position">
      <div class="nomber_block_red nomber_position">
        <p class="text_nomber_tri">
          уникальных<br />
          вкуса
        </p>
        <img class="kapla_img" src="@/assets/img/kapla.svg" alt="" />
      </div>
      <p class="nomber_tri_block">24</p>
    </div>
    <div class="nomber_tri_position">
      <div class="nomber_block_yellow nomber_position">
        <p class="text_nomber_tri">линейки<br />крепости<br />day & night</p>
        <img class="day_img" src="@/assets/img/day.svg" alt="" />
      </div>
      <p class="nomber_tri_block">2</p>
    </div>
    <div class="nomber_tri_position">
      <div class="nomber_block_black nomber_position">
        <p class="text_nomber_tri">вкуснейших<br />затяжек</p>
        <img class="blacktatoo_img" src="@/assets/img/blacktatoo.png" alt="" />
      </div>
      <p class="nomber_tri_block">20k</p>
    </div>
  </div>
  <div class="catalog_3pods_container">
    <p class="catalog_3pods_text color_grey-black">каталог</p>
    <div class="catalog_3pods">
      <div class="_3pods_1"></div>
      <div class="_3pods_2"></div>
      <div class="_3pods_3"></div>
    </div>
    <button class="_3pods_button">
      <p class="_3pods_button_text color_white">перейти</p>
      <img src="@/assets/img/Arrow 1.svg" alt="" />
    </button>
  </div>
  <div class="top_tastes_container">
    <p class="top_tastes_text color_grey-black">топ вкусы</p>
    <div class="top_tastes_block_all">
      <div class="mixed_berry">
        <p class="mixed_berry_name color_white">mixed<br />berry</p>
        <p class="mixed_berry_20k color_white">20k</p>
        <p class="mixed_berry_mg color_white">20mg</p>
      </div>
      <div class="lush_ice">
        <p class="mixed_berry_name color_red">lush ice</p>
        <p class="mixed_berry_20k color_red">20k</p>
        <p class="mixed_berry_mg color_red">20mg</p>
      </div>
      <div class="raspberry_root_soda">
        <p class="mixed_berry_name color_grey-black">
          raspberry <br />root <br />soda
        </p>
        <p class="mixed_berry_20k color_grey-black">20k</p>
        <p class="mixed_berry_mg color_grey-black">20mg</p>
      </div>
      <div class="grape_ice_soda">
        <p class="mixed_berry_name color_red">grape ice</p>
        <p class="mixed_berry_20k color_red">20k</p>
        <p class="mixed_berry_mg color_red">20mg</p>
      </div>
    </div>
  </div>
  <div class="reviews_container">
    <p class="reviews_name color_grey-black">отзывы</p>
    <p class="reviews_comment_name color_red"></p>
    <p class="reviews_comment color_grey-black"></p>
  </div>
  <div class="make_order_container">
    <div class="make_order_decor"></div>
    <div class="make_order_name_back">
      <div class="make_order_name">оформить<br />закупку</div>
    </div>
        <div class="form-container">
        <div class="form_block">
        <input type="text" placeholder="Ваше имя" class="form-input" />
        <input type="tel" placeholder="+7 (999) 999 99 99" class="form-input" />
        <textarea placeholder="Расскажите о вашей компании" class="form-textarea form-textarea_padd form-textarea_last"></textarea>
        <button class="submit-button">ОТПРАВИТЬ</button>
      </div>
      <p class="policy-text color_grey-black">
        Отправляя заявку, вы соглашаетесь с нашей <br>
        <a href="#" class="policy-link color_red">Политикой в отношении обработки персональных данных</a>
      </p>
    </div>
    </div>
    
</template>

<script>
// export default {
//     mounted() {
//       this.startSlider();
//     },
//     data() {
//       return {
//         currentSlide: 1, // Текущий слайд (начинаем с 1)
//         sliderDirection: 1, // 1 - движение вперед, -1 - назад
//       };
//     },
//     methods: {
//       startSlider() {
//         const sliderContent = this.$refs.sliderContent;
//         const slideWidth = 100; // Ширина слайда в vw

//         setInterval(() => {
//           // Вычисляем смещение
//           const currentOffset = (this.currentSlide - 1) * slideWidth * this.sliderDirection;
//           sliderContent.style.transform = `translateX(${currentOffset}vw)`;

//           // Меняем направление движения при достижении 3 или 1 слайда
//           if (this.currentSlide === 3) {
//             this.sliderDirection = -1;
//           } else if (this.currentSlide === 1) {
//             this.sliderDirection = 1;
//           }

//           // Переходим к следующему слайду
//           this.currentSlide += this.sliderDirection;
//         }, 1000); // Интервал переключения 15 секунд
//       },
//     },
//   };
</script>
