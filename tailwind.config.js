/** @type {import('tailwindcss').Config} */
export default {
    content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
    theme: {
        extend: {
            keyframes: {
                slideUp: {
                    '0%': { bottom: '-25px', opacity: '0.2' },
                    '100%': { bottom: '0px', opacity: '1' },
                },
            },
            animation: {
                slideUp: 'slideUp 0.5s ease-in-out forwards',
            },
        },
    },
    plugins: [],
}
