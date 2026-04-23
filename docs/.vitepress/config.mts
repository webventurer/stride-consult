import { defineConfig } from 'vitepress'

export default defineConfig({
  title: 'stride consult',
  description: 'Consultancy package — step first, then stride.',
  base: '/stride-consult/',
  themeConfig: {
    nav: [
      { text: 'Consultancy', link: '/consultancy/step-first-then-stride' },
      { text: 'What is it?', link: '/consultancy/what-is-it' },
      { text: 'How much?', link: '/consultancy/how-much' },
      { text: 'Testimonials', link: '/consultancy/testimonials' },
    ],
    sidebar: [
      {
        text: 'Consultancy',
        items: [
          { text: 'Step first — then Stride', link: '/consultancy/step-first-then-stride' },
          { text: 'What is it?', link: '/consultancy/what-is-it' },
          { text: 'How much?', link: '/consultancy/how-much' },
          { text: 'Procurement and privacy', link: '/consultancy/procurement' },
          { text: 'About', link: '/consultancy/about' },
          { text: 'Glossary', link: '/consultancy/glossary' },
          { text: 'Testimonials', link: '/consultancy/testimonials' },
        ],
      },
      {
        text: 'Reference',
        items: [
          { text: 'Agentic engineering', link: '/reference/agentic-engineering' },
          { text: 'Kanban process', link: '/reference/kanban' },
          { text: 'Issue statuses', link: '/reference/issue-statuses' },
          { text: 'Issue template', link: '/reference/issue-template' },
          { text: 'Chris Beams commit style', link: '/reference/commit-style' },
        ],
      },
    ],
  },
})
