// function calculateDaysBetweenDates(begin, end) {

/* particlesJS.load(@dom-id, @path-json, @callback (optional)); */
// particlesJS.load('particles-js', 'particles.json', function () {
//   console.log('callback - particles.js config loaded');
// });

// arctext
// $(function () {
//   $('.eye-text').arctext({
//     radius: 100,
//     dir: -1,
//   });
// });

// $(function () {
//   $('.eye-text.toggleBox-jp').arctext({
//     radius: 5,
//     dir: 1,
//   });
// });

// loading
// https://into-the-program.com/javascript-loader/
window.onload = () => {
  const loader = document.getElementById('loading');
  loader.classList.add('loaded');
};

// // 言語切り替え

// // 自作
// const toggleBoxesEn = document.querySelectorAll('.toggleBox-en');
// const toggleBoxesJp = document.querySelectorAll('.toggleBox-jp');

// // 最初日本語は見えない
// toggleBoxesJp.forEach((toggleBox) => toggleBox.classList.add('display-none'));



//   // 🌸
//   const startDate = new Date('2022-03-01'); // 開始日をYYYY-MM-DD形式で設定
//   const today = new Date(); // 現在の日付を取得
  
//   const diffTime = Math.abs(today - startDate);
//   const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // 月数を計算
  
//  const timeElapsed =  document.querySelectorAll('.time-elapsed')
//  timeElapsed.forEach((time) => time.innerHTML = diffMonths.toFixed(1) + ' months');
// //  .innerHTML = diffMonths.toFixed(1)  + 'months';





// document.querySelector('#translate').addEventListener('click', function () {

//   toggleBoxesEn.forEach(toggleBox => toggleBox.classList.toggle('display-none'));
//   toggleBoxesJp.forEach(toggleBox => toggleBox.classList.toggle('display-none'));

//   // --------------------------------




//   // --------------------------------
//   const nameLabel = document.getElementById('nameLabel');
//   const nameClasses = nameLabel.classList;

//   const emailLabel = document.getElementById('emailLabel');
//   const emailClasses = emailLabel.classList;

//   const nameResult = nameClasses.toggle('name');
//   nameLabel.textContent = nameResult ? '氏名' : 'name';

//   const emailResult = emailClasses.toggle('email');
//   emailLabel.textContent = emailResult ? 'メール' : 'email';



//   const diffTime = Math.abs(today - startDate);
//   const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // 月数を計算
  
//   timeElapsed.forEach((time) => time.innerHTML =
//     diffMonths.toFixed(1) + (toggleBoxesJp[0].classList.contains('display-none') ? ' months' : 'ヶ月'))

// });  


// // 🌸🌸日付が同じ😭
// const toggleBoxesEn = document.querySelectorAll('.toggleBox-en');
// const toggleBoxesJp = document.querySelectorAll('.toggleBox-jp');

// // 最初日本語は見えない
// toggleBoxesJp.forEach((toggleBox) => toggleBox.classList.add('display-none'));

// // 🌸
// const startDate = new Date('2022-03-01'); // 開始日をYYYY-MM-DD形式で設定
// const today = new Date(); // 現在の日付を取得

// const diffTime = Math.abs(today - startDate);
// const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // 月数を計算

// const timeElapsed = document.querySelectorAll('.time-elapsed')
// timeElapsed.forEach((time) => time.innerHTML = diffMonths.toFixed(1) + ' months');



// document.querySelector('#translate').addEventListener('click', function () {

// toggleBoxesEn.forEach(toggleBox => toggleBox.classList.toggle('display-none'));
// toggleBoxesJp.forEach(toggleBox => toggleBox.classList.toggle('display-none'));

// const nameLabel = document.getElementById('nameLabel');
// const nameClasses = nameLabel.classList;

// const emailLabel = document.getElementById('emailLabel');
// const emailClasses = emailLabel.classList;

