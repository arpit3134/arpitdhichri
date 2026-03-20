import { Link } from 'react-router-dom'
import { Download, FileText, Video, Layout } from 'lucide-react'
import { Resource } from '@/types'

interface ResourceCardProps {
  resource: Resource
}

const iconMap = {
  guide: FileText,
  template: Layout,
  ebook: FileText,
  video: Video,
}

export function ResourceCard({ resource }: ResourceCardProps) {
  const Icon = iconMap[resource.type] || FileText

  return (
    <Link
      to={`/resources/${resource.id}`}
      className="group block p-6 rounded-xl border bg-card hover:shadow-lg transition-all"
    >
      <div className="flex items-start justify-between mb-4">
        <Icon className="h-10 w-10 text-primary" />
        <Download className="h-4 w-4 text-muted-foreground opacity-0 group-hover:opacity-100 transition-opacity" />
      </div>
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors">
        {resource.title}
      </h3>
      <p className="text-sm text-muted-foreground line-clamp-2 mb-3">
        {resource.description}
      </p>
      <div className="flex flex-wrap gap-2">
        <span className="text-xs px-2 py-1 rounded-full bg-muted capitalize">
          {resource.type}
        </span>
        {resource.tags.slice(0, 2).map((tag) => (
          <span key={tag} className="text-xs px-2 py-1 rounded-full bg-muted">
            {tag}
          </span>
        ))}
      </div>
    </Link>
  )
}