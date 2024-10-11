<template>
  <HeaderBlock />
  <div class="section_full_block">
    <HeaderSlider />
    <div class="social_media">
      <div class="mail_social"></div>
      <div class="tg_social"></div>
      <div class="wp_social"></div>
    </div>
    <div class="title_7stars">
      <h1 class="title color_white text_align_left">
        о 7stars
      </h1>
    </div>
  </div>
  <div class="about_us_container">
    <div class="about_us_block about_us_block_contacts">
      <p class="onas_us_block color_white">о нас</p>
      <div class="about_us_container_text">
        <p class="about_us_text color_white">Яркие ароматы и вкусопередача</p>
        <p class="about_us_text color_white">
          За время работы мы получили много<br />
          положительных отзывов от наших<br />
          партнёров.
        </p>
        <p class="about_us_text color_white">
          Нашей продукцией являются<br />
          Электронные сигареты и жидкости<br />
          для электронных сигарет
        </p>
        <p class="about_us_text color_white">
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
  <div class="contacts_container">
    <p class="contacts_name_container">контакты</p>
    <div class="contacts_container_block">
      <div class="contacts_tel">
        <p class="tel_name color_red">телефон:</p>
        <a class="tel_name" href="tel:+89999999999"> 8 999 999 99 99</a>
      </div>
      <div class="contacts_tel tel_name_phone1">
        <p class="tel_name color_red">почта:</p>
        <a class="tel_name" href="mailto:7stоbacсo@gmail.com">
          7stоbacсo@gmail.com</a
        >
      </div>
      <div class="contacts_tel tel_name_phone">
        <p class="tel_name color_red">почта: <br></p>
        <a class="tel_name" href="mailto:7stоbacсo@gmail.com">
          7stоbacсo@gmail.com</a
        >
      </div>
      <div class="contacts_text tel_name_time_phone1">
        <p class="tel_name ">
          Принимаем звонки
          <span class="tel_name color_red"> с 9:00 до 21:00 </span
          ><span class="tel_name">(по Москве)</span>
        </p>
        <p class="tel_name">заказы через сайт принимаются круглосуточно!</p>
      </div>
      <div class="contacts_text tel_name_time_phone">
        <p class="tel_name ">
          Принимаем звонки <br>
          <span class="tel_name color_red"> с 9:00 до 21:00 <br> </span
          ><span class="tel_name">(по Москве)</span>
        </p>
        <p class="tel_name">заказы через сайт принимаются круглосуточно!</p>
      </div>
    </div>
  </div>
  <TopLiest />
  <div class="padding_for_contacts"></div>
  <MakeorderBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "./stabl/HeaderBlock.vue";
import TopLiest from "./stabl/TopLiest.vue";
import MakeorderBlock from "./stabl/MakeorderBlock.vue";
import FooterBlock from "./stabl/FooterBlock.vue";
import HeaderSlider from "@/components/UI/HeaderSlider.vue";
export default {
  components: {
    HeaderBlock,
    TopLiest,
    MakeorderBlock,
    FooterBlock,
    HeaderSlider,
  },
};
</script>
