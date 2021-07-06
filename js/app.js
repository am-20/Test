$("input[type=range]").wrap("<div class='range'></div>");
var i = 1;

$(".range").each(function () {
  var n = this.getElementsByTagName("input")[0].value;
  var x =
    (n / 100) * (this.getElementsByTagName("input")[0].offsetWidth - 8) - 12;
  this.id = "range" + i;
  if (this.getElementsByTagName("input")[0].value == 0) {
    this.className = "range";
  } else {
    this.className = "range rangeM";
  }
  this.innerHTML +=
    "<style>#" +
    this.id +
    " .shape {background:linear-gradient(to right, rgba(204, 177, 241, 1) 0%, rgba(204, 177, 241, 1) " +
    n +
    "%, rgba(28, 28, 28, 0.102) " +
    n +
    "%)} ";
  i++;
});

$("input[type=range]").on("input", function () {
  var a = this.value;
  var p = (a / 100) * (this.offsetWidth - 8) - 12;
  if (a == 0) {
    this.parentNode.className = "range";
  } else {
    this.parentNode.className = "range rangeM";
  }
  this.parentNode.getElementsByTagName("style")[0].innerHTML +=
    "#" +
    this.parentNode.id +
    " .shape {background:linear-gradient(to right, rgba(204, 177, 241, 1) 0%, rgba(67, 89, 147, 1) " +
    a +
    "%, rgba(28, 28, 28, 0.102) " +
    a +
    "%)}" 
});

;

$(".navbar a").on("click", function(){
    $(".navbar").find(".active").removeClass("active");
    $(this).addClass("active");
 });



 const hamburger = document.querySelector(".hamburger");
 const navMenu = document.querySelector(".navbar");
 
 hamburger.addEventListener("click", mobileMenu);
 
 function mobileMenu() {
     hamburger.classList.toggle("active");
     navMenu.classList.toggle("active");
 }

 const navLink = document.querySelectorAll(".links");

navLink.forEach(n => n.addEventListener("click", closeMenu));

function closeMenu() {
    hamburger.classList.remove("active");
    navMenu.classList.remove("active");
}