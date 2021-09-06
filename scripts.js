/* Cookies */
const buttonAcceptCookies = document.getElementById(
  "btn-accept-cookie"
);
const cookiesBanner = document.getElementById("cookies__banner");
const backgroundCookies = document.getElementById(
  "background__cookies"
);

/*if cookies has not accepted*/
if (!localStorage.getItem("cookies-accepted")) {
  cookiesBanner.classList.add("active");
  backgroundCookies.classList.add("active");
}

/*Click btn to ocult banner an background*/
buttonAcceptCookies.addEventListener("click", () => {
  cookiesBanner.classList.remove("active");
  backgroundCookies.classList.remove("active");

  localStorage.setItem("cookies-accepted", true);
});

/*Scroll to top */
const scrollTop = document.getElementById(
  "scroll-to-top__button"
);

const pxInit = () =>
  document.documentElement.scrollTop || document.body.scrollTop;

const toTop = () => {
  if (pxInit() > 0) {
    scrollTo(0, 0);
  }
};

const showToTop = () => {
  if (pxInit() > 100) {
    scrollTop.className = "show__scroll";
  } else {
    scrollTop.className = "ocult";
  }
};

scrollTop.addEventListener("click", toTop);
window.addEventListener("scroll", showToTop);

/*PRELOADER*/

window.addEventListener("load", () => {
  const loaderContainer = document.querySelector(
    ".loader-container"
  );
  loaderContainer.style.opacity = 0;
  loaderContainer.style.visibility = "hidden";
});
