

// 横幅変更の情報
var tmLeftSideOffLen	= 700;				// サイドメニューを消す横幅(px)
var tmMarginOffLen	= 550;				// マージンを消す横幅(px)
var tmCmanLinkOffLen	= 400;				// 下部cmanLinkを消す横幅(px)
var tmgMenuOff		= 9;				// サイドメニューを表示しているか
var tmgCmanLinkOff	= 9;				// cmanリンクを消している場合「0」
var tmCookieView	= '';
var tmOldBr			= 0;				// 古いブラウザ使用

// ゆっくりスクロール用 #001# 追加
var tmgScrollTimer;
var tmgScroll_nowX;
var tmgScroll_nowY;
var tmgScroll_endY;
var tmgScroll_ud;


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//	Onload
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
window.onload = function() {



	// --- 個別画面のonload呼び出し ----------------------------------
	if ( typeof pageOnload == "function")  {
		pageOnload();
	}

	// --- 個別画面のonload呼び出し ----------------------------------
	if ( typeof pageResize == "function")  {
		pageResize();
	}
}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//	リサイズ処理
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
window.onresize = tmResize;
function tmResize(){

	// 古いブラウザはリサイズ処理しない
	if(tmOldBr == 1){return;}

	var wNowFrameWidth		= document.getElementById("tmMainFrame").clientWidth;
	var wSideMenuOff		= 0;



	// --- 個別画面のonload呼び出し ----------------------------------
	if ( typeof pageResize == "function")  {
		pageResize();
	}

}


// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
//	ゆっくりスクロール			 #001# 追加
//	引数： スクロール先のID
// ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
function tmSlowScroll(argID){

	// 現在の位置取得
	tmgScroll_nowX	= document.body.scrollLeft || document.documentElement.scrollLeft;
	tmgScroll_nowY	= document.body.scrollTop  || document.documentElement.scrollTop;

	// 指定要素の位置（縦のみ）
	tmgScroll_endY	= Math.floor(document.getElementById(argID).getBoundingClientRect().top);
	tmgScroll_endY += tmgScroll_nowY;

	// スクロール方向
	tmgScroll_ud = ((tmgScroll_nowY > tmgScroll_endY) ? 'up' : 'down');

	// スクロール開始
	tmSlowScrollLoop();
}
function tmSlowScrollLoop(){

	if (tmgScrollTimer) {
		clearTimeout(tmgScrollTimer);
	}

	if ( ((tmgScroll_ud == 'down') && (tmgScroll_endY >= tmgScroll_nowY)) || ((tmgScroll_ud == 'up') && (tmgScroll_endY <= tmgScroll_nowY)) ) {

		// 次の移動位置（縦）計算
		var wMoveY =  Math.floor(( tmgScroll_endY - tmgScroll_nowY ) / 5);
		if(wMoveY == 0){wMoveY = ((tmgScroll_ud == 'down') ? 1 : -1);}
		tmgScroll_nowY = Math.floor(tmgScroll_nowY + wMoveY);

		// 移動実行
		window.scrollTo(tmgScroll_nowX,tmgScroll_nowY);

		// 次のループ
		tmgScrollTimer = setTimeout("tmSlowScrollLoop()",10);

	} else {
		// 移動終了（最後にぴったり合わせる）
		window.scrollTo(tmgScroll_nowX,tmgScroll_endY);

		// タイマクリア
		clearTimeout(tmgScrollTimer);
	}
}

