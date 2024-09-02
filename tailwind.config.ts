import type { Config } from "tailwindcss";

const config: Config = {
    darkMode: ["class"],
    content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
  	extend: {
		keyframes:{
			'line':{
				'0%':{ width : '0%'},
				'100%':{width :'100%'},
			},
			'node':{
				'0%':{ left: '0%'},
				'100%':{ left: '100%'},
			}
		},
		animation:{
			'line':'line 2s forward',
			'node':'node 2s forward',
		},
		fontFamily: {
			poppins:['Poppins','sans-serif'],
			// Add more fonts if needed
		  },
  		backgroundImage: {
  			'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
  			'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',


  		},
  		borderRadius: {
  			lg: 'var(--radius)',
  			md: 'calc(var(--radius) - 2px)',
  			sm: 'calc(var(--radius) - 4px)'
  		},
  		colors: {
			background:'#02010a',
			foreground:"#C5CBE3",
			bluecolor:"#88bdbc",

		}
  	}
  },
  plugins: [require("tailwindcss-animate")],
};
export default config;
