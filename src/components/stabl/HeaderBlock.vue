<template>
  <AgeVerification />
  <header class="header_main">
    <div class="container_header">
      <div ref="burger" class="burger">
        <div ref="burger_text_nav" class="burger_text_nav">
          <RouterLink to="/" class="nav_text">главная</RouterLink>
          <RouterLink to="/contacts" class="nav_text">о&nbsp;нас</RouterLink>
          <RouterLink to="/delivery" class="nav_text">доставка</RouterLink>
          <RouterLink to="/news" class="nav_text">новости</RouterLink>
        </div>
        <div class="social_media">
          <div class="mail_social"></div>
          <div class="tg_social"></div>
          <div class="wp_social"></div>
        </div>
      </div>
      <div class="adapt_header_img_pos">
        <RouterLink to="/" class="header_logo">
          <img
            class="header_logo_img"
            src="@/assets/img/header_img.svg"
            alt="Header Image"
        /></RouterLink>
        <div @click="toggleBurger" class="header_burger">
          <div ref="burger_line1" class="burger_line1"></div>
          <div ref="burger_line2" class="burger_line2"></div>
          <div ref="burger_line3" class="burger_line3"></div>
        </div>
      </div>
      <div class="nav_text_block">
        <RouterLink to="/" class="nav_text">главная</RouterLink>
        <RouterLink to="/contacts" class="nav_text">о&nbsp;нас</RouterLink>
        <RouterLink to="/delivery" class="nav_text">доставка</RouterLink>
        <RouterLink to="/news" class="nav_text">новости</RouterLink>
      </div>
      <div class="line_btn">
        <RouterLink to="/katalog">
          <button :class="isKatalogPage ? 'catalog_btn_active' : 'catalog_btn'">
            каталог
            <div class="gradient-line"></div>
          </button>
        </RouterLink>
      </div>
    </div>
  </header>
</template>

<script>
import AgeVerification from "@/components/UI/AgeVerification.vue";
export default {
  components: {
    AgeVerification,
  },
  methods: {
    toggleBurger() {
      this.$refs.burger_text_nav.classList.toggle("active");
      this.$refs.burger.classList.toggle("active");
      this.$refs.burger_line1.classList.toggle("active");
      this.$refs.burger_line2.classList.toggle("active");
      this.$refs.burger_line3.classList.toggle("active");
    },
    closeBurger() {
      this.$refs.burger_text_nav.classList.remove("active");
      this.$refs.burger.classList.remove("active");
      this.$refs.burger_line1.classList.remove("active");
      this.$refs.burger_line2.classList.remove("active");
      this.$refs.burger_line3.classList.remove("active");
    },
  },
  computed: {
    isKatalogPage() {
      return this.$route.path === "/katalog";
    },
  },
};
</script>
