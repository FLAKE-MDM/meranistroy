// all
$('.toggler').click(function(e){
  e.preventDefault();
  $(this).toggleClass('active');
});

// header
$(window).scroll(function() {
  if ($(this).scrollTop() > 1) {
      $('.header_transparent').addClass('fixed');
  } else {
      $('.header_transparent').removeClass('fixed');
  }
});


// pane
$('.pane-open').click(function(e){
  e.preventDefault();
  $('body').addClass('overflow-none');
  let paneId = $($(this)).attr('href');
  let currentPane = document.querySelector(paneId)
  if(!currentPane.classList.contains('show')){
    $('.pane').removeClass('show');
    $(currentPane).addClass('show');
  } else{
    $(currentPane).removeClass('show');
    $('body').removeClass('overflow-none');
  }
})

// dropdown
$('.dropdown-toggle').click(function(e){
  e.preventDefault();
  $(this).parent().toggleClass('open');
  $(document).mouseup(function(e){
    let item = $(".dropdown.open");
    if (item.has(e.target).length === 0){
        item.removeClass('open');
    }
  })
});

// fake-select
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').removeClass('open');
});

// collapse
$(".collapse-link").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(300);
  } else{
    $(this.getAttribute("href")).slideDown(300);
  }

  if($(this).hasClass("btn-menu")){
    $('.header').toggleClass("header_bg");
  }

  $(this).toggleClass("active");
});

// menu
$(".btn-menu").click(function(e){
  e.preventDefault();

  if($(this).hasClass("active")){
    $(this.getAttribute("href")).slideUp(300);
    $('.header').removeClass("header_bg");
    $('body').removeClass("overflow-none");
  } else{
    $(this.getAttribute("href")).slideDown(300);
    $('.header').addClass("header_bg");
    $('body').addClass("overflow-none");
  }

  $(this).toggleClass("active");
});

// tabs
$('.tab-link-js').click(function(e){
  e.preventDefault();
  $(this).parents(".tab-nav-js").find('.tab-link-js').removeClass('active');
  $(this).addClass('active');
  $(this).closest('.tab-section').find('.tab-pane').removeClass('active');
  $(this.getAttribute("href")).addClass('active');
});

// modal
$(".modal-open").click(function(e){
  e.preventDefault();
  $(".modal").removeClass("show");
  $(this.getAttribute("href")).addClass("show");
  $('body').removeClass('modal-open');
  $('body').addClass('modal-open');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('modal-open');
      $('.login__mobile-link').removeClass('active');
    }
  }
  for(let elem of modalsGroup){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('modal-open');
      $('.login__mobile-link').removeClass('active');
    }
  }
});

// checkResolution
function checkResolution() {
  if (window.innerWidth < 768) {
    new Swiper(".reviews-slider", {
      loop: true,
      spaceBetween: 16,
      slidesPerView: 1,
    });
  }
}

window.addEventListener('load', checkResolution);
window.addEventListener('resize', checkResolution);

// video
$('.video-block').each(function() {
  let video = $(this).find('.embed-responsive-item')[0];
  let playBtn = $(this).find(".play-btn");

  playBtn.on('click', function(e) {
    e.preventDefault();
    $(this).hide();
    video.play();
    video.controls = true;
  });

  video.addEventListener('click', function() {
    if (!video.paused) {
      video.pause();
      playBtn.show();
      video.controls = false;
    }
  });

  video.onended = function() {
    playBtn.show();
    video.controls = false;
  };
});

new Swiper(".image-slider", {
  loop: true,
  slidesPerView: 1,
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
  pagination: {
    el: '.swiper-pagination',
    type: 'fraction',
    formatFractionCurrent: function (number) {
        return ('0' + number).slice(-2);
    },
    formatFractionTotal: function (number) {
        return ('0' + number).slice(-2);
    },
    renderFraction: function (currentClass, totalClass) {
        return '<span class="' + currentClass + '"></span>' +
               '<span class="separator">/</span>' +
               '<span class="' + totalClass + '"></span>';
    }
  },
});

// mask
$(document).ready(function(){
  $('.mask').inputmask("+7 999 999 999");
});


