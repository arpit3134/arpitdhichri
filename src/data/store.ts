import { create } from 'zustand'
import { Article, Tool, Calculator, Topic, Collection, Resource } from '@/types'
import { initializeData } from './init'

interface AppState {
  articles: Article[]
  tools: Tool[]
  calculators: Calculator[]
  topics: Topic[]
  collections: Collection[]
  resources: Resource[]
  bookmarks: Record<string, boolean>
  searchQuery: string
  setSearchQuery: (query: string) => void
  addBookmark: (id: string, type: string) => void
  removeBookmark: (id: string, type: string) => void
  isBookmarked: (id: string, type: string) => boolean
}

const initialData = initializeData()

export const useAppStore = create<AppState>((set, get) => ({
  articles: initialData.articles,
  tools: initialData.tools,
  calculators: initialData.calculators,
  topics: initialData.topics,
  collections: initialData.collections,
  resources: initialData.resources,
  bookmarks: initialData.bookmarks,
  searchQuery: '',
  
  setSearchQuery: (query) => set({ searchQuery: query }),
  
  addBookmark: (id, type) => {
    const key = `${type}_${id}`
    set((state) => ({
      bookmarks: { ...state.bookmarks, [key]: true }
    }))
    localStorage.setItem(`bookmark_${key}`, 'true')
  },
  
  removeBookmark: (id, type) => {
    const key = `${type}_${id}`
    set((state) => {
      const { [key]: _, ...rest } = state.bookmarks
      return { bookmarks: rest }
    })
    localStorage.removeItem(`bookmark_${key}`)
  },
  
  isBookmarked: (id, type) => {
    const key = `${type}_${id}`
    return get().bookmarks[key] || false
  }
}))