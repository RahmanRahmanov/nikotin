<template>
  <HeaderBlock />
  <div class="section_full_block">
    <section class="section_full_slider">
      <div class="container_slider" ref="slider">
        <img src="@/assets/img/header_slider.png" class="img_slider" />
        <img src="@/assets/img/header_slider2.png" class="img_slider" />
        <img src="@/assets/img/header_slider3.png" class="img_slider" />
      </div>
      <div class="box_marker_slider">
        <div
          class="marker_slider_1"
          :class="{ active: sliderPosition === 0 }"
        ></div>
        <div
          class="marker_slider_2"
          :class="{ active: sliderPosition === -1 }"
        ></div>
        <div
          class="marker_slider_3"
          :class="{ active: sliderPosition === -2 }"
        ></div>
      </div>
    </section>
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
      <div class="_3pods_1">
        <img class="_3pods_img" src="@/assets/img/3pods_1.png" alt="" />
      </div>
      <div class="_3pods_2">
        <img class="_3pods_img" src="@/assets/img/3pods_2.png" alt="" />
      </div>
      <div class="_3pods_3">
        <img class="_3pods_img" src="@/assets/img/3pods_3.png" alt="" />
      </div>
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
    <SloderReviews />
    <p class="reviews_comment_name color_red"></p>
    <p class="reviews_comment color_grey-black"></p>
  </div>
  <MakeorderBlock />
  <footer class="footer_main">
    <div class="footer_container">
      <div class="footer_img">
        <img class="footer_ava" src="@/assets/img/footerava.svg" alt="" />
      </div>
      <div class="footer_block">
        <div class="footer_links">
          <a class="footer_links_text color_white" href="/">о нас</a>
          <a class="footer_links_text color_white" href="/">доставка</a>
          <a class="footer_links_text color_white" href="/">отзывы</a>
          <a class="footer_links_text color_white" href="/">контакты</a>
        </div>
        <a
          class="footer_links_text color_white footer_links_text_position2"
          href="tel:+89999999999"
          >8 999 999 99 99</a
        >
        <a
          class="footer_links_text color_white footer_links_text_position"
          href="mailto:7stоbacсo@gmail.com"
          >7stоbacсo@gmail.com</a
        >
        <a class="footer_links_opacity_text color_white" href="/"
          >политика конфиденциальности</a
        >
        <a class="color_white footer_links_opacity_text_position" href="/"
          >© 2024 7s. Все права защищены.</a
        >
        <button class="footer_btn color_grey-black">связаться с нами</button>
      </div>
    </div>
  </footer>
</template>

<script>
import HeaderBlock from "./stabl/HeaderBlock.vue";
import SloderReviews from "@/components/UI/SloderReviews.vue";
import MakeorderBlock from "./stabl/MakeorderBlock.vue";
export default {
  components: {
    HeaderBlock,
    SloderReviews,
    MakeorderBlock,
  },
  data() {
    return {
      sliderPosition: 0,
    };
  },
  mounted() {
    this.animateSlider();
  },
  methods: {
    animateSlider() {
      const slider = this.$refs.slider;
      let count = 0;
      setInterval(() => {
        switch (count % 6) {
          case 0:
            this.sliderPosition = 0;
            break;
          case 1:
            this.sliderPosition = -1; // -100vw
            break;
          case 2:
            this.sliderPosition = -2; // -200vw
            break;
          case 3:
            this.sliderPosition = -1; // -100vw
            break;
          case 4:
            this.sliderPosition = 0;
            break;
        }
        slider.style.transform = `translateX(${this.sliderPosition * 100}vw)`;
        count++;
      }, 15000);
    },
  },
};
</script>
