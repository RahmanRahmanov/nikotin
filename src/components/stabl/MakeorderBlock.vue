<template>
  <div class="make_order_container">
    <div class="make_order_decor"></div>
    <div class="make_order_name_back">
      <div class="make_order_name">оформить<br />закупку</div>
    </div>
    <div class="form-container">
      <div class="form_block">
        <div class="pos_relative_error">
          <input
            type="text"
            placeholder="Ваше имя"
            v-model="name"
            class="form-input"
          />
          <p v-if="nameError" class="error-text">{{ nameError }}</p>
        </div>

        <div class="pos_relative_error">
          <input
            type="tel"
            placeholder="+7 (999) 999 99 99"
            v-model="phone"
            class="form-input"
          />
          <p v-if="phoneError" class="error-text">{{ phoneError }}</p>
        </div>

        <textarea
          placeholder="Расскажите о вашей компании"
          v-model="company"
          class="form-textarea form-textarea_padd form-textarea_last"
        ></textarea>

        <button class="submit-button" @click="validateForm">ОТПРАВИТЬ</button>
      </div>
      <p class="policy-text color_grey-black">
        Отправляя заявку, вы соглашаетесь с нашей <br />
        <a href="#" class="policy-link color_red"
          >Политикой в отношении обработки персональных данных</a
        >
      </p>
    </div>

    <div v-if="showError" class="error_make_oreder">
      <p class="error_order_text color_white">
        Пожалуйста, заполните все обязательные поля
      </p>
      <p v-if="name.length < 2" class="error_order_text color_white">
        Слишком короткое значение
      </p>
    </div>
  </div>
  <div v-if="showModal" class="modal_access">
    <div class="thanks_block">
      <div class="thanks_yes">
        <img src="@/assets/img/thanks_img.png" alt="" />
      </div>
      <img
        class="thanks_x"
        src="@/assets/img/thanks_x.png"
        alt=""
        @click="closeModal"
      />
      <p class="thanks_text">
        Спасибо! Данные успешно <br />
        отправлены.
      </p>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: "",
      phone: "",
      company: "",
      nameError: "",
      phoneError: "",
      showError: false,
      showModal: false, // Управление модальным окном
    };
  },
  methods: {
    validateForm() {
      this.resetErrors();

      // Валидация имени (минимум 2 символа)
      if (this.name.length < 2) {
        this.nameError = "Имя должно содержать не менее 2 символов";
      }

      // Валидация телефона (+7 или 8)
      const phonePattern = /^(?:\+7|8)\s?\(?\d{3}\)?\s?\d{3}\s?\d{2}\s?\d{2}$/;
      if (!phonePattern.test(this.phone)) {
        this.phoneError = "Введите корректный номер телефона (+7 или 8)";
      }

      // Если нет ошибок, открываем модальное окно
      if (!this.nameError && !this.phoneError) {
        console.log("Имя:", this.name);
        console.log("Телефон:", this.phone);
        if (this.company) {
          console.log("Компания:", this.company);
        } else {
          console.log("Компания: не указана");
        }
        this.openModal();
      } else {
        // Показ статического окна ошибки на 5 секунд
        this.showError = true;
        setTimeout(() => {
          this.showError = false;
        }, 5000);
      }
    },
    resetErrors() {
      this.nameError = "";
      this.phoneError = "";
    },
    openModal() {
      this.showModal = true;
      document.body.classList.add("no-scroll"); // Добавляем класс no-scroll к body
    },
    closeModal() {
      this.showModal = false;
      document.body.classList.remove("no-scroll"); // Убираем класс no-scroll у body
    },
  },
};
</script>

<style>
.form-input,
.form-textarea {
  display: block;
  margin-bottom: 0,62rem;
}

.error-text {
  position: absolute;
  color: rgb(247, 46, 90);
  font-family: Hero-Regular;
  font-weight: 400;
  line-height: 1.19rem;
  top: -1.3rem;
  left: 1.62rem;
}
.modal_access {
  width: 100%;
  height: 100vh;
  position: fixed;
  top: 0px;
  left: 0px;
  backdrop-filter: blur(0.64rem);
  background: rgba(16, 15, 22, 0.6);
  z-index: 1;
  display: flex;
  align-items: center;
  justify-content: center;
}
</style>
