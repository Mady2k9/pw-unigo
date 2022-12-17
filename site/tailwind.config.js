const colors = require('tailwindcss/colors')

module.exports = {
    plugins: [require('@tailwindcss/line-clamp'), require('tailwind-scrollbar-hide'), require('@tailwindcss/forms')],
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './modules/**/*.{js,ts,jsx,tsx}',
        './shared/**/*.{js,ts,jsx,tsx}',
    ],
    safelist: ['outline-none'],
    theme: {
        extend: {
            aspectRatio: {
                'video': '16/9',
            },
            maxWidth: {
                '8xl': '1920px',
            },
            minWidth: {
                'sidebar': '280px',
            },
            padding: {
                sidebar: '0 0 0 280px',
            },
            width: {
                sidebar: '280px',
            },
            animation: {
                fadeBeat: 'fadeBeat 2s infinite',
                highlight: 'highlight 1500ms ease-out',
            },
            keyframes: theme => ({
                fadeBeat: {
                    '0%': {opacity: 1},
                    '50%': {opacity: 0.2},
                    '100%': {opacity: 1},
                },
                highlight: {
                    '0%': {background: '#B6A5FB'},
                    '100%': {background: '#ffffff'},
                },
            }),
            colors: {
                answered: '#58AD32',
                bookmarked: '#5029A0',
                noted: '#666666',
                notAnswered: '#CF5023',
                markedForReview: '#5029A0',
                notVisited: '#aaaaaa',
                indigo: {
                    50: '#D8CFFD',
                    100: '#CCC1FC',
                    200: '#B6A5FB',
                    300: '#9F89FA',
                    400: '#896EF8',
                    500: '#7252F7',
                    600: '#6045CF',
                    700: '#4E38A8',
                    800: '#3B2B80',
                    900: '#291E59',
                },
                primary: 'var(--primary)',
                success: 'var(--success)',
                'primary-2': 'var(--primary-2)',
                secondary: 'var(--secondary)',
                'secondary-2': 'var(--secondary-2)',
                hover: 'var(--hover)',
                'hover-1': 'var(--hover-1)',
                'hover-2': 'var(--hover-2)',
                'accent-0': 'var(--accent-0)',
                'accent-1': 'var(--accent-1)',
                'accent-2': 'var(--accent-2)',
                'accent-3': 'var(--accent-3)',
                'accent-4': 'var(--accent-4)',
                'accent-5': 'var(--accent-5)',
                'accent-6': 'var(--accent-6)',
                'accent-7': 'var(--accent-7)',
                'accent-8': 'var(--accent-8)',
                'accent-9': 'var(--accent-9)',
                violet: 'var(--violet)',
                'violet-light': 'var(--violet-light)',
                'violet-dark': 'var(--violet-dark)',
                pink: colors.pink,
                red: colors.red,
                green: colors.green,
                blue: colors.blue,
                'pink-light': 'var(--pink-light)',
                cyan: 'var(--cyan)',
            },
            textColor: {
                primary: 'var(--text-primary)',
                secondary: 'var(--text-secondary)',
            },
            boxShadow: {
                'outline-normal': '0 0 0 2px var(--accent-2)',
                'all-round': '0px 3px 10px rgba(0, 0, 0, 0.09)',
                'all-round-red': '1px 4px 12px rgba(218, 60, 60, 0.30)',
                'all-round-primary': '0px 3px 10px #B2A9FF',
                'all-round-strong': '1px 4px 12px rgba(0, 0, 0, 0.2)',
                magical:
                    'rgba(0, 0, 0, 0.02) 0px 30px 30px, rgba(0, 0, 0, 0.03) 0px 0px 8px, rgba(0, 0, 0, 0.05) 0px 1px 0px',
            },
            lineHeight: {
                'extra-loose': '2.2',
            },
            scale: {
                120: '1.2',
            },
        },
    },
}
