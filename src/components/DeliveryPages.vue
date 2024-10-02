<template>
  <div class="section_full_header">
    <HeaderBlock />
    <div class="delivery_block">
      <p class="delivery_name">доставка<br />и оплата</p>
    </div>
    <div class="social_media_pos social_media">
      <div class="mail_social"></div>
      <div class="tg_social"></div>
      <div class="wp_social"></div>
    </div>
    <div class="day_night_img_block delivery_img_pos">
      <div class="day_night_img">
        <img
          class="delivery_img1"
          src="@/assets/img/delivery_day_night1.png"
          alt=""
        />
        <p class="day_night_text_img color_white">
          высокое<br />качество<br />товара
        </p>
      </div>
      <div class="day_night_img">
        <img class="delivery_img1" src="@/assets/img/rubl.png" alt="" />
        <p class="day_night_text_img color_white">выгодная<br />цена</p>
      </div>
      <div class="day_night_img">
        <img class="delivery_img1" src="@/assets/img/day_night3.png" alt="" />
        <p class="day_night_text_img color_white">
          быстрая<br />доставка<br />по всей <br />области
        </p>
      </div>
    </div>
  </div>
  <div class="delivery_pay_container">
    <div class="delivery_pay_block delivery_pay_block_pos">
      <p class="delivery_pay_name">доставка</p>
      <p class="delivery_pay_text">
        Отправка любой транспортной компанией за счет клиента.
      </p>
    </div>
    <div class="delivery_pay_block delivery_pay_block_pos2">
      <p class="delivery_pay_name">оплата</p>
      <div class="delivery_pay_text_block">
        <p class="delivery_pay_text">Вы можете оплатить заказ:</p>
        <div class="delivery_pay_text_end">
          <p class="delivery_pay_text">
            1. Банковской картой Visa, Mastercard <br />
            &nbsp;&nbsp;&nbsp;или МИР при оформлении заказа
          </p>
          <p class="delivery_pay_text">2. Наличными (только при самовывозе)</p>
        </div>
      </div>
    </div>
  </div>
  <div class="black_hole_between"></div>
  <MakeorderBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "./stabl/HeaderBlock.vue";
import MakeorderBlock from "./stabl/MakeorderBlock.vue";
import FooterBlock from "./stabl/FooterBlock.vue";
export default {
  components: {
    HeaderBlock,
    MakeorderBlock,
    FooterBlock,
  },
};
</script>
