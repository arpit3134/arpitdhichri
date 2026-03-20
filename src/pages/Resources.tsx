import { useState } from 'react'
import { ResourceCard } from '@/components/ResourceCard'
import { SectionHeader } from '@/components/SectionHeader'
import { resources } from '@/data/mockData'

export default function Resources() {
  const [searchQuery, setSearchQuery] = useState('')
  const [selectedType, setSelectedType] = useState<string>('all')

  const filteredResources = resources.filter(resource =>
    (selectedType === 'all' || resource.type === selectedType) &&
    (resource.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
     resource.description.toLowerCase().includes(searchQuery.toLowerCase()))
  )

  const types = ['all', 'guide', 'template', 'ebook', 'video']

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <SectionHeader
          title="Resources"
          description="Free guides, templates, and learning materials"
        />
        
        <div className="mt-8 flex flex-col sm:flex-row gap-4">
          <input
            type="text"
            placeholder="Search resources..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="flex-1 max-w-md px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
          <div className="flex gap-2">
            {types.map((type) => (
              <button
                key={type}
                onClick={() => setSelectedType(type)}
                className={`px-4 py-2 rounded-full text-sm font-medium capitalize transition-colors ${
                  selectedType === type
                    ? 'bg-primary text-primary-foreground'
                    : 'bg-muted hover:bg-muted/80'
                }`}
              >
                {type}
              </button>
            ))}
          </div>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mt-12">
          {filteredResources.map((resource) => (
            <ResourceCard key={resource.id} resource={resource} />
          ))}
        </div>
        
        {filteredResources.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No resources found.</p>
          </div>
        )}
      </div>
    </div>
  )
}