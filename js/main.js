//画像の設定

var windowwidth = window.innerWidth || document.documentElement.clientWidth || 0;
		if (windowwidth > 768){
			var responsiveImage = [//PC用の画像
				{ src: './img/homepage-design-iwaki1.jpg'},
				{ src: './img/homepage-design-iwaki2.jpg'},
				{ src: './img/homepage-design-iwaki3.jpg'}
			];
		} else {
			var responsiveImage = [//タブレットサイズ（768px）以下用の画像
				{ src: './img/homepage-design-iwaki4.jpg' },
				{ src: './img/homepage-design-iwaki5.jpg' },
				{ src: './img/homepage-design-iwaki6.jpg' }
			];
		}

//Vegas全体の設定

$('#slider').vegas({
		transition: 'blur',//切り替わりのアニメーション。http://vegas.jaysalvat.com/documentation/transitions/参照。fade、fade2、slideLeft、slideLeft2、slideRight、slideRight2、slideUp、slideUp2、slideDown、slideDown2、zoomIn、zoomIn2、zoomOut、zoomOut2、swirlLeft、swirlLeft2、swirlRight、swirlRight2、burnburn2、blurblur2、flash、flash2が設定可能。
		transitionDuration: 2000,//切り替わりのアニメーション時間をミリ秒単位で設定
		delay: 10000,//スライド間の遅延をミリ秒単位で。
		animationDuration: 20000,//スライドアニメーション時間をミリ秒単位で設定
		animation: 'kenburns',//スライドアニメーションの種類。http://vegas.jaysalvat.com/documentation/transitions/参照。kenburns、kenburnsUp、kenburnsDown、kenburnsRight、kenburnsLeft、kenburnsUpLeft、kenburnsUpRight、kenburnsDownLeft、kenburnsDownRight、randomが設定可能。
		slides: responsiveImage,//画像設定を読む
	});

	$(".hamburger").click(function(){
		$(this).toggleClass('active');
		$("#g-nav").toggleClass('panelactive');
	});

	$("#g-nav a").click(function() {
		$(".hamburger").removeClass('active');
		$("#g-nav").removeClass('panelactive');
	});

	
/*===========================================================*/
/*機能編 8-1-4	ページ内にある指定の範囲内で下から出現*/
/*===========================================================*/
//スクロールした際の動きを関数でまとめる
function setFadeElement(){
	var windowH = $(window).height();	//ウィンドウの高さを取得
	
	var scroll = $(window).scrollTop(); //スクロール値を取得
    //出現範囲内に入ったかどうかをチェック
	if(scroll+windowH >= contentsTop && scroll+windowH  <= contentsTop+contentsH){
		$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
		$("#page-top").removeClass("DownMove");   //DownMoveを削除
		$(".hide-btn").removeClass("hide-btn");	  //hide-btnを削除
	}//2つ目の出現範囲に入ったかどうかをチェック※任意
   else if(scroll+windowH >= contentsTop2 && scroll+windowH <= contentsTop2+contentsH2){       
		$("#page-top").addClass("UpMove");    //入っていたらUpMoveをクラス追加
		$("#page-top").removeClass("DownMove");   //DownMoveを削除
	}//それ以外は
    else{
        if(!$(".hide-btn").length){				//サイト表示時にDownMoveクラスを一瞬付与させないためのクラス付け。hide-btnがなければ下記の動作を行う
        $("#page-top").addClass("DownMove");  //DownMoveをクラス追加
		$("#page-top").removeClass("UpMove"); //UpMoveを削除	
        }
	}
}

/*===========================================================*/
/*機能編 6-1-6 複数画像を並列に見せる*/
/*===========================================================*/

	$('.slider').slick({
		autoplay: true,//自動的に動き出すか。初期値はfalse。
		infinite: true,//スライドをループさせるかどうか。初期値はtrue。
		slidesToShow: 4,//スライドを画面に3枚見せる
		slidesToScroll: 4,//1回のスクロールで3枚の写真を移動して見せる
		prevArrow: '<div class="slick-prev"></div>',//矢印部分PreviewのHTMLを変更
		nextArrow: '<div class="slick-next"></div>',//矢印部分NextのHTMLを変更
		dots: true,//下部ドットナビゲーションの表示
		responsive: [
            {
			breakpoint: 1200,//モニターの横幅が1200px以下の見せ方
			settings: {
				slidesToShow: 3,//スライドを画面に2枚見せる
				slidesToScroll: 3,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
			{
			breakpoint: 769,//モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2,//スライドを画面に2枚見せる
				slidesToScroll: 2,//1回のスクロールで2枚の写真を移動して見せる
			}
		},
		{
			breakpoint: 426,//モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1,//スライドを画面に1枚見せる
				slidesToScroll: 1,//1回のスクロールで1枚の写真を移動して見せる
			}
		}
	]
	});


	/*===========================================================*/
