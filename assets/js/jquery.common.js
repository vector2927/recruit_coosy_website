// 画面サイズ判別
var sp_flag = false;
$(window).on('load resize', function () {
  sp_flag = (window.matchMedia('(max-width:767px)').matches);
});
var pc_flag = false;
$(window).on('load resize', function () {
  pc_flag = (window.matchMedia('(min-width: 768px)').matches);
});

// ユーザーエージェント判別
function is_useragent() {
  var ua = navigator.userAgent.toLowerCase();
  if (ua.indexOf('ipad') > 0) {
    return 'ipad';
  } else if (ua.indexOf('iphone') > 0) {
    return 'iphone';
  } else if (ua.indexOf('android') > 0) {
    return 'android';
  } else if (ua.indexOf('chrome') > 0) {
    return 'chrome';
  } else if (ua.indexOf('edge') > 0) {
    return 'edge';
  } else if (ua.indexOf('rv:11') > 0) {
    return 'ie11';
  } else if (ua.indexOf('msie 10') > 0) {
    return 'ie10';
  } else if (ua.indexOf('safari') > 0) {
    return 'safari';
  }
  return 'pc';
}
//トグルスライダー
function next_toggleSlide() {
  var $t = $(this),
  $target = $t.next();

// Get all accordion items.
const accordionItems = $t.closest('.main__list').find('.contents');

// Close all other accordion items.

accordionItems.not($target).slideUp();
accordionItems.not($target).removeClass('on');


// Toggle the active class on the clicked title and accordion content.
if ($t.hasClass('on')) {
  
  $target.slideUp();
  $t.removeClass('on');

} else {
  
  $target.slideDown();
  $t.addClass('on');
}

  return false;
}

(function ($) {
  $(function () {
    /* URLリスト取得
    ------------------------------------------------------*/
    var opt_for_default = {
      url: '/assets/js/irregular_header_pages.json',
      dataType: 'json',
      data: { name: 'url' },
      success: function (data) {
        result_process(data);
      },
      error: function (XMLHttpRequest, textStatus, errorThrown) {
        console.log("XMLHttpRequest : " + XMLHttpRequest.status);
        console.log("textStatus : " + textStatus);
        console.log("errorThrown : " + errorThrown.message);
      }
    }
    // safariのみ
    var opt_for_safari = opt_for_default;
    opt_for_safari["async"] = false;
    // safariだけ分岐
    if (is_useragent() == "safari") {
      $.ajax(opt_for_safari);
    } else {
      $.ajax(opt_for_default);
    }
    // 解析
    function result_process(data) {
      var page_data = data.pages;
      var host_name = location.host;
      var current_url = location.href;
      var protocol = location.protocol + "//";
      // 解析&ヘッダーへclassを付与
      $.each(page_data, function (i, item) {
        var url = protocol + host_name + item["url"];
        var header_type = Boolean(item["is_header_color_reverse"]);
        if (url == current_url) {
          $("#header").addClass("bg-dark");
          return false;
        }
      });
    }
    //スムーススクロール
    $('a[href^="#"]:not(".jq-noScroll")').on('click', function () {
      var href = $(this).attr("href");
      var target = $(href == "#" || href == "" ? "html" : href);
      var position = $(target).offset().top - 80;
      $("html, body").animate({
        scrollTop: position
      }, 1000, "easeInOutCubic");
      return false;
    });
    //トグルスライダー※汎用class
    $('.jq-nextToggleSlide').on('click', next_toggleSlide);
    if (sp_flag) {
      //SPグロナビ
      $('.list__item__top').on('click', next_toggleSlide);
      //SPフッター アコーディオン
      $(".footer-upperNav-item > div").on("click", next_toggleSlide);
    }
    $("#header-ui .header-ui-trigger").on("click", function () {
      var trigger = $(this);
      var flip = $(this).parents("header");
      header_motion_init($("#paper"), trigger);
      $("#paper").css({
        height: $("header").width() / 2
      });
      flip.addClass("flip");
    });
    function header_motion_init(paper, trig) {
      paper.css({
        height: 0
      });
    }
    // ヘッダー周り
    $("#header").hover(
      function () {
        $(this).addClass("header-hover");
      },
      function () {
        $(this).removeClass("header-hover");
      }
    );
    $(".header__globalNav__opener").on("click", function () {
      $(this).toggleClass("open");
      $('#header').toggleClass("open");
    });
    /* ページトップのスクロールロック
    ------------------------------------------------------*/
    function calc_pagetop_position() {
      var target = $("#pagetop");
      if (target.length > 0) {
        var scr_pos = $(window).scrollTop();
        var scr_pos_bottom = scr_pos + $(window).height();
        var target_pos = target.offset().top;
        var target_bottom_pos = target_pos + target.height();
        if (scr_pos_bottom < target_bottom_pos) {
          target.addClass("on-fixed");
        } else {
          target.removeClass("on-fixed");
        }
      }
    }
    $(window).on("load", calc_pagetop_position);
    $(window).on("scroll.pagetop_scroll_lock", calc_pagetop_position);
    /* スクロール連動アニメーション
    ------------------------------------------------------*/
    var trigger = $(".js-scrollMotion");
    var current_w;
    var window_offset_y;
    var timer;
    var motion_objs = [];
    var tl_recruit = anime.timeline({
      easing: "easeInQuad",
    });
    var is_begin_tl_recruit = false;
    var tl_service = anime.timeline({
      easing: "easeInQuad",
    });
    var is_begin_tl_service = false;
    // 単発のアニメーションイベント
    $(".anm-layer-service-ufo-object").on("animationend", function () {
      $(".main-service-description").addClass("on-start-beam");
    });
    $(".main-service-list-item:last").on("animationend", function () {
      $(this).parent().addClass("on-start-btn");
    });
    trigger.each(function (index) {
      var params = {};
      params["target"] = $(this);
      motion_objs.push(params);
      //params["animation_name"] = $(this).data("animation-name");
      var anm_name = $(this).data("animation-name");
      if (anm_name !== undefined) {
        $(this).addClass(anm_name);
        //console.log($(this).data("animation-name"));
      }
    });
    function settings() {
      var pos_point = 0.65;
      if ($(window).scrollTop() <= $(window).height() || $(window).scrollTop() >= ($("body").height() - $(window).height() * 1.5)) {
        pos_point = 1;
      }
      window_offset_y = $(window).height() * pos_point; //表示位置
      // 幅の増減で高さが変動するため再設定
      if (current_w != $(window).width()) {
        trigger.each(function (index) {
          motion_objs[index]["offset_pos"] = $(this).offset().top;
        });
      }
      current_w = $(window).width();
    }
    function displaySwitching() {
      var window_scr_pos = $(window).scrollTop() + window_offset_y;
      clearTimeout(timer);
      timer = setTimeout(function () {
        for (var i = motion_objs.length - 1; i >= 0; i--) {
          if (window_scr_pos > motion_objs[i].offset_pos) {
            motion_objs[i].target.addClass("on-motion");
            // topリクルート
            if (motion_objs[i].target.hasClass("ex-index-recruit") && !is_begin_tl_recruit) {
              is_begin_tl_recruit = true;
            }
          }
        }
      }, 0);
    }
    // window
    $(window).on("scroll.scroll_motion resize.scroll_motion", settings).on("scroll.scroll_motion", displaySwitching);
    settings();
    displaySwitching();
  });
})(jQuery);
