// year
document.getElementById("year").innerHTML = new Date().getFullYear();
const links = document.getElementById("nav-menu").innerHTML;
document.getElementById("side-menu").innerHTML = links;


function closeSidebar() {
  document.getElementById("sidenav").style.width = "0px";
  document.getElementsByTagName('body')[0].style.overflow = "auto";
}

function openSidebar() {
  document.getElementById("sidenav").style.width = "100%";
  document.getElementsByTagName('body')[0].style.overflow = "hidden";
}



function scrollToTop() {
  document.getElementsByTagName('body')[0].scrollTop = 0;
}


window.onscroll = function() {
  scrollFunction()
};

function scrollFunction() {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    $("#navbar").addClass("navbar-light");
    $("#navbar").removeClass("navbar-transparent");
    $('#logo').prop('src', 'admin/uploads/logo/logo-dark.png');
  } else {
    $("#navbar").removeClass("navbar-light");
    $("#navbar").addClass("navbar-transparent");
    $('#logo').prop('src', 'admin/uploads/logo/logo-light.png');
  }
}
