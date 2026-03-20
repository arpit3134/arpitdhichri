import { create } from 'zustand'

interface BookmarkState {
  bookmarks: Record<string, boolean>
  toggleBookmark: (id: string, type: string) => void
  isBookmarked: (id: string, type: string) => boolean
}

export const useStore = create<BookmarkState>((set, get) => ({
  bookmarks: {},
  
  toggleBookmark: (id: string, type: string) => {
    const key = `${type}_${id}`
    const current = get().bookmarks[key]
    const newValue = !current
    
    set((state) => ({
      bookmarks: { ...state.bookmarks, [key]: newValue }
    }))
    
    localStorage.setItem(`bookmark_${key}`, String(newValue))
  },
  
  isBookmarked: (id: string, type: string) => {
    const key = `${type}_${id}`
    return get().bookmarks[key] || false
  }
}))