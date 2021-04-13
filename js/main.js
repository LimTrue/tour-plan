$(document).ready(function() {
const hotelSlider = new Swiper('.hotel-slider', {
    loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.hotel-slider__button--next',
    prevEl: '.hotel-slider__button--prev',
  },
  keyboard: {
    enabled: true,
    onlyInViewport: false,
  },

});

const reviewsSlider = new Swiper('.reviews-slider', {
    loop: true,
  // Navigation arrows
  navigation: {
    nextEl: '.reviews-slider__button--next',
    prevEl: '.reviews-slider__button--prev',
  },
  

});
ymaps.ready(init);

function init() {
    var myMap = new ymaps.Map("map", {
            center: [7.838166, 98.298806],
            zoom: 14
        }, {
            searchControlProvider: 'yandex#search'
        }),
        myGeoObject = new ymaps.GeoObject({
            geometry: {
                type: "Point",
                coordinates: [7.838166, 98.298806]
            },
            properties: {
                iconContent: 'Grand Hilton Hotel',
                hintContent: 'You are welcome'
            }
        }, {
            preset: 'islands#blackStretchyIcon',
            draggable: true
        })

    myMap.geoObjects
        .add(myGeoObject)
}

var menuButton = document.querySelector(".menu-button");
menuButton.addEventListener("click", function () {
  document.querySelector(".navbar-bottom")
  .classList.toggle("navbar-bottom__visible");
});

  var modalButton = $('[data-toggle=modal]');
  var closeModalButton = $('.modal__close');
  // var keyPress = $('.modal__close');
  modalButton.on('click', openModal);
  closeModalButton.on('click', closeModal);
    function openModal () {
      var targetModal = $(this).attr('data-href');
      $(targetModal).find('.modal__overlay').addClass('modal__overlay--visible');
      $(targetModal).find('.modal__dialog').addClass('modal__dialog--visible');
    }find

    function closeModal (event) {
      event.preventDefault();
      var modalOverlay = $('.modal__overlay');
      var modalDialog = $('.modal__dialog');
      modalOverlay.removeClass('modal__overlay--visible')
      modalDialog.removeClass('modal__dialog--visible')
    }

    $(document).on('keydown', function(event) {
        if (event.key == "Escape") {
          event.preventDefault();
          var modalOverlay = $('.modal__overlay');
          var modalDialog = $('.modal__dialog');
          modalOverlay.removeClass('modal__overlay--visible')
          modalDialog.removeClass('modal__dialog--visible')
        }
  });
// обработка форм
$('.form').each(function(){
  $(this).validate({
  errorClass: "invalid",
  messages: {
    name: {
      required: "Укажите имя",
      minlength: "Имя должно быть не короче 2 букв"
    },
    email: {
      required: "We need your email address to contact you",
      email: "Your email address must be in the format of name@domain.com"
    },
      phone: {
        required: "Телефон обязателен",
    },
  }
});
})
  $('.modal__input-phone').mask('+7(999)999-99-99');
});