// new Swiper(".project-slider", {
//   slidesPerView: 1,
//   spaceBetween: 20,
//   loop: true,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//     },
//   },
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
//   navigation: {
//     nextEl: ".review-next",
//     prevEl: ".review-prev",
//   },
// });


// new Swiper(".preview-slider", {
//   slidesPerView: 1,
//   loop: true,
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// new Swiper(".product-slider", {
//   slidesPerView: 1,
//   spaceBetween: 16,
//   breakpoints: {
//     768: {
//       slidesPerView: 2,
//       spaceBetween: 30,
//     },
//     1200: {
//       slidesPerView: 3,
//       spaceBetween: 30,
//     },
//   },
// });

// window.onscroll = function checkScroll() {
//   if (document.documentElement.scrollTop < 1){
//     $('.header__info').show(300);
//     $('.header').removeClass('header_fixed');
//   } else {
//     $('.header__info').hide(300);
//     $('.header').addClass('header_fixed');
//   }
// };

// new Swiper(".catalogue-slider", {
//   slidesPerView: 2,
//   spaceBetween: 11,
//   breakpoints: {
//     768: {
//       slidesPerView: 3,
//       spaceBetween: 10,
//     },
//     1200: {
//       slidesPerView: 4,
//       spaceBetween: 10,
//     },
//     1400: {
//       slidesPerView: 5,
//       spaceBetween: 24,
//     },
//   },
// });

// // pane
// $('.pane-open').click(function(e){
//   e.preventDefault();
//   $('body').addClass('overflow-none');
//   $('.pane').removeClass('show');
//   $($(this).attr('href')).addClass('show');
//   if($(this).attr('href') == '#nav'){
//     $('.pane-close__link-nav').addClass('show');
//   } else{
//     $('.pane-close__link').addClass('show');
//   }
// })
// $('.pane-close').click(function(e){
//   e.preventDefault();
//   $('body').removeClass('overflow-none');
//   $('.pane').removeClass('show');
//   $('.pane-close__link, .pane-close__link-nav').removeClass('show');
// });

// let loginForm = document.querySelector("#form-phone");

// loginForm.addEventListener("submit", function(e){
//   e.preventDefault();

//   let phone = document.querySelector("#phone");
//   let errorMess = document.querySelector("#phoneError");

//   if(phone.value == ""){
//     $(errorMess).removeClass("collapse");
//     errorMess.textContent = "Заполните поле"
//     $(phone).addClass("has-error");
//   } else if((phone.value.length != 10)){
//     $(errorMess).removeClass("collapse");
//     errorMess.textContent = "Неверный формат"
//     $(phone).addClass("has-error");
//     console.log();
//   } else{
//     $('.pane').removeClass('show');
//     $('body').addClass('overflow-none');
//     $('.pane').removeClass('show');
//     $("#code-pane").addClass('show');
//   }
// })

// let codeGroupInputs = document.querySelectorAll("#code-group input")

// for(let i = 0; i < codeGroupInputs.length; i++){
//   codeGroupInputs[i].addEventListener("input", function(){
//     if(codeGroupInputs[i].value != ""){
//       codeGroupInputs[i+1].focus()
//     }
//   })
// }

// $(".pass-view").click(function(e){
//   e.preventDefault();
//   let inputPass = document.querySelector("#pass");;
//   if (inputPass.type == "password"){
//     inputPass.type = "text"
//   } else{
//     inputPass.type = "password"
//   }
// })


// // catalogue
// $( function() {
//   $( "#price-range" ).slider({
//     range: true,
//     min: 2900,
//     max: 60000,
//     values: [ 2900, 33900 ],
//     slide: function( event, ui ) {
//       $( "#price-min" ).val(ui.values[ 0 ] );
//       $( "#price-max" ).val(ui.values[ 1 ] );
//     }
//   });
//   $( "#price-min" ).val($( "#price-range" ).slider( "values", 0 ));
//     $( "#price-max" ).val($( "#price-range" ).slider( "values", 1 ) );
// });
// $('.tag-del').click(function(){
//   $(this).parent().remove()
// })

