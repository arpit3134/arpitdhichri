import { Link } from 'react-router-dom'
import { topics } from '@/data/mockData'
import { SectionHeader } from './SectionHeader'

export function TopicExplorer() {
  return (
    <section className="py-20">
      <div className="container">
        <SectionHeader
          title="Explore Topics"
          description="Discover content by your interests"
          linkText="View all topics"
          linkHref="/topics"
        />
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4 mt-12">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.slug}`}
              className="group p-6 rounded-xl bg-card border hover:border-primary/50 transition-all hover:shadow-lg"
            >
              <div className="text-4xl mb-3">{topic.icon}</div>
              <h3 className="font-semibold mb-1 group-hover:text-primary transition-colors">
                {topic.name}
              </h3>
              <p className="text-sm text-muted-foreground">{topic.count} items</p>
            </Link>
          ))}
        </div>
      </div>
    </section>
  )
}