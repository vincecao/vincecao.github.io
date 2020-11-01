let $background = $(".background");
let imageArray = [];
let imageIndex = 0;
$(document).ready(function () {
  console.log("Oops, you have found me!");
});
$(document.body)
  .on("mouseenter", "a", function () {
    $(this).addClass("hover");
    $(this).addClass("speedup");
  })
  .on("mouseleave", "a", function () {
    $(this).removeClass("hover");
    $(this).removeClass("speedup");
  });

function changeImage() {
  $background.css("background-image", "url(" + imageArray[imageIndex] + ")");
  setTimeout(function () {
    $background.removeClass("hide");
    $("a").css("color", "white");
  }, 1500);
  setTimeout(function () {
    $background.addClass("hide");
    $("a").css("color", "black");
  }, 5000);
  imageIndex = (imageIndex + 1) % imageArray.length;
}
setInterval(changeImage, 10000);

const getFlickr = async function () {
  try {
    return await axios.get(
      "//aws.vince-amazing.com/api/appMode/Flickr/method/getPhotosets/userId/133917825%40N06/photosetId/72157711412376006"
    );
  } catch (error) {
    console.error(error);
  }
};

const showFlickr = async function () {
  const imgs = await getFlickr();

  if (imgs.data.flickr_list) {
    imageArray = imgs.data.flickr_list;
    // console.log(imageArray)
    setTimeout(function () {
      changeImage;
    }, 500);
  }
};

showFlickr();
