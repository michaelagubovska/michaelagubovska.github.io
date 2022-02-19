mybutton = document.getElementById("topBtn");

window.onscroll = function() {scrollFunction()};

function scrollFunction() {
  if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
    mybutton.style.display = "block";
  } else {
    mybutton.style.display = "none";
  }
}

function topFunction() {
  document.body.scrollTop = 0;
  document.documentElement.scrollTop = 0;
}


function changeBackcolor() {
   document.getElementById("navbar").style.backgroundColor = "rgba(255, 255, 255, 0.7)";
}


var prevScrollpos = window.pageYOffset;
window.onscroll = function() {
  var currentScrollPos = window.pageYOffset;
  if (prevScrollpos > currentScrollPos) {
    document.getElementById("navbar").style.top = "0";
  } else {
    document.getElementById("navbar").style.top = "-55px";
  }
  prevScrollpos = currentScrollPos;

  if ($(window).width() < 768) {
	  document.getElementById("navbar").style.backgroundColor = "transparent";
	  $('.navbar-collapse').collapse('hide');
	}
}

$('.navbar-nav>li>a').on('click', function(){
    $('.navbar-collapse').collapse('hide');
});