import { Link } from 'react-router-dom'
import { Calendar, Clock } from 'lucide-react'
import { Article } from '@/types'

interface ArticleCardProps {
  article: Article
}

export function ArticleCard({ article }: ArticleCardProps) {
  return (
    <Link
      to={`/articles/${article.id}`}
      className="group block rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all"
    >
      <div className="aspect-video overflow-hidden">
        <img
          src={article.coverImage}
          alt={article.title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
        />
      </div>
      <div className="p-6">
        <div className="flex items-center gap-4 text-sm text-muted-foreground mb-3">
          <span className="flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(article.publishedAt).toLocaleDateString()}
          </span>
          <span className="flex items-center gap-1">
            <Clock className="h-3 w-3" />
            {article.readTime} min read
          </span>
        </div>
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {article.title}
        </h3>
        <p className="text-muted-foreground line-clamp-2">{article.excerpt}</p>
        <div className="mt-4 flex items-center gap-2">
          <span className="text-sm font-medium">{article.author}</span>
        </div>
      </div>
    </Link>
  )
}