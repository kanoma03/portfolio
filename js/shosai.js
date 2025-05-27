// スライダー　商品詳細
$('.mainshosai').slick({
  arrows:true,
  dots:true,
  asNavFor:'.slidershosai',
});
$('.slidershosai').slick({
  asNavFor:'.mainshosai',
  focusOnSelect: true,
  slidesToShow:3,
  slidesToScroll:1,
  centerMode: true,
  // vertical: true,
  // verticalSwiping: true,
});

// タブメニュー
new Vue({
  el: '#tabmenu',
  data: {
    activeTab: 'tabs-1',
  },
});

// ポップアップギャラリー
// $('.popup').magnificPopup({
//   // type: 'image',
//   // gallery: { enabled: true },
//   showCloseBtn: true,
// });

