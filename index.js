// swiper
const swiper = new Swiper('.swiper-container-1', {
  speed: 2000,
  slidesPerView: 1,
  loop: true,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
  },

  autoplay: {
    delay: 5000,
  },

  effect: 'fade',
  fadeEffect: {
    crossFade: true
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const swiper2 = new Swiper('.swiper-container-2', {
  slidesPerView: 3,
  slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: 'false'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const swiper3 = new Swiper('.swiper-container-3', {
  slidesPerView: 3,
  // slidesPerGroup: 3,
  spaceBetween: 50,
  loop: false,
  navigation: {
    nextEl: '.swiper-button-next',
    prevEl: '.swiper-button-prev',
    hideOnClick: 'false'
  },

  pagination: {
    el: '.swiper-pagination',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const element = document.querySelector('select');
const choices = new Choices(element, {
  searchEnabled:false,
  itemSelectText:"",
  placeholder: true
});

ymaps.ready(init);
    function init(){
        var myMap = new ymaps.Map("map", {
            center: [48.872185073737896,2.354223999999991],
            zoom: 15
        });

        var myPlacemark = new ymaps.Placemark([48.872185073737896,2.354223999999991], {}, {
          iconLayout: 'default#image',
          iconImageHref: 'location.svg',
          iconImageSize: [28, 40],
        });

        myMap.geoObjects.add(myPlacemark);
    }
