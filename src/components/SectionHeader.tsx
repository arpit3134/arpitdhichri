import { Link } from 'react-router-dom'
import { ArrowRight } from 'lucide-react'

interface SectionHeaderProps {
  title: string
  description?: string
  linkText?: string
  linkHref?: string
}

export function SectionHeader({ title, description, linkText, linkHref }: SectionHeaderProps) {
  return (
    <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4">
      <div>
        <h2 className="text-2xl md:text-3xl font-bold tracking-tight">{title}</h2>
        {description && (
          <p className="text-muted-foreground mt-2">{description}</p>
        )}
      </div>
      {linkText && linkHref && (
        <Link
          to={linkHref}
          className="inline-flex items-center text-sm font-medium text-primary hover:underline"
        >
          {linkText}
          <ArrowRight className="ml-1 h-4 w-4" />
        </Link>
      )}
    </div>
  )
}