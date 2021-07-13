// animate on sroll
AOS.init();

// typed js
var titleJumbo = new Typed('.titleJumbo', {
    strings: ['',
        'Front End Dev',
        'UI Designer',
        'Bloger',
        'Muhammad <br> Erlangga'
    ],
    typeSpeed: 70,
    backDelay: 1500,
    backSpeed: 50,
    cursorChar: '/',
});

// scrollbar
const progressBar = document.querySelector('.scrollbar');

let totalHeight = document.documentElement.scrollHeight - document.documentElement.clientHeight;

window.addEventListener('scroll', () => {
  // Calcul scroll progress from top
  let progress = (document.documentElement.scrollTop / totalHeight) * 100;
  // Apply style according to scroll position
  progressBar.style.height = `${progress}%`;
  progressBar.style.opacity = `${progress}%`;
})

const progressBarClick = document.querySelector('.clickScrollbar');

progressBarClick.addEventListener('click', (e) => {
  // Clic position on scrollbar
  let newPageScroll = e.clientY / progressBarClick.offsetHeight * totalHeight;
  
  // Scroll of the page to clic position
  window.scrollTo({
    top: newPageScroll,
    // smooth = light scroll (slow)
    behavior: 'smooth'
  })

  
})


// cursor
let root = document.documentElement;

root.addEventListener("mousemove", e => {
  root.style.setProperty('--mouse-x', e.clientX + "px");
  root.style.setProperty('--mouse-y', e.clientY + "px");
});

// const cursor = document.querySelector('.cursor')
const brandlitle = document.querySelector('.navbar-brand')
const navbar = document.querySelectorAll('.navbar-nav li')
const a = document.getElementsByTagName('a')
const h1 = document.getElementsByTagName('h1')


for (let i = 0; i < navbar.length; i++) {
    $([brandlitle, navbar[i]]).mouseenter(function () {
        $('.cursor').addClass('big');
    })
    $([brandlitle, navbar[i]]).mouseout(function () {
        $('.cursor').removeClass('big');
    })
}

for (let k = 0; k < a.length; k++) {
    $(a[k]).mouseenter(function () {
        $('.cursor').addClass('big');
    })
    $(a[k]).mouseout(function () {
        $('.cursor').removeClass('big');
    })
}

for (let l = 0; l < h1.length; l++) {
    $(h1[l]).mouseenter(function () {
        $('.cursor').addClass('big');
    })
    $(h1[l]).mouseout(function () {
        $('.cursor').removeClass('big');
    })
}

// scroll
$(window).scroll( () => { 
    const wScroll = $(this).scrollTop();


    if (wScroll > 2028) {
        $('.svgService').addClass('svgappend');
    }
});

// clock
$(document).ready(function () {

    function second_passed() {
      $('.clock').removeClass('is-off');
    }
    setTimeout(second_passed, 2000)
  
    $('.switcher').on('click', function(e) {
      e.preventDefault();
      $('.screen').toggleClass('glitch');
    });
  
  
    var newDate = new Date();
    newDate.setDate(newDate.getDate());
  
    setInterval( function() {
  
      var hours    = new Date().getHours();
      var seconds  = new Date().getSeconds();
      var minutes  = new Date().getMinutes();
  
      var realTime = ( hours < 10 ? '0' : '' ) + hours + ' : ' + ( minutes < 10 ? '0' : '' ) + minutes + ' : ' + ( seconds < 10 ? '0' : '' ) + seconds
  
      $('.time').html(realTime);
      $('.time').attr('data-time', realTime);
  
    }, 1000);
  
  });






