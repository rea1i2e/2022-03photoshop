
jQuery(function ($) { // この中であればWordpressでも「$」が使用可能になる

  // ローディングアニメーション
  $(function () {
    $(window).on('load');
    $('.loader-slide').addClass('open');
    setTimeout(function () {
      $('#loader').css('display', 'none');
    }, 2000);
  });

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

  // ドロワーメニューを開いているときにどこかタップすると、ドロワーメニューが閉じる
  $('.js-drawer-nav').on('click', function () {
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
      var changeL = $('.c-logo').attr('src').replace('logo-w.svg', 'logo-b.svg');
      $('.c-logo').attr('src', changeL);
    }
    /* スクロール位置の高さが200pxより小さい、かつis-fixedクラスがある場合 */
    else if ($(this).scrollTop() < mainVisualHeight && headNav.hasClass("is-fixed") == true) {
      headNav.removeClass("is-fixed");
      headNav.css("display", "static");
      var changeL = $('.c-logo').attr('src').replace('logo-b.svg', 'logo-w.svg');
      $('.c-logo').attr('src', changeL);
    }
  });
});

// AOS.js
AOS.init({
  offset: 100,
  // アニメーションの開始位置（トリガーの元の位置より100px下に設定）
  // offset (in px) from the original trigger point    

  delay: 0,
  // 遅延 values from 0 to 3000, with step 50ms

  duration: 1000,
  // アニメーションにかける時間（1000ミリ秒かける）
  // values from 0 to 3000, with step 50ms

  easing: 'ease',
  // アニメーションの仕方　default easing for AOS animations

  once: true,
  // trueにすると、1回だけ実行され、falseだとずっと実行される
  // whether animation should happen only once - while scrolling down

  mirror: false,
  // 要素をスクロールしながら、アニメーション化する必要があるかどうか
  // whether elements should animate out while scrolling past them

  anchorPlacement: 'top-bottom',
  // アニメーション開始のスクロール位置
  // defines which position of the element regarding to window should trigger the animation
});
