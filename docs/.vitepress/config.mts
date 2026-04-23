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
          { text: 'The offer', link: '/consultancy/the-offer' },
          { text: 'Procurement, privacy, and pricing', link: '/consultancy/procurement' },
          { text: 'About', link: '/consultancy/about' },
          { text: 'Glossary', link: '/consultancy/glossary' },
          { text: 'Testimonials', link: '/consultancy/testimonials' },
        ],
      },
    ],
  },
})
