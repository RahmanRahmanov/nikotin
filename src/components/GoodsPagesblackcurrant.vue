<template>
  <HeaderBlock />
  <section class="title_catalog_container">
    <div class="title_goods_block">
      <img
        class="back_header_img"
        src="@/assets/img/goodsback/blbrspb.png"
        alt=""
      />

      <div class="header_text_container_goods_img_pos">
        <div class="header_text_container_goods">
          <p class="title_goods_name header_text_container_goods_img_pos_phone">
            blackcurrant <br />
            <span class="goods_name_margin title_goods_name ">strawberry</span>
          </p>
          <div class="title_goods_list_container_block">
            <div class="title_goods_list_text_block">
              <div class="title_goods_list_container">
                <div class="title_goods_list">
                  <p class="title_goods_list_text">затяжка</p>
                  <hr />
                </div>
                <p class="title_goods_list_text">регулируемая</p>
              </div>
            </div>
            <div class="title_goods_list_container">
              <div class="title_goods_list">
                <p class="title_goods_list_text">материал</p>
                <hr />
              </div>
              <p class="title_goods_list_text title_goods_list_text_phone1">
                алюминиевый сплав, пластик
              </p>
              <p class="title_goods_list_text title_goods_list_text_phone">
                алюм, сплав, пластик
              </p>
            </div>
            <div class="title_goods_list_container">
              <div class="title_goods_list">
                <p class="title_goods_list_text">емкость аккумулятора</p>
                <hr />
              </div>
              <p class="title_goods_list_text">650 mAh</p>
            </div>
            <div class="title_goods_list_container">
              <div class="title_goods_list">
                <p class="title_goods_list_text">количество тяжек</p>
                <hr />
              </div>
              <p class="title_goods_list_text">20 000</p>
            </div>
            <div class="title_goods_list_container">
              <div class="title_goods_list">
                <p class="title_goods_list_text">объем</p>
                <hr />
              </div>
              <p class="title_goods_list_text">18.0 мл</p>
            </div>
            <div class="title_goods_list_container">
              <div class="title_goods_list">
                <p class="title_goods_list_text">крепость</p>
                <hr />
              </div>
              <p class="title_goods_list_text">2.0%</p>
            </div>
          </div>
          <div class="list_product_dots list_product_dots_goods list_product_dots_pos_goods">
            <span>20K</span>
            <span>20 mg</span>
            <span>salt</span>
          </div>
        </div>
        <div class="header_goods_img_block">
          <img
            class="header_goods_img"
            src="@/assets/img/katalog_pod/katalog_pod10.png"
            alt=""
          />
        </div>
        <p class="title_goods_name title_article_list_text_phone12" >
          blackcurrant <br />
          <span class="goods_name_margin title_goods_name title_article_list_text_phone12">strawberry</span>
        </p>
      </div>    <div class="social_media_goods1 social_media title_article_list_text_phone1">
      <div class="mail_social"></div>
      <div class="tg_social"></div>
      <div class="wp_social"></div>
    </div>
    </div>

  </section>
  <div class="day_night_container">
    <div class="day_night_block">
      <div class="day_night_text_block">
        <p class="day_night_title">day&night</p>
        <p class="day_night_text">линейка вкусов<br />для ценителей крепости</p>
      </div>
      <div class="day_night_img_block">
        <div class="day_night_img">
          <img
            class="day_night_img1"
            src="@/assets/img/day_night1.png"
            alt=""
          />
          <p class="day_night_text_img color_white">
            Более высокая<br />усвояемость<br />никотина
          </p>
        </div>
        <div class="day_night_img">
          <img
            class="day_night_img1"
            src="@/assets/img/day_night2.png"
            alt=""
          />
          <p class="day_night_text_img color_white">Отличное<br />насыщение</p>
        </div>
        <div class="day_night_img">
          <img
            class="day_night_img1"
            src="@/assets/img/day_night3.png"
            alt=""
          />
          <p class="day_night_text_img color_white">
            Инновационный<br />подход
          </p>
        </div>
      </div>
    </div>
  </div>
  <section class="top_goods_slider">
    <div class="top_goods_block">
      <p class="top_tastes_text color_grey-black">популярные товары</p>
      <GoodsSlider />
    </div>
  </section>
  <TopLiest />
  <MakeorderBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "./stabl/HeaderBlock.vue";
import MakeorderBlock from "./stabl/MakeorderBlock.vue";
import FooterBlock from "./stabl/FooterBlock.vue";
import TopLiest from "./stabl/TopLiest.vue";
import GoodsSlider from "@/components/UI/GoodsSlider.vue";
export default {
  components: {
    HeaderBlock,
    MakeorderBlock,
    FooterBlock,
    TopLiest,
    GoodsSlider,
  },
};
</script>
