/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                c_Soft_orange: "hsl(35, 77%, 62%)",
                c_Soft_red: "hsl(5, 85%, 63%)",
                c_Off_white: "hsl(36, 100%, 99%)",
                c_Grayish_blue: "hsl(233, 8%, 79%)",
                c_Dark_grayish_blue: "hsl(236, 13%, 42%)",
                c_Very_dark_blue: "hsl(240, 100%, 5%)",
            },
            fontFamily: {
                inter: ["Inter", "sans-serif"]
            }
        },
    },
    plugins: [],
}

