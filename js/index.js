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
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
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
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,
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
  slidesPerView: 3,
  // slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,
  navigation: {
    nextEl: '.events__button-next',
    prevEl: '.events__button-prev',
    hideOnClick: 'false'
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
  /* чтобы изначально ползунок был виден */
  autoHide: false,
  /* с помощью этого значения вы можете управлять высотой ползунка*/
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
