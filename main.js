const nav = document.querySelector(".nav"),
  searchIcon = document.querySelector("#searchIcon"),
  navOpenBtn = document.querySelector(".navOpenBtn"),
  navCloseBtn = document.querySelector(".navCloseBtn");

searchIcon.addEventListener("click", () => {
  nav.classList.toggle("openSearch");
  nav.classList.remove("openNav");
  if (nav.classList.contains("openSearch")) {
    return searchIcon.classList.replace("bx-search", "bx-x");
  }
  searchIcon.classList.replace("bx-x", "bx-search");
});

navOpenBtn.addEventListener("click", () => {
  nav.classList.add("openNav");
  nav.classList.remove("openSearch");
  searchIcon.classList.replace("bx-x", "bx-search");
});
navCloseBtn.addEventListener("click", () => {
  nav.classList.remove("openNav");
});

var swiper = new Swiper(".home", {
        spaceBetween: 30,
        centeredSlides: true,
        autoplay: {
          delay: 5000,
          disableOnInteraction: false,
        },
        pagination: {
          el: ".swiper-pagination",
          clickable: true,
        },
      });

var swiper = new Swiper(".coming-container", {
        spaceBetween: 20,
       loop: true,
        autoplay: {
          delay: 55000,
          disableOnInteraction: false,
        },
        centeredSlides: true,
        breakpoints: {
          0:{
            slidesPerView:2,
            },
          568:{
            slidesPerView:3,
          },
          768:{
           slidesPerView:4, 
          },
          968:{
            slidesPerView:5,
          },
          },
        });
        const productContainers = [...document.querySelectorAll('.product-container')];
const nxtBtn = [...document.querySelectorAll('.nxt-btn')];
const preBtn = [...document.querySelectorAll('.pre-btn')];

productContainers.forEach((item, i) => {
    let containerDimensions = item.getBoundingClientRect();
    let containerWidth = containerDimensions.width;

    nxtBtn[i].addEventListener('click', () => {
        item.scrollLeft += containerWidth;
    })

    preBtn[i].addEventListener('click', () => {
        item.scrollLeft -= containerWidth;
    })
})