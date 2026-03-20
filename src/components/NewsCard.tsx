import { Link } from 'react-router-dom'
import { Calendar, ArrowRight } from 'lucide-react'

interface NewsCardProps {
  id: string
  title: string
  excerpt: string
  date: string
  image?: string
  category?: string
}

export function NewsCard({ id, title, excerpt, date, image, category }: NewsCardProps) {
  return (
    <Link
      to={`/articles/${id}`}
      className="group block rounded-xl overflow-hidden border bg-card hover:shadow-lg transition-all"
    >
      {image && (
        <div className="aspect-video overflow-hidden">
          <img
            src={image}
            alt={title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
          />
        </div>
      )}
      <div className="p-6">
        <div className="flex items-center gap-2 mb-3">
          {category && (
            <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
              {category}
            </span>
          )}
          <span className="text-xs text-muted-foreground flex items-center gap-1">
            <Calendar className="h-3 w-3" />
            {new Date(date).toLocaleDateString()}
          </span>
        </div>
        <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-2">
          {title}
        </h3>
        <p className="text-muted-foreground text-sm line-clamp-2 mb-3">
          {excerpt}
        </p>
        <div className="flex items-center gap-1 text-sm font-medium text-primary">
          Read more
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}