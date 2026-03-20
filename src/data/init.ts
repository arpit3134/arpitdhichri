import { articles, tools, calculators, topics, collections, resources } from './mockData'

export function initializeData() {
  // Load bookmarks from localStorage
  const storedBookmarks: Record<string, boolean> = {}
  
  for (let i = 0; i < localStorage.length; i++) {
    const key = localStorage.key(i)
    if (key?.startsWith('bookmark_')) {
      const value = localStorage.getItem(key)
      if (value) {
        storedBookmarks[key.replace('bookmark_', '')] = value === 'true'
      }
    }
  }
  
  return {
    articles,
    tools,
    calculators,
    topics,
    collections,
    resources,
    bookmarks: storedBookmarks
  }
}