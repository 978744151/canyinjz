$(function () {
  var helpCenter = document.getElementById("helpCenter");
  var navChange2 = document.getElementsByClassName("navChange2")[0];
  helpCenter.onclick = function () {
    if (navChange2.style.display == "block") {
      navChange2.style.display = "none";
    } else {
      navChange2.style.display = "block";
    }
  };
  // $("#personalCenter").hover(function () {
  //     // $(this).find("ul").toggle();
  //     $(this).find("ul").show();
  //     if ($(this).find("ul").css('display') == 'none') {
  //         $(this).find("i").addClass("iconxiangxiajiantou");
  //         $(this).find("i").removeClass("iconshixinjiantou-xiangshang ");
  //         $(this).find("i").css("color", "#000000");
  //     } else {
  //         $(this).find("i").removeClass("iconxiangxiajiantou ");
  //         $(this).find("i").addClass("iconshixinjiantou-xiangshang");
  //         $(this).find("i").css("color", "#FF6633");
  //     }
  // }, function () {
  //     // $(this).find("ul").toggle();
  //     $(this).find("ul").show();
  //     if ($(this).find("ul").css('display') == 'none') {
  //         $(this).find("i").addClass("iconxiangxiajiantou");
  //         $(this).find("i").removeClass("iconshixinjiantou-xiangshang ");
  //         $(this).find("i").css("color", "#000000");
  //     } else {
  //         $(this).find("i").removeClass("iconxiangxiajiantou ");
  //         $(this).find("i").addClass("iconshixinjiantou-xiangshang");
  //         $(this).find("i").css("color", "#FF6633");
  //     }
  // });

  $("#personalCenter").hover(
    function () {
      $(this).find("ul").animate({ opacity: "show", height: "show" }, 200);
      $(this).find("i").removeClass("iconxiangxiajiantou ");
      $(this).find("i").addClass("iconshixinjiantou-xiangshang");
      $(this).find("i").css("color", "#FF6633");
    },
    function () {
      $(this).find("ul").stop(true, true).hide();
      $(this).find("i").addClass("iconxiangxiajiantou");
      $(this).find("i").removeClass("iconshixinjiantou-xiangshang ");
      $(this).find("i").css("color", "#000000");
    }
  );

  // $("#helpCenter").click(function () {
  //     $(this).find("ul").toggle();
  //     if ($(this).find("ul").css('display') == 'none') {
  //         $(this).find("i").addClass("iconxiangxiajiantou");
  //         $(this).find("i").removeClass("iconshixinjiantou-xiangshang ");
  //         $(this).find("i").css("color", "#000000");
  //     } else {
  //         $(this).find("i").removeClass("iconxiangxiajiantou ");
  //         $(this).find("i").addClass("iconshixinjiantou-xiangshang");
  //         $(this).find("i").css("color", "#ff9d04");
  //     }
  // });

  //   navChange2.onmousemove = function () {
  //     console.log(222);
  //     navChange2.style.display = "none";
  //   };
  //   $("#helpCenter").hover(
  //     function () {
  //       $(this).find("ul").animate({ opacity: "show", height: "show" }, 200);
  //       $(this).find("i").removeClass("iconxiangxiajiantou ");
  //       $(this).find("i").addClass("iconshixinjiantou-xiangshang");
  //       $(this).find("i").css("color", "#ff9d04");
  //     },
  //     function () {
  //       $(this).find("ul").stop(true, true).hide();
  //       $(this).find("i").addClass("iconxiangxiajiantou");
  //       $(this).find("i").removeClass("iconshixinjiantou-xiangshang ");
  //       $(this).find("i").css("color", "#000000");
  //     }
  //   );

  $("#changeAddress span").click(function () {
    $(".city-list").toggle();
  });

  $(".group").on("click", "a", function (e) {
    console.log(this.innerHTML);
    $(".group a").css("color", "#000");
    $(this).css("color", "#F65D29");
    $(this).siblings().css("color", "#000");
    $("#location").text(this.innerHTML);
    $(".city-list").css("display", "none");
  });

  $(".navChange1").on("click", "li", function (e) {
    $(this).css("color", "#fff");
    $(this).css("background", "#F65D29");
    $(this).siblings().css("color", "#000");
    $(this).siblings().css("background", "#fff");
  });

  $(".navChange2").on("click", "li", function (e) {
    $(this).css("color", "#fff");
    $(this).css("background", "#F65D29");
    $(this).siblings().css("color", "#000");
    $(this).siblings().css("background", "#fff");
  });

  $(".banner").slider({
    imgList: [
      {
        img: "./image/banner1.jpg",
        a: "#",
      },
      {
        img: "./image/banner2.jpg",
        a: "#",
      },
      {
        img: "./image/banner3.jpg",
        a: "#",
      },
    ], //图片的列表
    width: "100%", //图片的宽
    height: 405, //图片的高
    isAuto: true, //是否自动轮播
    moveTime: 3000, //运动时间
    direction: "right", //轮播的方向
    btnWidth: 30, //按钮的宽
    btnHeight: 30, //按钮的高
    spanWidth: 10, //span按钮的宽
    spanHeight: 10, //span按钮的高
    spanColor: "#fff", //span按钮的颜色
    activeSpanColor: "red", //选中的span颜色
    btnBackgroundColor: "rgba(0, 0, 0, 0.3)", //两侧按钮的颜色
    spanRadius: "50%", //span按钮的圆角程度
    spanMargin: 3, //span之间的距离
  });
});
