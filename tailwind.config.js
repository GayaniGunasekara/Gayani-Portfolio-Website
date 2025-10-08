/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,jsx,ts,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                brand: '#0ea5a4', // teal-ish accent (adjust)
                accent: '#6366f1' // purple accent
            },
            container: {
                center: true,
                padding: '1.25rem'
            }
        },
    },
    plugins: [],
}

