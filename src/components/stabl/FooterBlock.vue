<template>
  <footer class="footer_main">
    <div class="footer_container">
      <div class="footer_img">
        <img class="footer_ava" src="@/assets/img/footerava.svg" alt="" />
      </div>
      <div class="footer_block">
        <div class="footer_links">
          <RouterLink to="/" class="footer_links_text "
            >главная</RouterLink
          >
          <RouterLink to="/contacts" class="footer_links_text "
            >о&nbsp;нас</RouterLink
          >
          <RouterLink to="/delivery" class="footer_links_text "
            >доставка</RouterLink
          >
          <RouterLink to="/news" class="footer_links_text "
            >новости</RouterLink
          >
        </div>
        <div class="footer_links_text_phone">
          <a
            class="footer_links_text  footer_links_text_position2"
            href="tel:+89999999999"
            >8 999 999 99 99</a
          >
          <a
            class="footer_links_text  footer_links_text_position"
            href="mailto:7stоbacсo@gmail.com"
            >7stоbacсo@gmail.com</a
          >
        </div>
        <a class="footer_links_opacity_text " href="/"
          >политика конфиденциальности</a
        >
        <p class=" footer_links_opacity_text_position">
          © 2024 7s. Все права защищены.
        </p>
        <RouterLink to="/katalog" class="footer_btn color_grey-black"
          >каталог</RouterLink
        >
      </div>
    </div>
    <RouterLink to="/katalog" class="footer_btn_phone"
      >каталог</RouterLink
    >
    <div class="footer_phone_end">
      <a class="footer_links_phone_text " href="/"
        >политика конфиденциальности</a
      >
      <a class="footer_links_phone_text " href="/"
        >© 2024 7s. Все права защищены.</a
      >
    </div>
  </footer>
</template>
