interface AdCardProps {
  title: string
  description: string
  ctaText: string
  ctaLink: string
  image?: string
}

export function AdCard({ title, description, ctaText, ctaLink, image }: AdCardProps) {
  return (
    <div className="border rounded-lg overflow-hidden bg-card">
      {image && (
        <div className="aspect-video">
          <img src={image} alt={title} className="w-full h-full object-cover" />
        </div>
      )}
      <div className="p-4">
        <h3 className="font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">{description}</p>
        <a
          href={ctaLink}
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block text-sm font-medium text-primary hover:underline"
        >
          {ctaText} →
        </a>
      </div>
    </div>
  )
}