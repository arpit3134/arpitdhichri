import { useState } from 'react'
import { Search } from 'lucide-react'
import { TopicChip } from '@/components/TopicChip'
import { ArticleCard } from '@/components/ArticleCard'
import { ToolCard } from '@/components/ToolCard'
import { CalculatorCard } from '@/components/CalculatorCard'
import { articles, tools, calculators, topics } from '@/data/mockData'

type FilterType = 'all' | 'articles' | 'tools' | 'calculators'

export default function Discover() {
  const [searchQuery, setSearchQuery] = useState('')
  const [activeFilter, setActiveFilter] = useState<FilterType>('all')
  const [selectedTopics, setSelectedTopics] = useState<string[]>([])

  const handleTopicToggle = (topicSlug: string) => {
    setSelectedTopics(prev =>
      prev.includes(topicSlug)
        ? prev.filter(t => t !== topicSlug)
        : [...prev, topicSlug]
    )
  }

  const filteredArticles = articles.filter(article =>
    (searchQuery === '' || article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
      article.excerpt.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTopics.length === 0 || article.topics.some(t => selectedTopics.includes(t)))
  )

  const filteredTools = tools.filter(tool =>
    (searchQuery === '' || tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      tool.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTopics.length === 0 || tool.tags.some(t => selectedTopics.includes(t)))
  )

  const filteredCalculators = calculators.filter(calc =>
    (searchQuery === '' || calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      calc.description.toLowerCase().includes(searchQuery.toLowerCase())) &&
    (selectedTopics.length === 0 || calc.tags.some(t => selectedTopics.includes(t)))
  )

  const showArticles = activeFilter === 'all' || activeFilter === 'articles'
  const showTools = activeFilter === 'all' || activeFilter === 'tools'
  const showCalculators = activeFilter === 'all' || activeFilter === 'calculators'

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent pt-20 pb-12">
        <div className="container">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Discover</h1>
          <p className="text-xl text-muted-foreground mb-8">
            Find the best articles, tools, and calculators
          </p>
          
          <div className="relative max-w-2xl">
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
            <input
              type="text"
              placeholder="Search for articles, tools, calculators..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
            />
          </div>
        </div>
      </div>

      <div className="container py-8">
        <div className="flex flex-wrap gap-2 mb-8">
          <button
            onClick={() => setActiveFilter('all')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'all'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }`}
          >
            All
          </button>
          <button
            onClick={() => setActiveFilter('articles')}
            className={`px-4 py-2 rounded-full text-sm font-medium transition-colors ${
              activeFilter === 'articles'
                ? 'bg-primary text-primary-foreground'
                : 'bg-muted hover:bg-muted/80'
            }