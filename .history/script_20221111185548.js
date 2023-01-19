
    
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

const cursor = document.getElementById('cursor');

cursor.addEventListener('mouseover', () => {
	
})
