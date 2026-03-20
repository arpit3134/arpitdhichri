import { useParams } from 'react-router-dom'
import { topics, articles, tools, calculators } from '@/data/mockData'
import { ArticleCard } from '@/components/ArticleCard'
import { ToolCard } from '@/components/ToolCard'
import { CalculatorCard } from '@/components/CalculatorCard'

export default function TopicDetail() {
  const { slug } = useParams()
  const topic = topics.find(t => t.slug === slug)

  if (!topic) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Topic not found</p>
      </div>
    )
  }

  const topicArticles = articles.filter(article => article.topics.includes(topic.slug))
  const topicTools = tools.filter(tool => tool.tags.includes(topic.slug))
  const topicCalculators = calculators.filter(calc => calc.tags.includes(topic.slug))

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="text-center mb-12">
          <div className="text-6xl mb-4">{topic.icon}</div>
          <h1 className="text-4xl font-bold mb-4">{topic.name}</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            {topic.description}
          </p>
        </div>

        {topicArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {topicTools.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}

        {topicCalculators.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Calculators</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {topicCalculators.map((calc) => (
                <CalculatorCard key={calc.id} calculator={calc} />
              ))}
            </div>
          </div>
        )}

        {topicArticles.length === 0 && topicTools.length === 0 && topicCalculators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No content available for this topic yet.</p>
          </div>
        )}
      </div>
    </div>
  )
}