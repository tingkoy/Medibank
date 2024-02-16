// scss
import './styles/main.scss';
import './styles/animation.scss';
import './styles/perPage.scss'
// img
import body from './assets/img/body.png';
import favicon from './assets/img/favicon.png';

import $ from 'jquery';
import moment from 'moment/moment';
// page
import topOne from './pages/top_One'
import topTwo from './pages/top_Two'
import topThree from './pages/top_Three';
import botOne from './pages/bot_One';
import botTwo from './pages/bot_Two';
import botThree from './pages/bot_Three';
import boxHandler from './pages/boxHandler';

// guide
import AQ from './assets/guides/All_quadrants.png'
import AL from './assets/guides/Attract_loop.png'


(() => {
  var targetAttract = $('.attract');
  let timeoutID;
  var winW, winH;
  // hr * min * sec * milli
  let attractLoop_timeout = 2 * 1000;

  // screen event
  function resizeCheck() {
    localStorage.clear();
    winW = window.innerWidth;
    winH = window.innerHeight;
    localStorage.win_width = winW;
    localStorage.win_Height = winH;
  }
  resizeCheck();
  $(window).on("resize", resizeCheck)


  // favicon
  $('.fvicn').attr('href', favicon);

  // body imag
  $('.bodyHolder').attr('src', body)

  // pages
  $('.wrap_top_one').append(topOne)
  $('.wrap_top_two').append(topTwo)
  $('.wrap_top_three').append(topThree)
  $('.wrap_bot_one').append(botOne)
  $('.wrap_bot_two').append(botTwo)
  $('.wrap_bot_three').append(botThree)
  $('.boxes').append(boxHandler)

  $('.quad, .wrap_top_one, .wrap_top_two, .wrap_top_three, .wrap_bot_one, .wrap_bot_two, .wrap_bot_three').css('display', 'none')


  // animations
  function bodyAnimToSmall_4k() {
    $('.bodyHandler').animate({
      'position': 'absolute',
      'top': '4em',
      'right': '8em',
      'z-index': '11',
    }, 300);
  }
  function bodyAnimImgToSmall_4k() {
    $('.bodyHandler img').animate({
      'position': 'relative',
      'height': '128em',
      'width': 'auto',
    }, 300)
  }

  function bodyAnimToLarge_4k() {
    $('.bodyHandler').animate({
      'position': 'absolute',
      'top': '-44em',
      'right': '8em',
      'z-index': '11',
    }, 300);
  }
  function bodyAnimImgToLarge_4k() {
    $('.bodyHandler img').animate({
      'position': 'relative',
      'height': '274em',
      'width': 'auto',
    }, 300)
  }
  // ===
  function bodyAnimToSmall() {
    $('.bodyHandler').animate({
      'position': 'absolute',
      'top': '2em',
      'right': '4em',
      'z-index': '11',
    }, 300);
  }
  function bodyAnimImgToSmall() {
    $('.bodyHandler img').animate({
      'position': 'relative',
      'height': '64em',
      'width': 'auto',
    }, 300)
  }

  function bodyAnimToLarge() {
    $('.bodyHandler').animate({
      'position': 'absolute',
      'top': '-22em',
      'right': '4em',
      'z-index': '11',
    }, 300);
  }
  function bodyAnimImgToLarge() {
    $('.bodyHandler img').animate({
      'position': 'relative',
      'height': '138em',
      'width': 'auto',
    }, 300)
  }

  // attract loop
  $('.btn').on('click', disableAttract)
  $('.container > :not(.attract)').on('click', checker)
  function disableAttract() {
    if (localStorage.win_width == '3840') {
      bodyAnimToSmall_4k();
      bodyAnimImgToSmall_4k();
    } else if (localStorage.win_width == '1920') {
      bodyAnimToSmall();
      bodyAnimImgToSmall();
    }
    $('.attract').fadeOut(300)
    $('.quad').fadeIn(300)
    checker();
  }

  // checker
  function checker() {
    clearTimeout(timeoutID)
    timeoutID = setTimeout(() => {
      console.log('timeout')
      if (localStorage.win_width == '3840') {
        bodyAnimToLarge_4k();
        bodyAnimImgToLarge_4k();
      } else if (localStorage.win_width == '1920') {
        bodyAnimToLarge();
        bodyAnimImgToLarge();
      }
      $('.bodyHandler').fadeIn(300)
      $('.attract').fadeIn(300)
      $('.quad').fadeOut(300)
      $('.quad, .wrap_top_one,.wrap_top_two,.wrap_top_three,.wrap_bot_one,.wrap_bot_two,.wrap_bot_three').fadeOut(300)
    }, attractLoop_timeout)
  }

  // quad
  $('.btn_a').on('click', hideQuad)
  function hideQuad() {
    $(this).parent().parent().fadeOut(300)
    $('.bodyHandler').fadeOut(300)
    var targClass = $(this).attr('class').split(' ');
    $('.wrap_' + (targClass[1])).fadeIn(300)
  }

  // back to quad
  $('.btn_back').on('click', backToQuad)
  function backToQuad() {
    $(this).parent().parent().parent().fadeOut(300)
    $('.quad').fadeIn(300)
    $('.bodyHandler').fadeIn(300)
  }

  // guide embed
  // $('.gg').attr('src', AQ)
  $('.GoGa').attr('src', AL)

})()