
    
// arctext
$(function() {
	$('.eye-text').arctext({
			radius: 80,
			dir: -1
		});
	});


	$(function() {
		$('.eye-text.toggleBox-jp').arctext({
				radius: 5,
				dir: 1
			});
		});
	
	
	




//cursor
$(function(){
	
	//カーソル要素の指定
	var cursor=$("#cursor");
	//ちょっと遅れてついてくるストーカー要素の指定  
	var stalker=$("#stalker");
	
	//mousemoveイベントでカーソル要素を移動させる
	$(document).on("mousemove",function(e){
    //カーソルの座標位置を取得
		var x=e.clientX;
		var y=e.clientY;
		//カーソル要素のcssを書き換える用
		cursor.css({
			"opacity":"1",
			"top":y+"px",
			"left":x+"px"
		});
		//ストーカー要素のcssを書き換える用    
		setTimeout(function(){
			stalker.css({
			"opacity":".4",
	  		"top":y+"px",
		  	"left":x+"px"
		});
		},140);//カーソルより遅れる時間を指定
    
  });
});

// navbarの色を変える
// https://snownotes.org/how-to-change-header-color-when-scroll-page/#javascript
$(window).on('scroll', function() {
	if($(this).scrollTop() > 600) {
	  $('.nav-link i').addClass('change-color');
	  $('#translate').addClass('change-color');
	  $('.navbar-brand h2').addClass('change-color');


	} else {
		$('.nav-link i').removeClass('change-color');
		$('#translate').removeClass('change-color');

		$('.navbar-brand h2').removeClass('change-color');
  }
  })
    



  //   浮かび上がってくる
$(function(){
	$(window).scroll(function (){
        // fadeinは複数あるから　.each
		$('.fadein').each(function(){
			var elemPos = $(this).offset().top;
			var scroll = $(window).scrollTop();
			var windowHeight = $(window).height();
			if (scroll > elemPos - windowHeight + 100){
				$(this).addClass('scrollin');
			}
		});
	});
});

// 言語切り替え

// 初期に見えなくする
$('.toggleBox-jp').addClass('display-none');

$('#translate').click(function() {
    // $('.toggleBox').toggleClass('display-none');
    // if($('.english')) {

        // $('.toggleBox').toggleClass('display-none')
            $('.toggleBox-en').toggleClass('display-none');
            $('.toggleBox-jp').toggleClass('display-none');
    // }
});


// a hover時

// const target = document.querySelector('.nav-link');

// target.addEventListener('mouseover', () => {
// 	target.style.colo = '#000'; 
// 	これは『イベントバブリング』を行わない、という設定で、『イベントバブリング』とは親要素にイベントを伝播させるかさせないか
// }, false);

// target.addEventListener('mouseleave', () => {
  
// 	　　target.style.color = '#fff';
	  
// 	}, false);



 function trueOrFalse( ) {
	const text = document.getElementsByClassName('js-test');


	// https://programming.sincoston.com/random-number/
	 // ランダムな数字の生成（Math.random() * ( (最大値 + 1) - 最小値 ) + 最小値;）
    // 2から5までのランダムな数字の生成
    var randomNum = Math.floor(Math.random() * ((5 + 1) - 2)) + 2;

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
window.onload = ()=>{
    const loader = document.getElementById('loading');
    loader.classList.add('loaded');
}

// rotate()
document.querySelector(`.rotate`).animate(
	[
		{ transform: 'rotate(0deg)' },
		{ transform: 'rotate(360deg)' }
	],
	{
		// 回転の速さ
		duration: 5000,
		easing: 'linear',
		iterations: Infinity
	}
);