/*印象編 8-17 テキストがほのかに光りながら出現*/
/*===========================================================*/
	// glowAnimeにglowというクラス名を付ける定義
function GlowAnimeControl() {
	$('.glowAnime').each(function () {
		var elemPos = $(this).offset().top - 50;
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight) {
			$(this).addClass("glow");

		} else {
			$(this).removeClass("glow");
		}
	});
}
// 動きのきっかけの起点となるアニメーションの名前を定義
function fadeAnime(){
   //4-1 ふわっ（左から）
	$('.fadeLeftTrigger').each(function(){ //fadeLeftTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeLeft');// 画面内に入ったらfadeLeftというクラス名を追記
		}else{
		$(this).removeClass('fadeLeft');// 画面外に出たらfadeLeftというクラス名を外す
		}
		});
    //4-1 ふわっ（右から）
			$('.fadeRightTrigger').each(function(){ //fadeRightTriggerというクラス名が
		var elemPos = $(this).offset().top-50;//要素より、50px上の
		var scroll = $(window).scrollTop();
		var windowHeight = $(window).height();
		if (scroll >= elemPos - windowHeight){
		$(this).addClass('fadeRight');// 画面内に入ったらfadeRightというクラス名を追記
		}else{
		$(this).removeClass('fadeRight');// 画面外に出たらfadeRightというクラス名を外す
		}
		});
	}
	var animeFlag = true;//スクロールする度に動作するのでアニメーションが終わるまで処理をさせないようにするための定義

	$('.slid').slick({
	autoplay: true, //自動的に動き出すか。初期値はfalse。
	infinite: true, //スライドをループさせるかどうか。初期値はtrue。
	slidesToShow: 3, //スライドを画面に3枚見せる
	slidesToScroll: 3, //1回のスクロールで3枚の写真を移動して見せる
	prevArrow: '<div class="slick-prev"></div>', //矢印部分PreviewのHTMLを変更
	nextArrow: '<div class="slick-next"></div>', //矢印部分NextのHTMLを変更
	dots: true, //下部ドットナビゲーションの表示
	responsive: [
		{
			breakpoint: 769, //モニターの横幅が769px以下の見せ方
			settings: {
				slidesToShow: 2, //スライドを画面に2枚見せる
				slidesToScroll: 2, //1回のスクロールで2枚の写真を移動して見せる
			}
		},
		{
			breakpoint: 426, //モニターの横幅が426px以下の見せ方
			settings: {
				slidesToShow: 1, //スライドを画面に1枚見せる
				slidesToScroll: 1, //1回のスクロールで1枚の写真を移動して見せる
			}
		}
	]
});

/*===========================================================*/
/* 関数をまとめる*/
/*===========================================================*/

	// 画面が読み込まれたらすぐに動かしたい場合の記述
$(window).on('load', function () {
	//spanタグを追加する
	var element = $(".glowAnime");
	element.each(function () {
		var text = $(this).text();
		var textbox = "";
		text.split('').forEach(function (t, i) {
			if (t !== " ") {
				if (i < 10) {
					textbox += '<span style="animation-delay:.' + i + 's;">' + t + '</span>';
				} else {
					var n = i / 10;
					textbox += '<span style="animation-delay:' + n + 's;">' + t + '</span>';
				}

			} else {
				textbox += t;
			}
		});
		$(this).html(textbox);
	});
	GlowAnimeControl();/* アニメーション用の関数を呼ぶ*/
});// ここまで画面が読み込まれたらすぐに動かしたい場合の記述

// 画面をスクロールをしたら動かしたい場合の記述
$(window).scroll(function (){
	fadeAnime();
});

/*===========================================================*/
/*関数をまとめる*/
/*===========================================================*/