// const nameResult = nameClasses.toggle('name');
// nameLabel.textContent = nameResult ? '氏名' : 'name';

// const emailResult = emailClasses.toggle('email');
// emailLabel.textContent = emailResult ? 'メール' : 'email';

// const diffTime = Math.abs(today - startDate);
// const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44)); // 月数を計算

// timeElapsed.forEach((time) => time.innerHTML =
// diffMonths.toFixed(1) + (toggleBoxesJp[0].classList.contains('display-none') ? ' months' : 'ヶ月'))

// });


const toggleBoxesEn = document.querySelectorAll('.toggleBox-en');
const toggleBoxesJp = document.querySelectorAll('.toggleBox-jp');

toggleBoxesJp.forEach((toggleBox) => toggleBox.classList.add('display-none'));

function calculateTimeElapsed(startDate, className) {
  const today = new Date();
  const diffTime = Math.abs(today - startDate);
  const diffMonths = Math.floor(diffTime / (1000 * 60 * 60 * 24 * 30.44));
  const timeElapsed = document.querySelectorAll(className);
  timeElapsed.forEach((time) => time.innerHTML = diffMonths.toFixed(1) + (toggleBoxesJp[0].classList.contains('display-none') ? ' months' : 'ヶ月'));
}

const startDate1 = new Date('2022-03-01');
const className1 = document.querySelector('.time-elapsed-1');

const startDate2 = new Date('2022-04-01');
const className2 = document.querySelector('.time-elapsed-2');

document.querySelector('#translate').addEventListener('click', function () {

  toggleBoxesEn.forEach(toggleBox => toggleBox.classList.toggle('display-none'));
  toggleBoxesJp.forEach(toggleBox => toggleBox.classList.toggle('display-none'));

  calculateTimeElapsed(startDate1, className1);
  calculateTimeElapsed(startDate2, className2);

  const nameLabel = document.getElementById('nameLabel');
  const nameClasses = nameLabel.classList;

  const emailLabel = document.getElementById('emailLabel');
  const emailClasses = emailLabel.classList;

  const nameResult = nameClasses.toggle('name');
  nameLabel.textContent = nameResult ? '氏名' : 'name';

  const emailResult = emailClasses.toggle('email');
  emailLabel.textContent = emailResult ? 'メール' : 'email';
});




//cursor
// $(function () {
//   var cursor = $('#cursor');
//   var stalker = $('#stalker');

//   $(document).on('mousemove', function (e) {
//     var x = e.clientX;
//     var y = e.clientY;
//     cursor.css({
//       opacity: '1',
//       top: y + 'px',
//       left: x + 'px',
//     });

//     setTimeout(function () {
//       stalker.css({
//         opacity: '.4',
//         top: y + 'px',
//         left: x + 'px',
//       });
//     }, 140);
//   });
// });

document.addEventListener('mousemove', function (e) {
  const x = e.clientX;
  const y = e.clientY;
  const cursor = document.querySelector('#cursor');
  const stalker = document.querySelector('#stalker');

  cursor.style.opacity = '1';
  cursor.style.top = y + 'px';
  cursor.style.left = x + 'px';

  setTimeout(function () {
    stalker.style.opacity = '.4';
    stalker.style.top = y + 'px';
    stalker.style.left = x + 'px';
  }, 140);
});

// navbarの色を変える
// https://snownotes.org/how-to-change-header-color-when-scroll-page/#javascript
// $(window).on('scroll', function () {
//   if ($(this).scrollTop() > 600) {
//     $('.nav-link i').addClass('change-color');
//     $('#translate').addClass('change-color');
//     $('.navbar-brand h2').addClass('change-color');
//   } else {
//     $('.nav-link i').removeClass('change-color');
//     $('#translate').removeClass('change-color');

//     $('.navbar-brand h2').removeClass('change-color');
//   }
// });

