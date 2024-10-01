<template>
<HeaderBlock/>
<section class="title_catalog_container">
    <div class="title_goods_block">
    </div>
    <div class="social_media">
      <div class="mail_social"></div>
      <div class="tg_social"></div>
      <div class="wp_social"></div>
    </div>
  </section>
  <div class="day_night_container">
    <div class="day_night_block">
      <div class="day_night_text_block">
        <p class="day_night_title">day&night</p>
        <p class="day_night_text">линейка вкусов<br />для ценителей крепости</p>
      </div>
      <div class="day_night_img_block">
      <div class="day_night_img"><img class="day_night_img1" src="@/assets/img/day_night1.png" alt=""><p class="day_night_text_img color_white">Более высокая<br>усвояемость<br>никотина</p></div>
      <div class="day_night_img"><img class="day_night_img1" src="@/assets/img/day_night2.png" alt=""><p class="day_night_text_img color_white">Отличное<br>насыщение</p></div>
      <div class="day_night_img"><img class="day_night_img1" src="@/assets/img/day_night3.png" alt=""><p class="day_night_text_img color_white">Инновационный<br>подход</p></div>
      </div>
      </div>
    </div>
    <section class="top_goods_slider">
        <div class="top_goods_block">
            <p class="top_tastes_text color_grey-black">популярные товары</p>
        </div>
    </section>
    <TopLiest/>
<MakeorderBlock/>
<FooterBlock/>
</template>

<script>
import HeaderBlock from "./stabl/HeaderBlock.vue";
import MakeorderBlock from "./stabl/MakeorderBlock.vue";
import FooterBlock from "./stabl/FooterBlock.vue";
import TopLiest from "./stabl/TopLiest.vue";
export default {
  components: {
    HeaderBlock,
    MakeorderBlock,
    FooterBlock,
    TopLiest,
},
};
</script>