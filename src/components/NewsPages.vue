<template>
    <HeaderBlock/>
    <div class="section_full_block">
    <HeaderSlider/>
    <div class="social_media">
      <div class="mail_social"></div>
      <div class="tg_social"></div>
      <div class="wp_social"></div>
    </div>
    <div class="box_title_home_pages">
      <h1 class="title color_white text_align_left">
        новости<br/>
        <span class="margin_title1 color_white"> 7stars</span>
      </h1>
    </div>
  </div>
    <TopLiest/>
    <MakeorderBlock/>
    <FooterBlock/>
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