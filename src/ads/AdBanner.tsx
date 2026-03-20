import { adConfig } from './adConfig'

interface AdBannerProps {
  position: 'header' | 'sidebar' | 'inArticle' | 'footer'
}

export function AdBanner({ position }: AdBannerProps) {
  if (!adConfig.enabled || !adConfig.positions[position]) {
    return null
  }
  
  return (
    <div className="ad-banner my-4 p-4 border rounded-lg text-center text-sm text-muted-foreground">
      Advertisement
    </div>
  )
}