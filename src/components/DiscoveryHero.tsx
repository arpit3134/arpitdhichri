import { ArrowRight, Sparkles } from 'lucide-react'
import { Link } from 'react-router-dom'

export function DiscoveryHero() {
  return (
    <section className="relative overflow-hidden bg-gradient-to-br from-primary/5 via-background to-background pt-20 pb-32">
      <div className="absolute inset-0 bg-grid-slate-100 [mask-image:radial-gradient(ellipse_at_center,transparent_20%,black)] dark:bg-grid-slate-700/20" />
      <div className="container relative">
        <div className="max-w-4xl mx-auto text-center">
          <div className="inline-flex items-center gap-2 bg-primary/10 rounded-full px-4 py-2 mb-6">
            <Sparkles className="h-4 w-4 text-primary" />
            <span className="text-sm font-medium">Discover the best tools & resources</span>
          </div>
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold tracking-tight mb-6">
            Find Your Next
            <span className="bg-gradient-to-r from-primary to-primary/60 bg-clip-text text-transparent"> Favorite Tool</span>
          </h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Discover curated articles, powerful tools, and useful calculators all in one place.
            Your journey to better productivity starts here.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              to="/discover"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors"
            >
              Start Exploring
              <ArrowRight className="ml-2 h-4 w-4" />
            </Link>
            <Link
              to="/topics"
              className="inline-flex items-center justify-center px-6 py-3 rounded-lg border bg-background hover:bg-muted transition-colors"
            >
              Browse Topics
            </Link>
          </div>
        </div>
      </div>
    </section>
  )
}