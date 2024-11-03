<template>
  <HeaderBlock />
  <section class="title_catalog_container1">
    <div class="title_catalog_block">
      <p class="title_catalog color_red">каталог</p>
    </div>
    <div class="social_media">
      <div class="mail_social_katalog"></div>
      <div class="tg_social_katalog"></div>
      <div class="wp_social_katalog"></div>
    </div>
  </section>
  <div class="day_night_container">
    <div class="day_night_block">
      <div class="day_night_text_block">
        <p class="day_night_title">day&night</p>
        <p class="day_night_text day_night_text_none">
          линейка вкусов<br />для ценителей крепости
        </p>
        <p class="day_night_text day_night_text_none_phone">
          линейка вкусов для<br />ценителей крепости
        </p>
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
  <div class="list_product_container">
    <div class="list_product_block">
      <div class="list_product_items_container_button_phone">
        <div class="list_product_button_block">
          <div class="list_product_items_container_button_phone1">
            <button
              :class="[
                'list_product_button',
                'list_product_button1',
                { active: activeButton === 1 },
              ]"
              @click="toggleBlock(1)"
            >
              электронные сигареты
            </button>

            <button
              :class="[
                'list_product_button',
                'list_product_button2',
                { active: activeButton === 2 },
              ]"
              @click="toggleBlock(2)"
            >
              Жидкость 20%
            </button>
          </div>
          <button
            :class="[
              'list_product_button',
              'list_product_button2',
              { active: activeButton === 3 },
            ]"
            @click="toggleBlock(3)"
          >
            Жидкость 50%
          </button>
        </div>
      </div>
      <div class="list_product_items_container" v-if="activeButton === 1">
        <RouterLink to="/goods" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item1.png"
              alt=""
            />
            <p class="list_product_name color_white">blueberry raspberry</p>
            <div class="list_product_podik_img">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod1.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsgrape" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item2.png"
              alt=""
            />
            <p class="list_product_name color_white">grape ice</p>
            <div class="list_product_podik_img">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod2.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodslush" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item3.png"
              alt=""
            />
            <p class="list_product_name color_white">lush ice</p>
            <div class="list_product_podik_img list_product_podik_img3">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod3.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodskiwi" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item4.png"
              alt=""
            />
            <p class="list_product_name color_white">kiwi strawberry</p>
            <div class="list_product_podik_img list_product_podik_img4">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod4.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodscola" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item5.png"
              alt=""
            />
            <p class="list_product_name color_white">cola lemon</p>
            <div class="list_product_podik_img list_product_podik_img5">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod5.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodscherry" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item6.png"
              alt=""
            />
            <p class="list_product_name color_white">dark cherry</p>
            <div class="list_product_podik_img list_product_podik_img6">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod6.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsenergy" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item7.png"
              alt=""
            />
            <p class="list_product_name color_white">energy drink</p>
            <div class="list_product_podik_img list_product_podik_img7">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod7.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsraspberry" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item8.png"
              alt=""
            />
            <p class="list_product_name color_white">raspberry root soda</p>
            <div class="list_product_podik_img list_product_podik_img8">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod8.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsmixed" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item9.png"
              alt=""
            />
            <p class="list_product_name color_white">mixed berry</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod9.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item10.png"
              alt=""
            />
            <p class="list_product_name color_white">blackcurrant strawberry</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/katalog_pod10.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>20K</span>
              <span>20 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
      </div>
      <div class="list_product_items_container" v-if="activeButton === 2">
        <div class="list_product_items_container">
          <RouterLink to="/goods" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_1.png"
                alt=""
              />
              <p class="list_product_name color_white">персик</p>
              <div class="list_product_podik_img">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/peach.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsgrape" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_2.png"
                alt=""
              />
              <p class="list_product_name color_white">черника малина</p>
              <div class="list_product_podik_img">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/blueberries_raspberries.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodslush" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_3.png"
                alt=""
              />
              <p class="list_product_name color_white">розовый лимонад</p>
              <div class="list_product_podik_img list_product_podik_img3">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/wild_berries.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodskiwi" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_4.png"
                alt=""
              />
              <p class="list_product_name color_white">манго</p>
              <div class="list_product_podik_img list_product_podik_img4">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/mango.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodscola" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_5.png"
                alt=""
              />
              <p class="list_product_name color_white">малина банан</p>
              <div class="list_product_podik_img list_product_podik_img5">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/raspberry_banana.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodscherry" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_6.png"
                alt=""
              />
              <p class="list_product_name color_white">лесные ягоды</p>
              <div class="list_product_podik_img list_product_podik_img6">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/wild_berries.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsenergy" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_7.png"
                alt=""
              />
              <p class="list_product_name color_white">клубничное мороженое</p>
              <div class="list_product_podik_img list_product_podik_img7">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/strawberry_ice_cream.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsraspberry" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_8.png"
                alt=""
              />
              <p class="list_product_name color_white">жвачка</p>
              <div class="list_product_podik_img list_product_podik_img8">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/chewing gum.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsmixed" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_9.png"
                alt=""
              />
              <p class="list_product_name color_white">ежевика</p>
              <div class="list_product_podik_img list_product_podik_img9">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/blackberry.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_10.png"
                alt=""
              />
              <p class="list_product_name color_white">вишня лайм</p>
              <div class="list_product_podik_img list_product_podik_img9">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/cherry_lime.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_11.png"
                alt=""
              />
              <p class="list_product_name color_white">виноград</p>
              <div class="list_product_podik_img list_product_podik_img9">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/grape.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_12.png"
                alt=""
              />
              <p class="list_product_name color_white">арбуз</p>
              <div class="list_product_podik_img list_product_podik_img9">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/lush.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
          <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
            <div class="list_product_items_block">
              <img
                class="list_product_items_block1"
                src="@/assets/img/back/back_item_13.png"
                alt=""
              />
              <p class="list_product_name color_white">лимон ананас</p>
              <div class="list_product_podik_img list_product_podik_img9">
                <img
                  class="list_product_podik_img1"
                  src="@/assets/img/katalog_pod/lemon_pineapple.png"
                  alt=""
                />
              </div>
              <div class="list_product_dots list_product_dots_pos_katalog">
                <span>30ml</span>
                <span>50 mg</span>
                <span>salt</span>
              </div>
            </div></RouterLink
          >
        </div>
      </div>
      <div class="list_product_items_container" v-if="activeButton === 3">
        <RouterLink to="/goods" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_1.png"
              alt=""
            />
            <p class="list_product_name color_white">персик</p>
            <div class="list_product_podik_img">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/peach.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsgrape" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_2.png"
              alt=""
            />
            <p class="list_product_name color_white">черника малина</p>
            <div class="list_product_podik_img">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/blueberries_raspberries.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodslush" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_3.png"
              alt=""
            />
            <p class="list_product_name color_white">розовый лимонад</p>
            <div class="list_product_podik_img list_product_podik_img3">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/wild_berries.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodskiwi" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_4.png"
              alt=""
            />
            <p class="list_product_name color_white">манго</p>
            <div class="list_product_podik_img list_product_podik_img4">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/mango.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodscola" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_5.png"
              alt=""
            />
            <p class="list_product_name color_white">малина банан</p>
            <div class="list_product_podik_img list_product_podik_img5">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/raspberry_banana.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodscherry" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_6.png"
              alt=""
            />
            <p class="list_product_name color_white">лесные ягоды</p>
            <div class="list_product_podik_img list_product_podik_img6">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/wild_berries.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsenergy" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_7.png"
              alt=""
            />
            <p class="list_product_name color_white">клубничное мороженое</p>
            <div class="list_product_podik_img list_product_podik_img7">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/strawberry_ice_cream.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsraspberry" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_8.png"
              alt=""
            />
            <p class="list_product_name color_white">жвачка</p>
            <div class="list_product_podik_img list_product_podik_img8">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/chewing gum.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsmixed" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_9.png"
              alt=""
            />
            <p class="list_product_name color_white">ежевика</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/blackberry.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_10.png"
              alt=""
            />
            <p class="list_product_name color_white">вишня лайм</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/cherry_lime.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_11.png"
              alt=""
            />
            <p class="list_product_name color_white">виноград</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/grape.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_12.png"
              alt=""
            />
            <p class="list_product_name color_white">арбуз</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/lush.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
        <RouterLink to="/goodsblackcurrant" class="list_product_items_link">
          <div class="list_product_items_block">
            <img
              class="list_product_items_block1"
              src="@/assets/img/back/back_item_13.png"
              alt=""
            />
            <p class="list_product_name color_white">лимон ананас</p>
            <div class="list_product_podik_img list_product_podik_img9">
              <img
                class="list_product_podik_img1"
                src="@/assets/img/katalog_pod/lemon_pineapple.png"
                alt=""
              />
            </div>
            <div class="list_product_dots list_product_dots_pos_katalog">
              <span>30ml</span>
              <span>50 mg</span>
              <span>salt</span>
            </div>
          </div></RouterLink
        >
      </div>
    </div>
  </div>
  <TopLiest />
  <div class="propast"></div>
  <MakeorderBlock />
  <FooterBlock />
</template>

<script>
import HeaderBlock from "./stabl/HeaderBlock.vue";
import TopLiest from "./stabl/TopLiest.vue";
import MakeorderBlock from "./stabl/MakeorderBlock.vue";
import FooterBlock from "./stabl/FooterBlock.vue";
export default {
  components: {
    HeaderBlock,
    TopLiest,
    MakeorderBlock,
    FooterBlock,
  },
  data() {
    return {
      activeButton: 1, // По умолчанию активна первая кнопка
    };
  },
  methods: {
    toggleBlock(buttonNumber) {
      this.activeButton = buttonNumber; // Меняем активную кнопку
    },
  },
};
</script>
