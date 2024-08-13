# **Frontend Mentor Challenge - News homepage**

This is a solution to the [News homepage challenge on Frontend Mentor](https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl "https://www.frontendmentor.io/challenges/news-homepage-H6SWTa1MFl").

## Table of contents

- [Overview](#overview)

- [My process](#my-process)

   - [Built with](#built-with)

   - [What I learned](#what-i-learned)

      - [Menu open animation](#menu-open-animation)

- [Resources](#resources)

## Overview

Users should be able to:

- View the optimal layout for the interface depending on their device's screen size

- See hover and focus states for all interactive elements on the page

Links:

- GitHub Repo: <https://github.com/xup60521/news-homepage>

- Website: <https://xup60521.github.io/news-homepage/>

```bash
# install dependencies
pnpm install
# start vite dev server
pnpm run dev
# build (output path /dist)
pnpm run build
```

## My process

### Built with

- Semantic HTML5 markup

- TailwindCSS

- Vite - for bundling assets

- GSAP - for animation

### What I learned

#### Menu open animation

```ts
import gsap from "gsap";

const page = document.getElementById("page");
const mobileNav = document.getElementById("mobile-nav");

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
```

By binding these functions to the `click` event, the animation should be played as expected.

## Resources

- TailwindCSS Docs - <https://tailwindcss.com/docs>

- Google Fonts - <https://fonts.google.com>

- GSAP docs - <https://gsap.com/docs/v3/>