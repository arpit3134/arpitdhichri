import { useState } from 'react'
import { Bookmark } from 'lucide-react'
import { cn } from '@/lib/utils'

interface BookmarkButtonProps {
  itemId: string
  itemType: 'article' | 'tool' | 'calculator'
  className?: string
}

export function BookmarkButton({ itemId, itemType, className }: BookmarkButtonProps) {
  const [isBookmarked, setIsBookmarked] = useState(() => {
    const saved = localStorage.getItem(`bookmark_${itemType}_${itemId}`)
    return saved === 'true'
  })

  const toggleBookmark = () => {
    const newState = !isBookmarked
    setIsBookmarked(newState)
    localStorage.setItem(`bookmark_${itemType}_${itemId}`, String(newState))
  }

  return (
    <button
      onClick={toggleBookmark}
      className={cn(
        'p-2 rounded-full hover:bg-muted transition-colors',
        isBookmarked && 'text-primary',
        className
      )}
      aria-label={isBookmarked ? 'Remove bookmark' : 'Add bookmark'}
    >
      <Bookmark className={cn('h-5 w-5', isBookmarked && 'fill-current')} />
    </button>
  )
}