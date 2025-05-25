import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './components/**/*.{vue,js}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './app.vue',
    './content/**/*.md'
  ],
  theme: {
    extend: {}
  },
  plugins: [
    require('@tailwindcss/typography')
  ]
}

export default config
