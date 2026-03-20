import { TrendingUp, Flame } from 'lucide-react'
import { ArticleCard } from '@/components/ArticleCard'
import { ToolCard } from '@/components/ToolCard'
import { articles, tools } from '@/data/mockData'

export default function Trending() {
  const trendingArticles = [...articles].sort((a, b) => 
    new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime()
  )
  const trendingTools = [...tools].sort((a, b) => b.rating - a.rating)

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
            <Flame className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Trending Now</span>
          </div>
          <h1 className="text-4xl font-bold mb-4">What's Popular</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Discover the most viewed and highly rated content
          </p>
        </div>

        <div className="space-y-12">
          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Trending Articles</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {trendingArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>

          <div>
            <div className="flex items-center gap-2 mb-6">
              <TrendingUp className="h-5 w-5 text-primary" />
              <h2 className="text-2xl font-semibold">Top Rated Tools</h2>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {trendingTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}