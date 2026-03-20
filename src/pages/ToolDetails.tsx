import { useParams, Link } from 'react-router-dom'
import { ExternalLink, Star, ArrowLeft } from 'lucide-react'
import { tools } from '@/data/mockData'

export default function ToolDetail() {
  const { id } = useParams()
  const tool = tools.find(t => t.id === id)

  if (!tool) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Tool not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Link
          to="/tools"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Tools
        </Link>

        <div className="bg-card rounded-xl border overflow-hidden">
          {tool.logo && (
            <div className="aspect-video overflow-hidden bg-gradient-to-br from-primary/20 to-primary/5">
              <img
                src={tool.logo}
                alt={tool.name}
                className="w-full h-full object-cover"
              />
            </div>
          )}
          
          <div className="p-8">
            <div className="flex items-start justify-between mb-4">
              <h1 className="text-3xl md:text-4xl font-bold">{tool.name}</h1>
              <div className="flex items-center gap-1">
                <Star className="h-5 w-5 fill-yellow-500 text-yellow-500" />
                <span className="text-lg font-semibold">{tool.rating}</span>
              </div>
            </div>
            
            <div className="flex flex-wrap gap-3 mb-6">
              <span className="px-3 py-1 rounded-full bg-muted text-sm">
                {tool.category}
              </span>
              <span className="px-3 py-1 rounded-full bg-muted text-sm capitalize">
                {tool.pricing}
              </span>
              {tool.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-muted/50 text-sm">
                  #{tag}
                </span>
              ))}
            </div>
            
            <p className="text-lg text-muted-foreground mb-8">{tool.description}</p>
            
            <a
              href={tool.website}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Visit Website
              <ExternalLink className="h-4 w-4" />
            </a>
          </div>
        </div>
      </div>
    </div>
  )
}