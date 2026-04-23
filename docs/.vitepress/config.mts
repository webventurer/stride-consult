import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'stride consult',
  description: 'Consultancy package — step first, then stride.',
  base: '/stride-consult/',
  themeConfig: {
    nav: [
      { text: 'Consultancy', link: '/consultancy/step-first-then-stride' },
    ],
    sidebar: [
      {
        text: 'Consultancy',
        items: [
          { text: 'Step first — then Stride', link: '/consultancy/step-first-then-stride' },
          { text: 'Testimonials', link: '/consultancy/testimonials' },
        ],
      },
    ],
  },
})
