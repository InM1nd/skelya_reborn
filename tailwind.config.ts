import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
			fontSize: {
        'sm': ['14px', {
          lineHeight: '1.2'
        }],
        'base': ['16px', {
          lineHeight: '1.2'
        }],
        'lg': ['18px', {
          lineHeight: '1.2'
        }],
        'xl': ['20px', {
          lineHeight: '1.2'
        }],
        '2xl': ['24px', {
          lineHeight: '1.2'
        }],
        '3xl': ['32px', {
          lineHeight: '1.2'
        }],
        '4xl': ['20px', {
          lineHeight: '1.2'
        }]
      },
			screens: {
        xsm: '425px',
      },
  		colors: {
  			background: 'hsl(var(--background))',
  			foreground: 'hsl(var(--foreground))',
  			pink: '#E3B7F5',
  			blue: '#95D4F8',
  			purple: {
  				light: '#B5B0FF',
  				main: '#6D61FF'
  			},
				orange: "#FA6F17",
  			yellow: '#F4D06F',
  			green: '#3FAD78',
  			white: {
  				DEFAULT: '#FFFFFF',
  				'02': '#F3F3F3'
  			},
  			gray: '#232228',
  			black: '#040000',
  			card: {
  				DEFAULT: 'hsl(var(--card))',
  				foreground: 'hsl(var(--card-foreground))'
  			},
  			popover: {
  				DEFAULT: 'hsl(var(--popover))',
  				foreground: 'hsl(var(--popover-foreground))'
  			},
  			primary: {
  				DEFAULT: 'hsl(var(--primary))',
  				foreground: 'hsl(var(--primary-foreground))'
  			},
  			secondary: {
  				DEFAULT: 'hsl(var(--secondary))',
  				foreground: 'hsl(var(--secondary-foreground))'
  			},
  			muted: {
  				DEFAULT: 'hsl(var(--muted))',
  				foreground: 'hsl(var(--muted-foreground))'
  			},
  			accent: {
  				DEFAULT: 'hsl(var(--accent))',
  				foreground: 'hsl(var(--accent-foreground))'
  			},
  			destructive: {
  				DEFAULT: 'hsl(var(--destructive))',
  				foreground: 'hsl(var(--destructive-foreground))'
  			},
  			border: 'hsl(var(--border))',
  			input: 'hsl(var(--input))',
  			ring: 'hsl(var(--ring))',
  			chart: {
  				'1': 'hsl(var(--chart-1))',
  				'2': 'hsl(var(--chart-2))',
  				'3': 'hsl(var(--chart-3))',
  				'4': 'hsl(var(--chart-4))',
  				'5': 'hsl(var(--chart-5))'
  			}
  		},
  		container: {
  			screens: {
					xsm:'425px',
  				sm: '640px',
  				md: '768px',
  				lg: '1024px',
  				xl: '1280px',
  				'2xl': '1536px',
  				'3xl': '1920px',
  				'4xl': '2520px',
  			}
  		},
  		fontFamily: {
  			unbounded: ['var(--font-unbounded)'],
				raleway: ['var(--font-raleway)'],
  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		}
  	}
  },
  // eslint-disable-next-line @typescript-eslint/no-require-imports
  plugins: [require("tailwindcss-animate")],
};

export default config;

