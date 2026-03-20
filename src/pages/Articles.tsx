import { useState } from 'react'
import { ArticleCard } from '@/components/ArticleCard'
import { SectionHeader } from '@/components/SectionHeader'
import { articles } from '@/data/mockData'

export default function Articles() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredArticles = articles.filter(article =>
    article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
    article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <SectionHeader
          title="Articles"
          description="Insights, stories, and knowledge from experts"
        />
        
        <div className="mt-8 mb-12">
          <input
            type="text"
            placeholder="Search articles..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {filteredArticles.map((article) => (
            <ArticleCard key={article.id} article={article} />
          ))}
        </div>
        
        {filteredArticles.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No articles found.</p>
          </div>
        )}
      </div>
    </div>
  )
}