window.addEventListener('scroll', function () {
  const scrollPosition = window.pageYOffset;
  if (scrollPosition > 600) {
    document.querySelectorAll('.nav-link i').forEach((icon) => {
      icon.classList.add('change-color');
    });
    document.querySelector('#translate').classList.add('change-color');
    document.querySelector('.navbar-brand').classList.add('change-color');
  } else {
    document.querySelectorAll('.nav-link i').forEach((icon) => {
      icon.classList.remove('change-color');
    });
    document.querySelector('#translate').classList.remove('change-color');
    document.querySelector('.navbar-brand').classList.remove('change-color');
  }
});

// https://flex-box.net/js-scrollin/
// 下から上にスクロールしたら要素を表示させる
// こっちの方がversatile
let fadeInTarget = document.querySelectorAll('.fadein');
window.addEventListener('scroll', () => {
  for (let i = 0; i < fadeInTarget.length; i++) {
    const rect = fadeInTarget[i].getBoundingClientRect().top;
    const scroll = window.pageYOffset || document.documentElement.scrollTop;
    const offset = rect + scroll;
    const windowHeight = window.innerHeight; // 現在のブラウザの高さ
    const bounce = document.querySelector('.scrimba');

    if (scroll > offset - windowHeight + 200) {
      fadeInTarget[i].classList.add('scrollin');
    }
  }
});

// ReTribe16 shrink
// let shrinkTarget = document.querySelectorAll('.shrink');
// window.addEventListener('scroll', () => {
//   for (let i = 0; i < shrinkTarget.length; i++) {
//     const rect = shrinkTarget[i].getBoundingClientRect().top;
//     const scroll = window.pageYOffset || document.documentElement.scrollTop;
//     const offset = rect + scroll;
//     const windowHeight = window.innerHeight; // 現在のブラウザの高さ
//     if (scroll > offset - windowHeight + 100) {
//       shrinkTarget[i].classList.add('shrink-animation');
//     }
//   }
// });

// let fromBottomTarget = document.querySelectorAll('.from-bottom');
// window.addEventListener('scroll', () => {
//   for (let i = 0; i < fromBottomTarget.length; i++) {
//     const rect = fromBottomTarget[i].getBoundingClientRect().top;
//     const scroll = window.pageYOffset || document.documentElement.scrollTop;
//     const offset = rect + scroll;
//     const windowHeight = window.innerHeight; // 現在のブラウザの高さ
//     if (scroll > offset - windowHeight + 100) {
//       fromBottomTarget[i].classList.add('from-bottom-animation');
//     }
//   }
// });

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

// function trueOrFalse() {
//   const text = document.getElementsByClassName('js-test');

//   // https://programming.sincoston.com/random-number/
//   // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
//   // 2から5までのランダムな数字の生成
//   var randomNum = Math.floor(Math.random() * (5 + 1 - 2)) + 2;

//   // 画面に表示
//   // $('#disp').text(randomNum);

//   if (randomNum >= 3) {
//     document.getElementById('disp').textContent = 'true';
//   } else {
//     document.getElementById('disp').textContent = 'flase';
//   }

// }

// ReTribe16
// https://gxy-life.com/2PC/PC/PC20210803.html
window.addEventListener('scroll', function () {
  const scroll = window.pageYOffset;

  const skillsFlexItems = this.document.querySelectorAll('.skills__flex-item');

  for (let i = 0; i < skillsFlexItems.length; i++) {
    if (scroll > 500) {
      skillsFlexItems[i].classList.add('fadeUp');
      skillsFlexItems[i].style.animationDelay = i * 0.3 + 's';
    }

    // const heroBoxTitles = this.document.querySelectorAll('.hero__box-title');

    // for (let i = 0; i < heroBoxTitles.length; i++) {
    //   if (scroll > 0) {
    //     heroBoxTitles[i].classList.add('fadeUp');
    //     heroBoxTitles[i].style.animationDelay = i * 0.3 + 's';
    //   }

    // });
  }
});
