import { useParams } from 'react-router-dom'
import { Download, FileText, Video, Layout, ArrowLeft } from 'lucide-react'
import { Link } from 'react-router-dom'
import { resources } from '@/data/mockData'

const iconMap = {
  guide: FileText,
  template: Layout,
  ebook: FileText,
  video: Video,
}

export default function ResourceDetail() {
  const { id } = useParams()
  const resource = resources.find(r => r.id === id)

  if (!resource) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Resource not found</p>
      </div>
    )
  }

  const Icon = iconMap[resource.type] || FileText

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Link
          to="/resources"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Resources
        </Link>

        <div className="bg-card rounded-xl border overflow-hidden">
          <div className="aspect-video bg-gradient-to-br from-primary/20 to-primary/5 flex items-center justify-center">
            {resource.embedUrl ? (
              <iframe
                src={resource.embedUrl}
                title={resource.title}
                className="w-full h-full"
                allowFullScreen
              />
            ) : (
              <Icon className="h-24 w-24 text-primary/50" />
            )}
          </div>
          
          <div className="p-8">
            <div className="flex items-center gap-3 mb-4">
              <span className="px-3 py-1 rounded-full bg-muted text-sm capitalize">
                {resource.type}
              </span>
              {resource.tags.map((tag) => (
                <span key={tag} className="px-3 py-1 rounded-full bg-muted/50 text-sm">
                  {tag}
                </span>
              ))}
            </div>
            
            <h1 className="text-3xl md:text-4xl font-bold mb-4">{resource.title}</h1>
            <p className="text-lg text-muted-foreground mb-8">{resource.description}</p>
            
            {resource.downloadUrl && (
              <a
                href={resource.downloadUrl}
                download
                className="inline-flex items-center gap-2 px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
              >
                <Download className="h-4 w-4" />
                Download Resource
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}