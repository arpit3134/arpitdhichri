import { Link } from 'react-router-dom'
import { Calculator, Star, TrendingUp } from 'lucide-react'
import { Calculator as CalculatorType } from '@/types'

interface CalculatorCardProps {
  calculator: CalculatorType
  featured?: boolean
  className?: string
}

export function CalculatorCard({ calculator, featured = false, className = '' }: CalculatorCardProps) {
  return (
    <Link
      to={`/calculators/${calculator.id}`}
      className={`group block p-6 rounded-xl border bg-card hover:shadow-lg transition-all duration-300 hover:border-primary/50 ${className}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
          <Calculator className="h-6 w-6 text-primary" />
        </div>
        {featured && (
          <div className="flex items-center gap-1 px-2 py-1 rounded-full bg-primary/10 text-primary text-xs font-medium">
            <TrendingUp className="h-3 w-3" />
            Featured
          </div>
        )}
      </div>
      
      <h3 className="text-lg font-semibold mb-2 group-hover:text-primary transition-colors line-clamp-1">
        {calculator.name}
      </h3>
      
      <p className="text-sm text-muted-foreground line-clamp-2 mb-4">
        {calculator.description}
      </p>
      
      <div className="flex flex-wrap gap-2 mb-4">
        {calculator.tags.slice(0, 2).map((tag) => (
          <span
            key={tag}
            className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground"
          >
            {tag}
          </span>
        ))}
        {calculator.tags.length > 2 && (
          <span className="text-xs px-2 py-1 rounded-full bg-muted text-muted-foreground">
            +{calculator.tags.length - 2}
          </span>
        )}
      </div>
      
      <div className="flex items-center justify-between pt-4 border-t">
        <div className="flex items-center gap-1">
          <Star className="h-3 w-3 fill-yellow-500 text-yellow-500" />
          <span className="text-xs text-muted-foreground">
            {calculator.featured ? 'Popular' : 'Interactive'}
          </span>
        </div>
        <span className="text-xs text-primary font-medium group-hover:underline">
          Calculate →
        </span>
      </div>
    </Link>
  )
}