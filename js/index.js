// swiper
const swiper = new Swiper('.hero__swiper-container', {
  speed: 2000,
  slidesPerView: 1,
  loop: true,

  autoplay: {
    delay: 5000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },
});

const swiper2 = new Swiper('.gallery__swiper-container', {
  breakpoints: {
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    521: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 50,
    },
    21: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  loop: false,
  navigation: {
    nextEl: '.gallery__button-next',
    prevEl: '.gallery__button-prev',
    hideOnClick: 'false'
  },

  pagination: {
    el: '.gallery__swiper-pagination',
    type: 'fraction',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const swiper3 = new Swiper('.partners__swiper-container', {
  breakpoints: {
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 1,
      spaceBetween: 50,
    },
    600: {
      slidesPerView: 2,
      slidesPerGroup: 1,
      spaceBetween: 33,
    },
    21: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  loop: true,
  navigation: {
    nextEl: '.partners__button-next',
    prevEl: '.partners__button-prev',
    hideOnClick: 'false'
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const swiper4 = new Swiper('.events__swiper-container', {
  breakpoints: {
    1400: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 50,
    },
    993: {
      slidesPerView: 3,
      slidesPerGroup: 3,
      spaceBetween: 25,
    },
    520: {
      slidesPerView: 2,
      slidesPerGroup: 2,
      spaceBetween: 34,
    },
    21: {
      slidesPerView: 1,
      slidesPerGroup: 1,
    },
  },
  loop: false,
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
    hideOnClick: 'false'
  },

  pagination: {
    el: '.events__swiper-pagination',
    type: 'bullets',
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const element = document.querySelector('.gallery__select');
const choices = new Choices(element, {
  searchEnabled:false,
  itemSelectText:"",
  placeholder: true
});

// maps
ymaps.ready(init);
  function init(){
      var myMap = new ymaps.Map("map", {
          center: [55.75846806898367,37.60108849999989],
          zoom: 15
      });

      var myPlacemark = new ymaps.Placemark([55.75846806898367,37.60108849999989], {}, {
        iconLayout: 'default#image',
        iconImageHref: 'img/location.png',
        iconImageSize: [20, 20],
      });

      myMap.geoObjects.add(myPlacemark);
}

// simplebar
document.querySelectorAll(".dropdown__simplebar").forEach(dropdown => {
  new SimpleBar(dropdown, {
  autoHide: false,
  scrollbarMaxSize: 25,
});
})

// dropdown
const btns = document.querySelectorAll(".menu__btn");
const dropdowns = document.querySelectorAll(".dropdown");
const activeClassdropdowns = "dropdown__active";
const activeClassbtns = "btn__active";

btns.forEach(item => {
  item.addEventListener("click", function() {
    let DropThis = this.parentElement.querySelector(".dropdown");
    dropdowns.forEach(el => {
      if (el != DropThis) {
        el.classList.remove(activeClassdropdowns)
      }
    });
    btns.forEach(el => {
      if (el != this) {
        el.classList.remove(activeClassbtns)
      }
    });
    DropThis.classList.toggle(activeClassdropdowns);
    this.classList.toggle(activeClassbtns);
  })
})

$(".accordion").accordion({
  heightStyle: "content",
  collapsible: true,
  icons: false
});

// tabs
document.querySelectorAll('.tabs-nav__btn').forEach(function (tabsBtn) {

  tabsBtn.addEventListener('click', function (e) {

    const path = e.currentTarget.dataset.path;

    document.querySelectorAll('.tabs-nav__btn').forEach(function (btn) {

      btn.classList.remove('tabs-nav__btn--active')
    });

    e.currentTarget.classList.add('tabs-nav__btn--active');

    document.querySelectorAll('.tabs-item').forEach(function (tabsBtn) {

      tabsBtn.classList.remove('tabs-item--active')
    });

    document.querySelector(`[data-target="${path}"]`).classList.add('tabs-item--active');
  });
});

// tooltips
tippy('#myButton-one', {
  content: 'Инвариант продолжает бессознательный маньеризм, однако само по себе состояние игры всегда амбивалентно.',
  duration: [500, 0],
  theme: 'promo',
  placement: 'top-start',
});

tippy('#myButton-two', {
  content: 'Идея самоценности искусства монотонно выстраивает эйдос.',
  duration: [500, 0],
  theme: 'promo',
});

tippy('#myButton-three', {
  content: ' Целое образа аккумулирует невротический символический метафоризм.',
  duration: [500, 0],
  theme: 'promo',
});

// form
let validation = new JustValidate('#form',{
  errorLabelStyle: {
    color: '#D11616',
  },
  errorFieldCssClass: 'is-invalid'
})

let selector = document.querySelector("#phone");
let im = new Inputmask("+375 (99) 999-99-99");
im.mask(selector)

validation.addField ("#name", [
  {
    rule: 'required',
    errorMessage: 'Вы не ввели имя'
  },
  {
    rule: 'minLength',
    value: 2,
    errorMessage: 'Минимум два символа'
  },
])
.addField ("#phone", [
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length > 0)
    },
    errorMessage: 'Вы не ввели телефон'
  },
  {
    validator: (value) => {
      const phone = selector.inputmask.unmaskedvalue()
      return Boolean(Number(phone) && phone.length === 9)
    },
    errorMessage: 'Введите телефон полностью'
  },
])

// burger
let burger = document.querySelector('.burger');
let menu = document.querySelector('.header__nav');
let menuLinks = menu.querySelectorAll('.nav__link');

burger.addEventListener('click',

  function () {

    burger.classList.toggle('burger--active');

    menu.classList.toggle('header__nav--active');

    document.body.classList.toggle('stop-scroll');
  })

menuLinks.forEach(function (el) {
  el.addEventListener('click', function () {

    burger.classList.remove('burger--active');

    menu.classList.remove('header__nav--active');

    document.body.classList.remove('stop-scroll')

  })
})

// search
let search = document.querySelector('.search__btn-click');
let input = document.querySelector('.header__search-mobile');
let closed = document.querySelector('.search__close');

search.addEventListener('click',

  function () {

    search.classList.toggle('search__btn-click--active');

    input.classList.toggle('header__search-mobile--active');

  })

closed.addEventListener('click',

  function () {

    search.classList.remove('search__btn-click--active');

    input.classList.remove('header__search-mobile--active');

  })
