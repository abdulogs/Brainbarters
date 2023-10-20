$("#side-logo").html($("#logo-wrapper").html());
$("#sidebar-search").html($("#search-wrapper").html());
$("#sidebar-footer").html($("#logout-menu").html());
function closeSidebar() {
  document.getElementById("sidenav").style.display = "none";
  document.getElementsByTagName('body')[0].style.overflow = "auto";
}
function openSidebar() {
  document.getElementById("sidenav").style.display = "block";
  document.getElementsByTagName('body')[0].style.overflow = "hidden";
}
