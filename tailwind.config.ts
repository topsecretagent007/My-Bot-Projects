import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      '4xs': '280px',
      // => @media (min-width: 280px) { ... }
      '3.5xs': '320px',
      // => @media (min-width: 320px) { ... }
      '3xs': '375px',
      // => @media (min-width: 375px) { ... }
      '2xs': '414px',
      // => @media (min-width: 414px) { ... }
      xs: '520px',
      // => @media (min-width: 414px) { ... }
      sm: '640px',
      // => @media (min-width: 640px) { ... }
      sm2: '724px',
      // => @media (min-width: 724px) { ... }
      md: '768px',
      // => @media (min-width: 768px) { ... }
      md2: '896px',
      // => @media (min-width: 896px) { ... }
      lg: '1024px',
      // => @media (min-width: 1024px) { ... }
      lg2: '1158px',
      // => @media (min-width: 1024px) { ... }
      xl: '1280px',
      // => @media (min-width: 1280px) { ... }
      '1.5xl': '1348px',
      // => @media (min-width: 1348px) { ... }
      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
      '3xl': '1820px'
      // => @media (min-width: 1820px) { ... }
    },
    extend: {
      colors: {
        primary: {
          100: "#E4F5F2",
          200: "#10A678",
          300: "#2A896B",
          400: "#5FBB9E ",
          500: "#435854",
          600: "#34554C",
          700: "#071B17",
        },
        secondary: {
          100: "#507A6E",
        },
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      boxShadow: {
        "btn-inner": "0px 0px 2px 2px #5FBB9E inset",
        box: "6px -6px 44px 0px rgba(35, 68, 58, 0.20) inset",
        btn: "4px 4px 21px 0px rgba(7, 30, 26, 0.50) inset",
        deposit: "0px -6px 22px 2px #89FFD9 inset",
      },
      animation: {
        bounceY: 'bounceY 2s infinite', // Name, duration, and repeat
      },
      keyframes: {
        bounceY: {
          '0%, 100%': { transform: 'translateY(0)' }, // Start and end position
          '50%': { transform: 'translateY(-20px)' }, // Middle position
        },
      },
    },
  },
  plugins: [require('@tailwindcss/aspect-ratio')],
};
export default config;
