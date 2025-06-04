let lastScrollTop = 0;
const header = document.querySelector(".header");

window.addEventListener("scroll", function () {
  const scrollTop = window.pageYOffset || document.documentElement.scrollTop;
  if (scrollTop > lastScrollTop) {
    // Scrolling down
    header.style.transform = "translateY(-100%)";
  } else {
    // Scrolling up
    header.style.transform = "translateY(0)";
  }
  lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
});

// Optional: Add smooth transition in your CSS
// .header { transition: transform 0.3s ease; }

const hamburger = document.querySelector(".hamburger-menu");

const offScreenMenu = document.querySelector(".off-screen-menu");

const reticolo = document.querySelector(".reticolo-mobile");

const cerchio = document.querySelector(".mobile-circle");

const cerchio3 = document.querySelector(".mobile-circle3");

const innerHeader = document.querySelector(".inner-header");

hamburger.addEventListener("click", function () {
  offScreenMenu.classList.toggle("active");
  hamburger.classList.toggle("active");
  header.classList.toggle("active");
  innerHeader.classList.toggle("deactivated");
  reticolo.classList.toggle("deactivated");
  cerchio.classList.toggle("deactivated");
  cerchio3.classList.toggle("deactivated");
  document.body.classList.toggle("no-scroll");
});

const comingSoonBtn = document.querySelector(".coming-soon-btn");
if (comingSoonBtn) {
  comingSoonBtn.addEventListener("click", function () {
    alert("Coming Soon, Stay Tuned!");
  });
}
