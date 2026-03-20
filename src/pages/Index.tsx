import { DiscoveryHero } from '@/components/DiscoveryHero'
import { TopicExplorer } from '@/components/TopicExplorer'
import { NewsletterCTA } from '@/components/NewsletterCTA'
import { SectionHeader } from '@/components/SectionHeader'
import { ResourceCard } from '@/components/ResourceCard'
import { ToolCard } from '@/components/ToolCard'
import { ArticleCard } from '@/components/ArticleCard'
import { tools, articles, resources } from '@/data/mockData'

export default function Index() {
  const featuredTools = tools.filter(t => t.featured).slice(0, 4)
  const featuredArticles = articles.slice(0, 3)
  const featuredResources = resources.slice(0, 3)

  return (
    <div className="min-h-screen">
      <DiscoveryHero />
      
      <TopicExplorer />
      
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionHeader
            title="Featured Tools"
            description="Discover the best tools to supercharge your workflow"
            linkText="View all tools"
            linkHref="/tools"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mt-12">
            {featuredTools.map((tool) => (
              <ToolCard key={tool.id} tool={tool} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20">
        <div className="container">
          <SectionHeader
            title="Latest Articles"
            description="Insights and stories from the tech world"
            linkText="Read all articles"
            linkHref="/articles"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
            {featuredArticles.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>
      
      <section className="py-20 bg-muted/30">
        <div className="container">
          <SectionHeader
            title="Free Resources"
            description="Download guides, templates, and more"
            linkText="Browse all resources"
            linkHref="/resources"
          />
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
            {featuredResources.map((resource) => (
              <ResourceCard key={resource.id} resource={resource} />
            ))}
          </div>
        </div>
      </section>
      
      <NewsletterCTA />
    </div>
  )
}