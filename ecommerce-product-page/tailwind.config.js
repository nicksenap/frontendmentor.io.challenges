const colors = require('tailwindcss/colors')

module.exports = {
    purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                kumbhsans: ['Kumbh Sans'],
            },
        },
        colors: {
            primaryOrange: 'hsl(26, 100%, 55%)',
            primaryPaleOrange: 'hsl(25, 100%, 94%)',
            neutralVeryVarkBlue: 'hsl(210, 100%, 95%)',
            neutralDarkGrayishBlue: 'hsl(219, 9%, 45%)',
            neutralGrayishBlue: 'hsl(220, 14%, 75%)',
            neutralLightGrayishBlue: 'hsl(223, 64%, 98%)',
            // - Very vark blue: hsl(220, 13%, 13%)
            // - Dark grayish blue: hsl(219, 9%, 45%)
            // - Grayish blue: hsl(220, 14%, 75%)
            // - Light grayish blue: hsl(223, 64%, 98%)
            // - White: hsl(0, 0%, 100%)
            // - Black (with 75% opacity for lightbox background): hsl(0, 0%, 0%)
        },
    },
    variants: {
        extend: {},
    },
    plugins: [],
}
