
// function OpenMessage() {
//   document.getElementById("Message").classList.toggle("show");
// }

// function OpenHelp() {
//   document.getElementById("Help").classList.toggle("show");
// }

// function OpenUser() {
//   document.getElementById("User").classList.toggle("show");
// }

// // Fecha o menu se clicar fora
// window.onclick = function(event) {
//   if (!event.target.matches('.hoverbox')) {
//     var dropdowns = document.getElementsByClassName("opened-content");
//     var i;
//     for (i = 0; i < dropdowns.length; i++) {
//       var openDropdown = dropdowns[i];
//       if (openDropdown.classList.contains('show')) {
//         openDropdown.classList.remove('show');
//       }
//     }
//   }
// };

$(window).scroll(function() {    
    var scroll = $(window).scrollTop();
      if (scroll >= 50) {              

        $("#header").addClass("float");    
        $("#nav").addClass("float-nav");
        $(".brand-tex").addClass("brand-float"); 

      } else {
        $("#header").removeClass("float");
        $("#nav").removeClass("float-nav");
        $(".brand-tex").removeClass("brand-float"); 
      }
  });