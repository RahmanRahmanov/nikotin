<template>
  <HeaderBlock />
  <div class="header_back_article_container">
    <div class="header_article_text">
      <p class="header_article_date">12 сентября 2024</p>
      <p class="header_article_date">Автор: Алексей Совицкий</p>
    </div>
    <p class="header_article_question">
      что такое жидкость для вейпа и как ее выбрать?
    </p>
    <img
      class="header_article_img"
      src="@/assets/img/article_header.png"
      alt=""
    />

    <div class="article_content_block2">
      <p class="header_article_top_name">Популярные статьи</p>
      <div class="header_article_top_liest_text">
        <a class="header_article_top_text" href="/"
          >что такое жидкость для вейпа и как ее<br />
          выбрать?</a
        >
        <a class="header_article_top_text" href="/"
          >что такое жидкость для вейпа и как ее<br />
          выбрать?</a
        >
        <a class="header_article_top_text" href="/"
          >что такое жидкость для вейпа и как ее<br />
          выбрать?</a
        >
        <a class="header_article_top_text" href="/"
          >что такое жидкость для вейпа и как ее<br />
          выбрать?</a
        >
        <a class="header_article_top_text" href="/"
          >что такое жидкость для вейпа и как ее<br />
          выбрать?</a
        >
      </div>
    </div>
    <div class="social_media">
    <div class="mail_social"></div>
    <div class="tg_social"></div>
    <div class="wp_social"></div>
  </div>
  </div>


  <div class="article_container">
    <div class="article_content_block">
      <p class="article_content_link_name">Содержание:</p>
      <div class="article_content_link_block">
        <a class="article_content_link" data-index="1. " href=""
          >Виды жидкостей для электронных сигарет</a
        >
        <a class="article_content_link" data-index="2. " href=""
          >как выбрать жидкость для электронной сигареты</a
        >
      </div>
    </div>
    <p class="article_after_block_text article_after_block_text_pos1">
      Электронные сигареты с каждым днем становятся все популярнее.
      Инновационное устройство позволяет <br />
      получать удовольствие и обеспечит более безопасное курение. Жидкость для
      электронной сигареты – это <br />
      заправка, которая обеспечит приятный вкус и аромат во время парения.
    </p>
    <div class="article_after_name_block">
    <p class="article_after_block_name">Виды жидкостей для электронных сигарет</p>
    <p class="article_after_block_text">Сейчас жижки для вейпа изготавливают множество производителей, продукция которых отличается <br>
      разнообразием вкуса и содержанием никотина. Стандартный состав вейпа:</p>
      <ul class="list_articles article_after_block_text">
          <p ></p>
          <li>
            никотиновая база (отсутствует в безникотиновых заправках);
          </li>
          <li>
            вода;
          </li>
          <li>
растительный глицерин (отвечает за насыщенность пара);
          </li>
          <li>натуральные, искусственные ароматизатори;
          </li>
          <li>пропиленгликоль (вязкое вещество, помогающее компонентам перемещаться по дыхательным путям).
          </li>
        </ul></div>
        <p class="article_after_block_text pad_text_article5rem">В наполнитель для электронных сигарет добавляют подсластители, усилители вкуса и другие компоненты<br>
        системы.</p>
  </div>

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
  mounted() {
  // Проверка, если элементы присутствуют на странице, только тогда вешаем обработчик
  const block = document.querySelector('.article_content_block2');
  const headerQuestion = document.querySelector('.header_article_question');
  const articleContainer = document.querySelector('.article_container');
  
  if (block && headerQuestion && articleContainer) {
    window.addEventListener('scroll', this.handleScroll);
  }
},
beforeUnmount() { // Используем beforeUnmount вместо beforeDestroy
  window.removeEventListener('scroll', this.handleScroll);
},
methods: {
  handleScroll() {
    const block = document.querySelector('.article_content_block2');
    const headerQuestion = document.querySelector('.header_article_question');
    const articleContainer = document.querySelector('.article_container');

    if (!block || !headerQuestion || !articleContainer) {
      return; // Останавливаем выполнение, если элементы не найдены
    }

    const headerQuestionRect = headerQuestion.getBoundingClientRect();
    const articleContainerRect = articleContainer.getBoundingClientRect();
    
    const headerBottom = headerQuestionRect.bottom + window.pageYOffset;
    const containerBottom = articleContainerRect.bottom + window.pageYOffset;

    if (window.pageYOffset >= headerBottom && window.pageYOffset + block.offsetHeight < containerBottom) {
      block.style.position = "fixed";
    block.style.top = "1.25rem"; // Отступ сверху, чтобы блок не прилипал вплотную
    block.style.right = "0";
    } else if (window.pageYOffset + block.offsetHeight >= containerBottom) {
      block.style.position = "absolute";
    block.style.top = "130rem";
    block.style.right = "0";
    } else {
      block.style.position = "absolute";
    block.style.top = "16.5rem"; // Исходное положение
    block.style.right = "0";
    }
  }
}
};
</script>