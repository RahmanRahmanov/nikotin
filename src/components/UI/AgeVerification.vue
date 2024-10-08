<template>
  <!-- Main modal -->
  <div
    v-if="showModal"
    id="notification-modal"
    tabindex="-1"
    aria-hidden="false"
    class="full_block_18"
  >
    <div class="relative p-4 w-full max-w-2xl">
      <!-- Modal content -->
      <div class="full_block_18">
        <span class="full_block_18_question color_white">
          Вы старше 18 лет ?
        </span>
        <div class="full_block_18_button_block">
          <button type="button" class="full_block_18_button" @click="confirm">
            Да
          </button>
          <button type="button" class="full_block_18_button" @click="navigate">
            Нет
          </button>
        </div>
      <div class="full_block_18_text_block">
          <p class="full_block_18_text full_block_18_text_desc color_white">
              Продукция, представленная на сайте, предназначена только для лиц,
              достигших 18 лет. Нажимая «Да», вы подтверждаете свое
              совершеннолетие.
            </p>
            <p class="full_block_18_text full_block_18_text_phone color_white">
              Продукция, представленная на сайте, предназначена только для лиц,
              достигших 18 лет. <br> Нажимая «Да», вы подтверждаете свое
              совершеннолетие.
            </p>
      </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      showModal: false, // флаг для управления видимостью модального окна
    };
  },
  mounted() {
    const notificationDate = localStorage.getItem("notificationDate");

    if (notificationDate) {
      this.initializeTimer(this.addMinutes(new Date(notificationDate), 30));
    } else {
      this.showModal = true; // показываем модальное окно, если дата не сохранена
      document.body.classList.add("no-scroll"); // блокируем прокрутку
    }
  },
  methods: {
    confirm() {
      localStorage.setItem("notificationDate", new Date());
      this.initializeTimer(this.addMinutes(new Date(), 30));
      this.showModal = false; // скрываем модальное окно после подтверждения
      document.body.classList.remove("no-scroll"); // возвращаем прокрутку
    },
    navigate() {
      window.location.replace(
        "https://www.consultant.ru/document/cons_doc_LAW_58968/e4311f6720a4a4457f53bce4382af75b7858054e/"
      );
    },
    addMinutes(date, minutes) {
      return new Date(date.getTime() + minutes * 60000);
    },
    getTimeRemaining(endtime) {
      const total = Date.parse(endtime) - Date.parse(new Date());
      const seconds = Math.floor((total / 1000) % 60);
      const minutes = Math.floor((total / 1000 / 60) % 60);
      const hours = Math.floor((total / (1000 * 60 * 60)) % 24);
      const days = Math.floor(total / (1000 * 60 * 60 * 24));

      return { total, days, hours, minutes, seconds };
    },
    initializeTimer(endtime) {
      const timeinterval = setInterval(() => {
        const t = this.getTimeRemaining(endtime);

        if (t.total <= 0) {
          this.showModal = true; // показываем модальное окно, если таймер истек
          document.body.classList.add("no-scroll"); // блокируем прокрутку
          clearInterval(timeinterval);
        }
      }, 1000);
    },
  },
};
</script>
