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
  keyboard: {
    enabled: true,
    onlyInViewport: false,
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