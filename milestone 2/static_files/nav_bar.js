$( document ).ready(function() {
  openNav();
});

 /* Set the width of the side navigation to 250px and the left margin of the page content to 250px */
 function openNav() {
    document.getElementById("mySidenav").style.width = "350px";
    document.getElementById("main").style.marginLeft = "350px";
    document.getElementById("nav_btn").style.display = "none";
  }
  
  /* Set the width of the side navigation to 0 and the left margin of the page content to 0 */
  function closeNav() {
    document.getElementById("mySidenav").style.width = "0";
    document.getElementById("main").style.marginLeft = "0";
    document.getElementById("nav_btn").style.display = "block";
  }