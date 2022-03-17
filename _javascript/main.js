document.addEventListener('DOMContentLoaded', () => {
  console.log('Hello Bulma!');
});

const hamburger = document.querySelector(".hamburger");
const navMenu = document.querySelector(".nav-menu");

hamburger.addEventListener("click", mobileMenu);

function mobileMenu() {
    hamburger.classList.toggle("active");
    navMenu.classList.toggle("active");
}


// Smooth Scrolling
$(".nav-link").on("click", function(event){
  if (this.hash !== "") {
      event.preventDefault();
      const hash = this.hash;
      $("html, body").animate(
          {
              scrollTop: $(hash).offset().top
          },
          1800
      );
  }
});

