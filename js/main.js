// $(document).ready(function () {
//     $(".slider").slick({
//         arrows: true,
//         dots: false,
//         slidesToShow: 3,
//         autoplay: false,
//         speed: 900,
//         autoplaySpeed: 700,
//         responsive: [{
//                 breakpoint: 768,
//                 settings: {
//                     slidesToShow: 2
//                 }
//             },
//             {
//                 breakpoint: 550,
//                 settings: {
//                     slidesToShow: 1
//                 }
//             }
//         ]
//     });
// });




$(document).ready(function () {
  $(".reviews__generalList").slick({
    arrows: true,
    slidesToShow: 4, //сколько слайдов показывать в карусели
    slidesToScroll: 2, // сколько слайдов прокручивать за раз
    speed: 2000,
  });
});