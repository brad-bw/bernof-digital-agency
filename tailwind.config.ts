
import type { Config } from "tailwindcss";

export default {
	darkMode: ["class"],
	content: [
		"./pages/**/*.{ts,tsx}",
		"./components/**/*.{ts,tsx}",
		"./app/**/*.{ts,tsx}",
		"./src/**/*.{ts,tsx}",
	],
	prefix: "",
	theme: {
		container: {
			center: true,
			padding: '2rem',
			screens: {
				'2xl': '1400px'
			}
		},
		extend: {
			fontFamily: {
				'inter': ['Inter', 'sans-serif'],
				'playfair': ['Playfair Display', 'serif'],
			},
			colors: {
				border: 'hsl(var(--border))',
				input: 'hsl(var(--input))',
				ring: 'hsl(var(--ring))',
				background: 'hsl(var(--background))',
				foreground: 'hsl(var(--foreground))',
				primary: {
					DEFAULT: '#1F5F5B',
					foreground: '#FFFFFF'
				},
				secondary: {
					DEFAULT: '#F8FAFA',
					foreground: '#2A2A2A'
				},
				accent: {
					DEFAULT: '#20B2AA',
					foreground: '#FFFFFF'
				},
				destructive: {
					DEFAULT: 'hsl(var(--destructive))',
					foreground: 'hsl(var(--destructive-foreground))'
				},
				muted: {
					DEFAULT: '#F1F5F9',
					foreground: '#64748B'
				},
				popover: {
					DEFAULT: 'hsl(var(--popover))',
					foreground: 'hsl(var(--popover-foreground))'
				},
				card: {
					DEFAULT: 'hsl(var(--card))',
					foreground: 'hsl(var(--card-foreground))'
				},
				sidebar: {
					DEFAULT: 'hsl(var(--sidebar-background))',
					foreground: 'hsl(var(--sidebar-foreground))',
					primary: 'hsl(var(--sidebar-primary))',
					'primary-foreground': 'hsl(var(--sidebar-primary-foreground))',
					accent: 'hsl(var(--sidebar-accent))',
					'accent-foreground': 'hsl(var(--sidebar-accent-foreground))',
					border: 'hsl(var(--sidebar-border))',
					ring: 'hsl(var(--sidebar-ring))'
				}
			},
			borderRadius: {
				lg: 'var(--radius)',
				md: 'calc(var(--radius) - 2px)',
				sm: 'calc(var(--radius) - 4px)'
			},
			keyframes: {
				'accordion-down': {
					from: {
						height: '0'
					},
					to: {
						height: 'var(--radix-accordion-content-height)'
					}
				},
				'accordion-up': {
					from: {
						height: 'var(--radix-accordion-content-height)'
					},
					to: {
						height: '0'
					}
				},
				'fade-in': {
					from: {
						opacity: '0',
						transform: 'translateY(20px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'float': {
					'0%, 100%': {
						transform: 'translateY(0px)'
					},
					'50%': {
						transform: 'translateY(-10px)'
					}
				},
				'slide-up': {
					from: {
						opacity: '0',
						transform: 'translateY(30px)'
					},
					to: {
						opacity: '1',
						transform: 'translateY(0)'
					}
				},
				'fluid-motion': {
					'0%, 100%': { 
						transform: 'translateY(0px) rotate(0deg)',
						borderRadius: '60% 40% 30% 70% / 60% 30% 70% 40%'
					},
					'33%': { 
						transform: 'translateY(-20px) rotate(120deg)',
						borderRadius: '70% 30% 40% 60% / 50% 60% 30% 70%'
					},
					'66%': { 
						transform: 'translateY(10px) rotate(240deg)',
						borderRadius: '30% 70% 70% 30% / 40% 50% 60% 50%'
					}
				},
				'geometric-float': {
					'0%, 100%': { 
						transform: 'translateY(0px) translateX(0px) scale(1)'
					},
					'33%': { 
						transform: 'translateY(-15px) translateX(10px) scale(1.05)'
					},
					'66%': { 
						transform: 'translateY(5px) translateX(-5px) scale(0.95)'
					}
				}
			},
			animation: {
				'accordion-down': 'accordion-down 0.2s ease-out',
				'accordion-up': 'accordion-up 0.2s ease-out',
				'fade-in': 'fade-in 0.6s ease-out',
				'float': 'float 3s ease-in-out infinite',
				'slide-up': 'slide-up 0.8s ease-out',
				'fluid-motion': 'fluid-motion 25s ease-in-out infinite',
				'geometric-float': 'geometric-float 15s ease-in-out infinite'
			},
			backgroundImage: {
				'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
				'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
			},
			clipPath: {
				'polygon-organic': 'polygon(0% 0%, 100% 0%, 85% 100%, 15% 100%)',
			}
		}
	},
	plugins: [require("tailwindcss-animate")],
} satisfies Config;