// // item
// new Swiper(".product-item-slider", {
//   loop: true,
//   slidesPerView: 1,
//   thumbs: {
//     swiper: {
//       el: ".product-item-thumbs",
//       slidesPerView: 4,
//       spaceBetween: 16,
//       breakpoints: {
//         "@0.00": {
//           slidesPerView: 4,
//         },
//         992: {
//           slidesPerView: 5,
//           spaceBetween: 16,
//           direction: "vertical",
//         },
//         1200: {
//           slidesPerView: 6,
//           spaceBetween: 16,
//           direction: "vertical",
//         },
//       },
//     },
//   },
// });

// if(window.innerWidth > 991){
//   $(function(){
//     var topPos = $('.floating').offset().top;
//      $(window).scroll(function() {
//      var top = $(document).scrollTop(),
//          pip = $('.stoper').offset().top,
//          height = $('.floating').outerHeight();
//      if (top > topPos && top < pip - height) {$('.floating').addClass('fixed').removeAttr("style");}
//      else if (top > pip - height) {$('.floating').removeClass('fixed').css({'position':'absolute','bottom':'0'});}
//      else {$('.floating').removeClass('fixed');}
//      });
//    });
// }

// new Swiper(".tab-nav-slider", {
//   slidesPerView: "auto",
//   spaceBetween: 47,
//   freeMode: true,
// });

// // order
// $('.radio-list__item').click(function(){
//   $(this).parent().find('.radio-list__item').removeClass('active');
//   $(this).addClass('active');
// })

// // // input number
// jQuery(($) => {
//   $(document).on('click', '.input-number__minus', function () {
//       let total = $(this).next();
//       if (total.val() > 1) {
//           total.val(+total.val() - 1);
//       } else{
//         $(this).parents().find('.btn-add').removeClass('collapse');
//         $(this).parents('.fake-btn').addClass('collapse');
//       }
//   });
//   $(document).on('click', '.input-number__plus', function () {
//       let total = $(this).prev();
//       total.val(+total.val() + 1);
//   });
//   document.querySelectorAll('.input-number__input').forEach(function (el) {
//       el.addEventListener('input', function () {
//           this.value = this.value.replace(/[^\d]/g, '');
//       });
//   });
// });

// // certificates
// new Swiper(".certificates-slider", {
//   pagination: {
//     el: ".swiper-pagination",
//     clickable: true,
//   },
// });

// new Swiper(".tab-nav-slider__margin-md", {
//   slidesPerView: "auto",
//   spaceBetween: 24,
//   freeMode: true,
//   breakpoints: {
//     992: {
//       spaceBetween: 47,
//     },
//   },
// });

// // calculator
// // fake-select
// $('.fake-select__item').click(function(){
//   $(this).parents(".fake-select").find('.fake-select__item').removeClass('fake-select__item_active active');
//   $(this).addClass('fake-select__item_active');
//   $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
//   $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
// });

// $( function() {
//   $( "#weight-range" ).slider({
//     range: "max",
//     min: 1,
//     max: 200,
//     value: 89,
//     slide: function( event, ui ) {
//       $( "#weight-range-value" ).val( ui.value );
//     }
//   });
//   $( "#weight-range-value" ).val( $( "#weight-range" ).slider( "value" ) );
// } );

// $(".tab-nav-btn__label").click(function(){
//   $(this).parents(".tab-nav-btn").find(".tab-nav-btn__label").removeClass("active");
//   $(this).addClass("active");
// })

// // profile
// // // datepicker
// $( "#birthday" ).datepicker( $.datepicker.regional[ "ru" ] );
// $( "#birthday" ).datepicker( "option", "dateFormat", "d MM y" );

// $("#add-address").click(function(e){
//   e.preventDefault();
//   let addressGroup = document.querySelector("#address-group");

//   addressGroup.insertAdjacentHTML("beforeend", '<div class="form-group_margin-sm address-item pos-rel"><input type="email" class="form-control form-control_lg"  placeholder="Введите адрес"></div>')
// })

// $(".address-item__link").click(function(e){
//   e.preventDefault();
//   $(this).parent().find(".form-control").removeAttr("disabled")
//   this.style.display = "none"
// })

// $(".history-item__link").click(function(e){
//   e.preventDefault();
//   $(this).parent().toggleClass("active")
// })

