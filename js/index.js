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
    nextEl: '.swiper-button-next-2',
    prevEl: '.swiper-button-prev-2',
    hideOnClick: 'false'
  },

  pagination: {
    el: '.swiper-pagination-2',
    type: 'fraction',
    clickable: true,
  },

  a11y: {
    paginationBulletMessage: "Перейти к слайду {{index}}"
  },
});

const swiper3 = new Swiper('.partners__swiper-container', {
  slidesPerView: 3,
  // slidesPerGroup: 3,
  spaceBetween: 50,
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

const element = document.querySelector('.gallery__select');
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

