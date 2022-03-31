
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  var topBtn = $('.pagetop');
  topBtn.hide();

  // ボタンをクリックしたらスクロールして上に戻る
  topBtn.click(function () {
    $('body,html').animate({
      scrollTop: 0
    }, 300, 'swing');
    return false;
  });

  // ハンバーガーアイコンをクリックすると、ドロワーメニューが開閉する
  $('.js-hamburger').on('click', function () {
    $(this).toggleClass('is-open');
    $('.js-drawer-nav').toggleClass('is-open');
  });

  // ドロワーメニュー内のリンクをクリックすると、ドロワーメニューが閉じる
  $('.js-drawer-nav a').on('click', function () {
    $('.js-drawer-nav').toggleClass('is-open');
    $('.js-hamburger').removeClass('is-open');
  });

  // スムーススクロール (絶対パスのリンク先が現在のページであった場合でも作動)
  $(document).on('click', 'a[href*="#"]', function () {
    let time = 400;
    let header = $('header').innerHeight();
    let target = $(this.hash);
    if (!target.length) return;
    let targetY = target.offset().top - header;
    $('html,body').animate({ scrollTop: targetY }, time, 'swing');
    return false;
  });

  let headNav = $("header");
  let mainVisualHeight = $(".p-mainview").height();
/* 初期表示、スクロール時にイベント開始 */
$(window).on("load scroll", function () {
    /* スクロール位置の高さが200pxより大きい、かつis-fixedクラスがない場合 */
    if ($(this).scrollTop() > mainVisualHeight && headNav.hasClass("is-fixed") == false) {
        headNav.css("display", "block");
        headNav.css({ "top": "-72px" }); /* ヘッダーの高さ分マイナスにする */
        headNav.addClass("is-fixed");
        headNav.animate({ "top": 0 }, 600);
        var changeL = $('.c-logo img').attr('src').replace('logo-w.svg' , 'logo-b.svg');
        $('.c-logo img').attr('src', changeL);
      }
      /* スクロール位置の高さが200pxより小さい、かつis-fixedクラスがある場合 */
      else if ($(this).scrollTop() < mainVisualHeight && headNav.hasClass("is-fixed") == true) {
        headNav.removeClass("is-fixed");
        headNav.css("display", "static");
        var changeL = $('.c-logo img').attr('src').replace('logo-b.svg' , 'logo-w.svg');
        $('.c-logo img').attr('src', changeL);
    }
});

});
