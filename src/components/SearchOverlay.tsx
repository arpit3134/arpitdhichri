import { useEffect, useState } from 'react'
import { Search, X, ArrowRight } from 'lucide-react'
import { Link } from 'react-router-dom'
import { articles, tools, calculators } from '@/data/mockData'

interface SearchOverlayProps {
  isOpen: boolean
  onClose: () => void
}

export function SearchOverlay({ isOpen, onClose }: SearchOverlayProps) {
  const [query, setQuery] = useState('')
  const [results, setResults] = useState<any[]>([])

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose()
    }
    if (isOpen) {
      document.addEventListener('keydown', handleEsc)
      document.body.style.overflow = 'hidden'
    }
    return () => {
      document.removeEventListener('keydown', handleEsc)
      document.body.style.overflow = ''
    }
  }, [isOpen, onClose])

  useEffect(() => {
    if (query.trim() === '') {
      setResults([])
      return
    }

    const searchResults = [
      ...articles.filter(a => a.title.toLowerCase().includes(query.toLowerCase())),
      ...tools.filter(t => t.name.toLowerCase().includes(query.toLowerCase())),
      ...calculators.filter(c => c.name.toLowerCase().includes(query.toLowerCase())),
    ].slice(0, 8)

    setResults(searchResults)
  }, [query])

  if (!isOpen) return null

  return (
    <div className="fixed inset-0 z-50 bg-background/95 backdrop-blur-sm">
      <div className="container max-w-2xl pt-20">
        <div className="relative">
          <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
          <input
            type="text"
            placeholder="Search articles, tools, calculators..."
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            autoFocus
            className="w-full pl-12 pr-12 py-4 text-lg rounded-xl border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <button
            onClick={onClose}
            className="absolute right-4 top-1/2 -translate-y-1/2 p-1 rounded-lg hover:bg-muted"
          >
            <X className="h-5 w-5" />
          </button>
        </div>

        {results.length > 0 && (
          <div className="mt-8 space-y-2">
            <p className="text-sm text-muted-foreground">Results</p>
            {results.map((result) => (
              <Link
                key={result.id}
                to={`/${result.title ? 'articles' : result.name ? 'tools' : 'calculators'}/${result.id}`}
                onClick={onClose}
                className="flex items-center justify-between p-4 rounded-lg hover:bg-muted transition-colors"
              >
                <div>
                  <h4 className="font-medium">{result.title || result.name}</h4>
                  <p className="text-sm text-muted-foreground">
                    {result.excerpt || result.description}
                  </p>
                </div>
                <ArrowRight className="h-4 w-4 text-muted-foreground" />
              </Link>
            ))}
          </div>
        )}

        {query && results.length === 0 && (
          <div className="mt-8 text-center text-muted-foreground">
            No results found for "{query}"
          </div>
        )}
      </div>
    </div>
  )
}