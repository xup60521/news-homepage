import gsap from "gsap";

const page = document.getElementById("page");
const mobileNav = document.getElementById("mobile-nav");

mobileNav?.addEventListener("click", (e) => e.stopPropagation());

document.querySelector("img#menu")?.addEventListener("click", (e) => {
    e.stopPropagation();
    openMenu()
});

document.getElementById("close-menu-btn")?.addEventListener("click", (e) => {
    e.stopPropagation()
    closeMenu()
})

window.addEventListener("click", () => {
    closeMenu()
});

const mobileNavButtons = gsap.utils.toArray<HTMLButtonElement>("#mobile-nav button")
mobileNavButtons.forEach(item => {
    item.addEventListener("click", () => {
        closeMenu()
    })
})

function openMenu() {
    if (!page || !mobileNav) return;
    page.style.filter = "brightness(.5)";
    mobileNav.style.display = "flex";
    gsap.fromTo(mobileNav, { x: "100%" }, { x: 0, duration: 0.1 });
}

function closeMenu() {
    if (!page || !mobileNav) return;
    page.style.filter = "";
    mobileNav.style.transform = "translateX(100%);";
    gsap.to(mobileNav, { x: "100%", duration: 0.1 });
}

