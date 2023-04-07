// function calculateDaysBetweenDates(begin, end) {



  /* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
  // particlesJS.load('particles-js', 'particles.json', function () {
  //   console.log('callback - particles.js config loaded');
  // });


  // arctext
  $(function () {
    $('.eye-text').arctext({
      radius: 100,
      dir: -1,
    });
  });

  $(function () {
    $('.eye-text.toggleBox-jp').arctext({
      radius: 5,
      dir: 1,
    });
  });

  //cursor
  $(function () {
    var cursor = $('#cursor');
    var stalker = $('#stalker');

    $(document).on('mousemove', function (e) {
      var x = e.clientX;
      var y = e.clientY;
      cursor.css({
        opacity: '1',
        top: y + 'px',
        left: x + 'px',
      });
     
      setTimeout(function () {
        stalker.css({
          opacity: '.4',
          top: y + 'px',
          left: x + 'px',
        });
      }, 140); 
    });
  });

  // navbarの色を変える
  // https://snownotes.org/how-to-change-header-color-when-scroll-page/#javascript
  $(window).on('scroll', function () {
    if ($(this).scrollTop() > 600) {
      $('.nav-link i').addClass('change-color');
      $('#translate').addClass('change-color');
      $('.navbar-brand h2').addClass('change-color');
    } else {
      $('.nav-link i').removeClass('change-color');
      $('#translate').removeClass('change-color');

      $('.navbar-brand h2').removeClass('change-color');
    }
  });




  // https://flex-box.net/js-scrollin/
  // こっちの方がversatile
  let fadeInTarget = document.querySelectorAll('.fadein');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fadeInTarget.length; i++) {
      const rect = fadeInTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      const bounce = document.querySelector('.scrimba');
      // setTimeout(function(){
      // 	bounce.classList.add('bounce')
      // },200);
      if (scroll > offset - windowHeight + 200) {
        fadeInTarget[i].classList.add('scrollin');
      }
    }
  });

  // ReTribe16 shrink

  let shrinkTarget = document.querySelectorAll('.shrink');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < shrinkTarget.length; i++) {
      const rect = shrinkTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 100) {
        shrinkTarget[i].classList.add('shrink-animation');
      }
    }
  });

  let fromBottomTarget = document.querySelectorAll('.from-bottom');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < fromBottomTarget.length; i++) {
      const rect = fromBottomTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 100) {
        fromBottomTarget[i].classList.add('from-bottom-animation');
      }
    }
  });

  let scrimbaTarget = document.querySelectorAll('.scrimba');
  window.addEventListener('scroll', () => {
    for (let i = 0; i < scrimbaTarget.length; i++) {
      const rect = scrimbaTarget[i].getBoundingClientRect().top;
      const scroll = window.pageYOffset || document.documentElement.scrollTop;
      const offset = rect + scroll;
      const windowHeight = window.innerHeight; // 現在のブラウザの高さ
      if (scroll > offset - windowHeight + 100) {
        scrimbaTarget[i].classList.add('bounce');
      }
    }
  });

  // 言語切り替え

  // 初期に見えなくする
  $('.toggleBox-jp').addClass('display-none');

  let nameLabel = document.getElementById('nameLabel');
  const nameClasses = nameLabel.classList;

  let emailLabel = document.getElementById('emailLabel');
  const emailClasses = emailLabel.classList;

  $('#translate').click(function () {
    // $('.toggleBox').toggleClass('display-none');
    // if($('.english')) {

    // $('.toggleBox').toggleClass('display-none')
    $('.toggleBox-en').toggleClass('display-none');
    $('.toggleBox-jp').toggleClass('display-none');
    // }

    // if(nameLabel.innerHTML = '氏名') {
    // 	nameLabel.innerHTML = 'name'
    // } else if (nameLabel.innerHTML = 'name') {
    // 	nameLabel.innerHTML = '氏名'
    // }

    const nameResult = nameClasses.toggle('name');
    nameLabel.textContent = `${nameResult ? '氏名' : 'name'}`;

    const emailResult = emailClasses.toggle('email');
    emailLabel.textContent = `${emailResult ? 'メール' : 'email'}`;
  });



  function trueOrFalse() {
    const text = document.getElementsByClassName('js-test');

    // https://programming.sincoston.com/random-number/
    // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
    // 2から5までのランダムな数字の生成
    var randomNum = Math.floor(Math.random() * (5 + 1 - 2)) + 2;

    // 画面に表示
    // $('#disp').text(randomNum);

    if (randomNum >= 3) {
      document.getElementById('disp').textContent = 'true';
    } else {
      document.getElementById('disp').textContent = 'flase';
    }

    // text.textContent(Math.random());

    // console.log(Math.random());
  }

  // https://into-the-program.com/javascript-loader/
  window.onload = () => {
    const loader = document.getElementById('loading');
    loader.classList.add('loaded');
  };

  // // rotate()
  // document.querySelector('.rotate').animate(
  // 	[
  // 		{ transform: 'rotate(0deg)' },
  // 		{ transform: 'rotate(360deg)' }
  // 	],
  // 	{
  // 		// 回転の速さ
  // 		duration: 5000,
  // 		easing: 'linear',
  // 		iterations: Infinity
  // 	}
  // );







//   skills
// https://gxy-life.com/2PC/PC/PC20210803.html
// window.addEventListener("scroll", function () {
// 	const topBtn = document.getElementById("topButton");
// 	// const productsBoxItem = this.document.querySelector('.products-box-item')
// 	const scroll = window.pageYOffset;
// 	if (scroll > 400) { // ➃
// 	  // topBtn.style.visibility = 'visible';
// 	  topBtn.classList.add("appear");
  
// 	} 
// 	else{ topBtn.classList.remove("appear");}
  
  
// 	// if (scroll > 2000) {
// 	//   productsBoxItem.classList.add('fadeUp')
// 	// }
  
  
  
// 	let productsBoxItems = this.document.querySelectorAll('.products-box-item')
  
//   for(let i=0; i< productsBoxItems.length; i++) {
// 	if (scroll > 1450) {
// 	  productsBoxItems[i].classList.add('fadeUp')
// 	  productsBoxItems[i].style.animationDelay = i * 0.3 + 's'
// 	} else {
// 	  productsBoxItems[i].classList.remove('fadeUp')
// 	}
//   }
  
  
	
//   });



// 🌸
// const items = document.querySelectorAll('.skills__flex-item');
// const windowHeight = window.innerHeight;

// function fadeIn() {
//   items.forEach((item, index) => {
//     const itemTop = item.getBoundingClientRect().top;
//     if (itemTop < windowHeight) {
//       item.style.animationDelay = `${index * 0.2}s`;
//       item.classList.add('fade-in');
//     }
//   });
// }

// window.addEventListener('scroll', fadeIn);
// window.addEventListener('load', fadeIn);



// ReTribe16
// https://gxy-life.com/2PC/PC/PC20210803.html
window.addEventListener("scroll", function () {


  const scroll = window.pageYOffset;

  const skillsFlexItems = this.document.querySelectorAll('.skills__flex-item')

for(let i=0; i< skillsFlexItems.length; i++) {
  if (scroll > 500) {
    skillsFlexItems[i].classList.add('fadeUp')
    skillsFlexItems[i].style.animationDelay = i * 0.3 + 's'
  } 
  // else {
  //   skillsFlexItems[i].classList.remove('fadeUp')
  // }
}



const heroBoxTitles = this.document.querySelectorAll('.hero__box-title')

for(let i=0; i< heroBoxTitles.length; i++) {
  if (scroll > 0) {
    heroBoxTitles[i].classList.add('fadeUp')
    heroBoxTitles[i].style.animationDelay = i * 0.3 + 's'
  } 
  // else {
  //   heroBoxTitles[i].classList.remove('fadeUp')
  // }
}
  
});




// }
