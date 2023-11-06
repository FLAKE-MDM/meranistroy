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
  $('body').removeClass('overflow-none');
  $('body').addClass('overflow-none');
})
$(".modal").mousedown(function(e){
  let closeLinks = document.querySelectorAll(".modal-close");
  let modalsGroup = document.querySelectorAll(".modal");

  for(let elem of closeLinks){
    if(e.target == elem){
      $(this).removeClass("show");
      $('body').removeClass('overflow-none');
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

// filter
$('.fake-select__item').click(function(){
  $(this).parents(".fake-select").find('.fake-select__item').removeClass('active');
  $(this).addClass('active');
  $(this).parents('.fake-select').find('.fake-select__value').html(this.innerHTML)
  $(this).parents('.fake-select').find('.fake-select__link').addClass('active');
});

$('.sort__item').click(function(e){
  e.preventDefault();
  $(this).parents(".sort").find('.sort__item').removeClass('active');
  $(this).addClass('active');
});


// product
new Swiper(".product-slider", {
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
  thumbs: {
    swiper: {
      el: ".product-thumbs-slider",
      slidesPerView: 3,
      spaceBetween: 4,
      breakpoints: {
        992: {
          slidesPerView: 4,
          spaceBetween: 12,
          direction: "vertical",
        },
        1200: {
          slidesPerView: 5,
          spaceBetween: 12,
          direction: "vertical",
        },
        1600: {
          slidesPerView: 6,
          spaceBetween: 12,
          direction: "vertical",
        },
      },
    },
  },
});

Fancybox.bind("[data-fancybox]", {});

new Swiper(".implementation-slider", {
  loop: true,
  slidesPerView: 1,
  spaceBetween: 8,
  navigation: {
    nextEl: ".implementation-next",
    prevEl: ".implementation-prev",
  },
  breakpoints: {
    576: {
      slidesPerView: 2,
      spaceBetween: 12,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 12,
    },
  },
});


