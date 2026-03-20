import { useParams } from 'react-router-dom'
import { collections, articles, tools } from '@/data/mockData'
import { ArticleCard } from '@/components/ArticleCard'
import { ToolCard } from '@/components/ToolCard'

export default function CollectionDetail() {
  const { id } = useParams()
  const collection = collections.find(c => c.id === id)

  if (!collection) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Collection not found</p>
      </div>
    )
  }

  const collectionArticles = articles.filter(article => collection.items.includes(article.id))
  const collectionTools = tools.filter(tool => collection.items.includes(tool.id))

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <div className="mb-12">
          <h1 className="text-4xl font-bold mb-4">{collection.name}</h1>
          <p className="text-xl text-muted-foreground max-w-3xl">
            {collection.description}
          </p>
        </div>

        {collectionArticles.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Articles</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        )}

        {collectionTools.length > 0 && (
          <div className="mb-12">
            <h2 className="text-2xl font-semibold mb-6">Tools</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {collectionTools.map((tool) => (
                <ToolCard key={tool.id} tool={tool} />
              ))}
            </div>
          </div>
        )}
      </div>
    </div>
  )
}