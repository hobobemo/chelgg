import { defineContentConfig, defineCollection } from '@nuxt/content'

export default defineContentConfig({
  collections: {
    content: defineCollection({
      type: 'page',
      source: '**/*.yml'
    }),
    documentation: defineCollection({
      type: 'page',
      source: '**/*.md'
    })
  },
  documentDriven: true, // Enables auto routing based on file structure
})