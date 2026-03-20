export interface Topic {
  id: string
  name: string
  slug: string
  description: string
  articleCount: number
  icon: string
  color: string
}

export interface Article {
  id: string
  title: string
  excerpt: string
  topicId: string
  topicName: string
  readTime: number
  publishedAt: string
  featured: boolean
}

interface Store {
  topics: Topic[]
  articles: Article[]
}

const store: Store = {
  topics: [],
  articles: [],
}

export const getTopics = (): Topic[] => store.topics || []
export const getArticles = (): Article[] => store.articles || []

export const getFeaturedArticles = (): Article[] =>
  (store.articles || []).filter(a => a.featured)

export const getArticlesByTopic = (topicId: string): Article[] =>
  (store.articles || []).filter(a => a.topicId === topicId)

export const setTopics = (topics: Topic[]) => {
  store.topics = topics || []
}

export const setArticles = (articles: Article[]) => {
  store.articles = articles || []
}