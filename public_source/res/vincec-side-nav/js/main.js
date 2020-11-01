var List = {
  Category: [{
    innerhtml: "Archive",
    src: "./img/alien-ship.svg",
    class: "side",
    subCategory: [{
      innerhtml: "Tags",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Time",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Author",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Count",
      src: "./img/secondLi.svg"
    }
    ]
  },
  {
    innerhtml: "About Me",
    src: "./img/big-dipper.svg",
    class: "normal"
  },
  {
    innerhtml: "Friends",
    src: "./img/half-moon.svg",
    class: "normal",
    subCategory: [{
      innerhtml: "Friends A",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Friends B",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Friends C",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Friends D",
      src: "./img/secondLi.svg"
    }
    ]
  },
  {
    innerhtml: "Games",
    src: "./img/planet.svg",
    class: "normal",
    subCategory: [{
      innerhtml: "ACT",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "FPS",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "RAC",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "ADV",
      src: "./img/secondLi.svg"
    }
    ]
  },
  {
    innerhtml: "Moive",
    src: "./img/rocket.svg",
    class: "normal"
  },
  {
    innerhtml: "Music",
    src: "./img/saturn.svg",
    class: "normal",
    subCategory: [{
      innerhtml: "ELECTROIC",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "POP",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "JPOP",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "CLASSIC",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "DANCE",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "ROCK",
      src: "./img/secondLi.svg"
    }
    ]
  },
  {
    innerhtml: "Games",
    src: "./img/shooting-star.svg",
    class: "side",
    subCategory: [{
      innerhtml: "ACT",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "FPS",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "RAC",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "ADV",
      src: "./img/secondLi.svg"
    }
    ]
  },
  {
    innerhtml: "Computer",
    src: "./img/space-ship.svg",
    class: "side",
    subCategory: [{
      innerhtml: "HP",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "DELL",
      src: "./img/secondLi.svg"
    }
    ]
  },
  {
    innerhtml: "Phone",
    src: "./img/alien-ship.svg",
    class: "side",
    subCategory: [{
      innerhtml: "Sony",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Apple",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Huawei",
      src: "./img/secondLi.svg"
    },
    {
      innerhtml: "Samsung",
      src: "./img/secondLi.svg"
    }
    ]
  }
  ]
};
$(document).ready(function () {
  console.log("嘿嘿，小彩蛋");
  menuGenerater(List.Category);
}).on("mousedown", ".first-li div", function () {
  $("#inst").removeClass("hide");
  let findex = $(this).parent().index(".first-li");
  liDown(findex, 0);
}).on("mousedown", ".second-li", function () {
  $("#inst").removeClass("hide");
  console.log($(this));
  let findex = $(this).parent().parent().index(".first-li");
  console.log("findex", findex);
  let sindex = $(this).index(".first-li-actived .second-li");
  console.log("sindex", sindex);
  liDown(findex, sindex);
}).on("mouseenter", ".first-li.side", function () {
  var $this = $(this);
  var offset = $this.offset();
  var $ul = $this.find("ul");
  var screenHeight = $(window).height();
  var subCategoryHeight = $ul.find(".second-li").outerHeight(!0) * ($ul.find(".second-li").length);
  $ul.height(subCategoryHeight);
  let $arrow = $this.find(".arrow-div");
  if (offset.top + subCategoryHeight >= screenHeight) {
    var sub_top = $(window).innerHeight() - subCategoryHeight;
    $ul.css({
      "left": offset.left + $this.outerWidth(!0) + "px",
      "top": sub_top + "px"
    });
    $arrow.css("top", offset.top - sub_top + "px");
  }
  else {
    $ul.css({
      "left": offset.left + $this.outerWidth(!0) + "px",
      "top": offset.top + "px"
    });
    $arrow.css("top", 0);
  }
  $ul.removeClass("fade");
  $ul.css("z-index", "100");
})
  .on("mouseleave", ".first-li.side", function () {
    if (!$(this).hasClass("first-li-actived")) {
      $(this)
        .find("ul")
        .addClass("fade");
    }
    $(this)
      .find("ul")
      .css("z-index", "0");
  });
