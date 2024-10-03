<template>
  <header class="header_main">
    <div class="container_header">
      <div class="adapt_header_img_pos">
        <a href="/" class="header_logo">
          <img class="header_logo_img" src="@/assets/img/header_img.svg" alt="Header Image"
        /></a>
        <div class="header_burger">
          <div class="burger_line1"></div>
          <div class="burger_line2"></div>
          <div class="burger_line3"></div>
        </div>
      </div>
      <div class="nav_text_block">
        <a href="/" class="nav_text">главная</a>
        <a href="/" class="nav_text">о нас</a>
        <a href="/" class="nav_text">доставка</a>
        <a href="/" class="nav_text">новости</a>
      </div>
      <div class="line_btn">
        <button :class="isKatalogPage ? 'catalog_btn_active' : 'catalog_btn'">
          каталог
          <div class="gradient-line"></div>
        </button>
      </div>
    </div>
  </header>
</template>

<script>
export default {
  computed: {
    isKatalogPage() {
      return this.$route.path === "/katalog";
    },
  },
};
</script>
