var prevScrollpos = window.pageYOffset;
window.onscroll = function () {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    if ($(window).width() > 600) {
      document.getElementById("navbar").style.top = "-70px";
    } else {
      document.getElementById("navbar").style.top = "-96px";
    }
  }
  prevScrollpos = currentScrollPos;
};

$(".navbar-nav>li>a").on("click", function () {
  $(".navbar-collapse").collapse("hide");
});

window.onload = function () {
  $(".work-section__card-spacer").each(function (spacer) {
    $(this).height($(".work-section__card-mockup--static").height() + 12);
  });
};

$(".nav-link").on("click", function () {
  $(".active").removeClass("active");
  $(this).addClass("active");
});

var selector = ".nav-item a";
$(window).scroll(function () {
  if (screen.width > 768) {
    onScrollt(selector);
  }
});

function onScrollt(selector) {
  var scrollPos = $(document).scrollTop();
  $(selector).each(function () {
    var currLink = $(this);
    var refElement = $(currLink.attr("href"));
    if (refElement.length) {
      if (
        parseInt(refElement.position().top) <= scrollPos + 250 &&
        parseInt(refElement.position().top) + parseInt(refElement.height()) >
          scrollPos + 250
      ) {
        currLink.removeClass("active");
        currLink.addClass("active");
      } else {
        currLink.removeClass("active");
      }
    }
  });
}
