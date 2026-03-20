import { Link } from 'react-router-dom'
import { ExternalLink, Star } from 'lucide-react'
import { Tool } from '@/types'

interface ToolCardProps {
  tool: Tool
}

export function ToolCard({ tool }: ToolCardProps) {
  return (
    <Link
      to={`/tools/${tool.id}`}
      className="group block p-6 rounded-xl border bg-card hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        {tool.logo ? (
          <img src={tool.logo} alt={tool.name} className="w-12 h-12 rounded-lg object-cover" />
        ) : (
          <div className="w-12 h-12 rounded-lg bg-gradient-to-br from-primary/20 to-primary/5" />
        )}
        <ExternalLink className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {tool.name}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
        {tool.description}
      </p>
      <div className="flex items-center justify-between">
        <div className="flex items-center gap-1">
          <Star className="h-4 w-4 fill-yellow-500 text-yellow-500" />
          <span className="text-sm font-medium">{tool.rating}</span>
        </div>
        <span className="text-xs px-2 py-1 rounded-full bg-muted">
          {tool.pricing}
        </span>
      </div>
    </Link>
  )
}