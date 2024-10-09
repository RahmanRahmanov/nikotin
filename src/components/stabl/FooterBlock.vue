<template>
  <footer class="footer_main">
    <div class="footer_container">
      <div class="footer_img">
        <img class="footer_ava" src="@/assets/img/footerava.svg" alt="" />
      </div>
      <div class="footer_block">
        <div class="footer_links">
          <RouterLink to="/" class="footer_links_text color_white"
            >главная</RouterLink
          >
          <RouterLink to="/contacts" class="footer_links_text color_white"
            >о&nbsp;нас</RouterLink
          >
          <RouterLink to="/" class="footer_links_text color_white"
            >отзывы</RouterLink
          >
          <RouterLink to="/contacts" class="footer_links_text color_white"
            >контакты</RouterLink
          >
        </div>
        <div class="footer_links_text_phone">
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
        </div>
        <a class="footer_links_opacity_text color_white" href="/"
          >политика конфиденциальности</a
        >
        <p class="color_white footer_links_opacity_text_position">
          © 2024 7s. Все права защищены.
        </p>
        <a href="#make_order_container" class="footer_btn color_grey-black"
          >связаться с нами</a
        >
      </div>
    </div>
    <a href="#make_order_container" class="footer_btn_phone"
      >связаться с нами</a
    >
    <div class="footer_phone_end">
      <a class="footer_links_phone_text color_white" href="/"
        >политика конфиденциальности</a
      >
      <a class="color_white footer_links_phone_text" href="/"
        >© 2024 7s. Все права защищены.</a
      >
    </div>
  </footer>
</template>
