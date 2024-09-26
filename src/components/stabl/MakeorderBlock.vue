<template>
  <div class="make_order_container">
    <div class="make_order_decor"></div>
    <div class="make_order_name_back">
      <div class="make_order_name">оформить<br />закупку</div>
    </div>
    <div class="form-container">
      <div class="form_block">
        <input type="text" placeholder="Ваше имя" class="form-input" />
        <input type="tel" placeholder="+7 (999) 999 99 99" class="form-input" />
        <textarea
          placeholder="Расскажите о вашей компании"
          class="form-textarea form-textarea_padd form-textarea_last"
        ></textarea>
        <button class="submit-button">ОТПРАВИТЬ</button>
      </div>
      <p class="policy-text color_grey-black">
        Отправляя заявку, вы соглашаетесь с нашей <br />
        <a href="#" class="policy-link color_red"
          >Политикой в отношении обработки персональных данных</a
        >
      </p>
    </div>
  </div></template>