function liDown(findex, sindex) {
  let $fli = $("li#" + findex + ".first-li");
  liActive($fli, "first");
  if ($fli.find("ul")) {
    //show the subCategory ul
    if ($fli.hasClass("normal")) {
      $fli.find("ul").removeClass("hide");
    }
    else if ($fli.hasClass("side")) {
      $fli.find("ul").removeClass("fade");
    }
    if (sindex >= 0) { //secondli
      let $sli = $fli.find("li#" + sindex + ".second-li");
      liActive($sli, "second");
    }
  }
}
function liActive($this, index) {
  let LI = $this;
  let LIA = LI.find("." + index + "-li-a");
  let LIIMG = LI.find("." + index + "-li-img");
  if (!LI.hasClass(index + "-li-actived")) {
    if (index == "first") {
      //clean first li select
      clearHover(1);
    }
    //clean second li select
    clearHover(2);
    //make active change
    LIIMG.addClass(index + "-li-img-actived");
    LIA.addClass(index + "-li-a-actived");
    LI.addClass(index + "-li-actived");
    try {
      liImageHover(LIIMG, true, index);
    }
    catch (e) {
    }
    showInfo();
  }
}
function showInfo() {
  let first_li_id = $(".first-li-actived").index(".first-li");
  console.log("first li:" + first_li_id);
  let second_li_id = $(".first-li-actived .second-li-actived").index(".first-li-actived .second-li");
  console.log("second li:" + second_li_id);
  $("iframe").remove();
  $("form.layui-form").addClass("none");
  let category = List.Category;
  //get li name and show
  $(".nav-first-li-name").html(category[first_li_id].innerhtml);
  $(".nav-second-li-name").html("");
  $("#arrow").addClass("hide");
  if (second_li_id != -1) {
    let subcategory = category[first_li_id].subCategory;
    $(".nav-second-li-name").html(subcategory[second_li_id].innerhtml);
    $("#arrow").removeClass("hide");
  }
}
function liImageHover(LIIMG, isHover, ID) {
  var format = "svg";
  if (isHover) {
    let imageSrc = LIIMG.attr("src").slice(0, -4);
    LIIMG.attr("src", imageSrc + "-actived." + format);
    LIIMG.addClass(ID + "-li-img-actived");
  }
  else {
    let imageSrc = LIIMG.attr("src").slice(0, -12);
    LIIMG.attr("src", imageSrc + "." + format);
    LIIMG.removeClass(ID + "-li-img-actived");
  }
}
function clearHover(n) {
  if (n == 1) {
    try {
      const FLI_ACT = $(document).find("li.first-li.first-li-actived");
      const FLI_ACT_A = FLI_ACT.find(".first-li-a-actived");
      const FLI_ACT_IMG = FLI_ACT.find(".first-li-img-actived");
      if (FLI_ACT.hasClass("normal")) {
        FLI_ACT.find("ul").addClass("hide");
      }
      else if (FLI_ACT.hasClass("side")) {
        FLI_ACT.find("ul").addClass("fade");
      }
      FLI_ACT_A.removeClass("first-li-a-actived");
      FLI_ACT.removeClass("first-li-actived");
      liImageHover(FLI_ACT_IMG, !1, "first");
    }
    catch (e) { }
  }
  else if (n == 2) {
    try {
      let SLI_ACT = $(document).find("li.second-li.second-li-actived");
      let SLI_ACT_A = SLI_ACT.find(".second-li-a-actived");
      let SLI_ACT_IMG = SLI_ACT.find(".second-li-img-actived");
      SLI_ACT_A.removeClass("second-li-a-actived");
      SLI_ACT.removeClass("second-li-actived");
      liImageHover(SLI_ACT_IMG, !1, "second");
    }
    catch (e) { }
  }
}
function menuGenerater(Category) {
  const SIDE_NAV = $(".side-nav");
  let $ul = $("<ul></ul>");
  $ul.appendTo(SIDE_NAV);
  for (var i = 0; i < Category.length; i++) {
    let json = Category[i];
    $('<li class="first-li ' + json.class + '" id=' + i + "></li>").appendTo($ul);
    var $li = $("li#" + i + ".first-li");
    $("<div class=\"first-li-div\"></div>").appendTo($li);
    var $div = $("li#" + i + ".first-li div");
    $div.addClass("first-li-div");
    let $img = $('<img class="first-li-img">');
    $img.attr("src", json.src);
    $img.appendTo($div);
    let $a = $('<a class="first-li-a"></a>');
    $a.html(json.innerhtml);
    $a.appendTo($div);
    let $subul = null;
    if ($li.hasClass("normal")) {
      $subul = $('<ul class="hide"></ul>').appendTo($li);
    }
    else if ($li.hasClass("side")) {
      $subul = $('<ul class="fade"></ul>').appendTo($li);
      $('<div class="arrow-div"></div>').appendTo($subul);
    }
    try {
      for (var j = 0; j < json.subCategory.length; j++) {
        let subjson = json.subCategory[j];
        $('<li class="second-li effect7" id=' + j + "></li>").appendTo($subul);
        var $subli = $li.find($("li#" + j + ".second-li"));
        let $img = $('<img class="second-li-img">');
        $img.attr("src", subjson.src);
        $img.appendTo($subli);
        let $a = $('<a class="second-li-a"></a>');
        $a.html(subjson.innerhtml);
        $a.appendTo($subli);
      }
    }
    catch (e) { }
  }
}