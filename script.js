// Menu
const menu_btn = document.querySelector(".menu__btn");
const burger_icon = document.querySelector("#burger__icon");
const search_icon = document.querySelector(".search__icon");
const logo = document.querySelector(".logo");
const menu = document.querySelector(".menu");
const menu_wrapper = document.querySelector(".menu--wrapper");
const body = document.querySelector("body");
const top_layer = document.querySelectorAll(".top__layer");

let isMenuActive = false;

menu_btn.addEventListener("click", () => {
    menu.classList.toggle("menu__active");

    burger_icon.classList.toggle("burger__icon__pressed");
    burger_icon.classList.toggle("burger__icon");

    top_layer.forEach((el) => {
        el.classList.toggle("layer__active");
    });

    if (isMenuActive) {
        gsap.to(".el__transition--home", {
            duration: 1,
            color: "#513D2A",
        });
        gsap.to(".el__transition", {
            duration: 1,
            backgroundColor: "#513D2A",
        });
        gsap.to(".menu", {
            duration: 0.5,
            transform: "translateY(40px)",
            opacity: 0,
            display: "none",
            ease: "power1",
        });
        gsap.to(".menu__wrapper", {
            duration: 1,
            display: "hidden",
            ease: "power1",
        });

        gsap.to(".search__icon--svg", { duration: 1, fill: "#513D2A" });

        gsap.to(".bg__menu", {
            duration: 0.5,
            scale: 0,
            delay: 0.2,
        });
    } else {
        gsap.to(".el__transition--home", {
            duration: 1,
            color: "#fff",
        });
        gsap.to(".el__transition", {
            duration: 1,
            backgroundColor: "#fff",
        });
        gsap.to(".menu", {
            duration: 0.5,
            transform: "translateY(0px)",
            opacity: 1,
            display: "flex",
        });
        gsap.to(".menu__wrapper", {
            duration: 1,
            display: "block",
            ease: "power1",
        });

        gsap.to(".search__icon--svg", { duration: 1, fill: "#fff" });

        gsap.to(".bg__menu", {
            duration: 0.5,
            scale: 10,
        });

        const scrollbar = document.querySelector("body::-webkit-scrollbar");

        gsap.to(scrollbar, {
            duration: 1,
            autoAlpha: 0,
        });
    }

    isMenuActive = isMenuActive ? false : true;
    console.log(isMenuActive);

    body.classList.toggle("overflow-hidden");
});

const menu_list = document.querySelectorAll(".menu__item");

menu_list.forEach((el) => {
    el.addEventListener("mouseenter", () => {
        gsap.to(el, { duration: 0.5, opacity: 1, y: -20 });
    });

    el.addEventListener("mouseleave", () => {
        gsap.to(el, { duration: 0.5, opacity: 1, y: 0 });
    });
});

gsap.to(".marquee", {
    xPercent: -100,
    repeat: -1,
    duration: 5,
    ease: "linear",
});

const circle = document.querySelector(".circle");

document.addEventListener("mousemove", (event) => {
    gsap.to(circle, { duration: 0.5, x: event.clientX, y: event.clientY });
});
