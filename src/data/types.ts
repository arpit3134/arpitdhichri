export interface Article {
  id: string
  title: string
  slug: string
  excerpt: string
  content: string
  coverImage: string
  author: string
  publishedAt: string
  readTime: number
  tags: string[]
  topics: string[]
}

export interface Tool {
  id: string
  name: string
  slug: string
  description: string
  category: string
  website: string
  logo?: string
  pricing: 'free' | 'freemium' | 'paid'
  rating: number
  tags: string[]
  featured: boolean
}

export interface Calculator {
  id: string
  name: string
  slug: string
  description: string
  category: string
  formula: string
  tags: string[]
  featured: boolean
}

export interface Topic {
  id: string
  name: string
  slug: string
  description: string
  icon: string
  count: number
}

export interface Collection {
  id: string
  name: string
  slug: string
  description: string
  coverImage: string
  items: string[]
  type: 'articles' | 'tools' | 'mixed'
}

export interface Resource {
  id: string
  title: string
  slug: string
  description: string
  type: 'guide' | 'template' | 'ebook' | 'video'
  downloadUrl?: string
  embedUrl?: string
  thumbnail: string
  tags: string[]
}