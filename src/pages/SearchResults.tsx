import { useSearchParams } from 'react-router-dom'
import { ArticleCard } from '@/components/ArticleCard'
import { ToolCard } from '@/components/ToolCard'
import { CalculatorCard } from '@/components/CalculatorCard'
import { articles, tools, calculators } from '@/data/mockData'

export default function SearchResults() {
  const [searchParams] = useSearchParams()
  const query = searchParams.get('q') || ''

  const articleResults = articles.filter(a =>
    a.title.toLowerCase().includes(query.toLowerCase()) ||
    a.excerpt.toLowerCase().includes(query.toLowerCase())
  )

  const toolResults = tools.filter(t =>
    t.name.toLowerCase().includes(query.toLowerCase()) ||
    t.description.toLowerCase().includes(query.toLowerCase())
  )

  const calculatorResults = calculators.filter(c =>
    c.name.toLowerCase().includes(query.toLowerCase()) ||
    c.description.toLowerCase().includes(query.toLowerCase())
  )

  const totalResults = articleResults.length + toolResults.length + calculatorResults.length

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-8">
          <h1 className="text-3xl font-bold mb-2">Search Results</h1>
          <p className="text-muted-foreground">
            Found {totalResults} result{totalResults !== 1 ? 's' : ''} for "{query}"
          </p>
        </div>

        {articleResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {articleResults.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {toolResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {toolResults.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}

        {calculatorResults.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {calculatorResults.map((calc) => (
                <CalculatorCard key={calc.id} calculator={calc} />
              ))}
            </div>
          </div>
        )}

        {totalResults === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No results found for "{query}"</p>
            <p className="text-sm text-muted-foreground mt-2">
              Try different keywords or browse our categories
            </p>
          </div>
        )}
      </div>
    </div>
  )
}