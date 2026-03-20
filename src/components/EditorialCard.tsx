import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface EditorialCardProps {
  title: string
  description: string
  image: string
  link: string
  badge?: string
}

export function EditorialCard({ title, description, image, link, badge }: EditorialCardProps) {
  return (
    <Link
      to={link}
      className="group relative block rounded-xl overflow-hidden"
    >
      <div className="aspect-[16/9] overflow-hidden">
        <img
          src={image}
          alt={title}
          className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent" />
      </div>
      <div className="absolute bottom-0 left-0 right-0 p-6 text-white">
        {badge && (
          <span className="inline-block px-3 py-1 rounded-full bg-primary text-sm mb-3">
            {badge}
          </span>
        )}
        <h3 className="text-xl font-semibold mb-2 group-hover:text-primary transition-colors">
          {title}
        </h3>
        <p className="text-white/80 text-sm line-clamp-2">{description}</p>
        <div className="flex items-center gap-2 mt-3 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity">
          Read more
          <ArrowRight className="h-4 w-4" />
        </div>
      </div>
    </Link>
  )
}