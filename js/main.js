const swiper = new Swiper('.swiper-container', {
  // Optional parameters
  loop: true,

  // If we need pagination

  // Navigation arrows
  navigation: {
    nextEl: '.slider-button--next',
    prevEl: '.slider-button--prev',
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