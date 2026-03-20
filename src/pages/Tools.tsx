import { useState } from 'react'
import { ToolCard } from '@/components/ToolCard'
import { SectionHeader } from '@/components/SectionHeader'
import { tools } from '@/data/mockData'

export default function Tools() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredTools = tools.filter(tool =>
    tool.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    tool.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <SectionHeader
          title="Tools"
          description="Discover powerful tools to boost your productivity"
        />
        
        <div className="mt-8 mb-12">
          <input
            type="text"
            placeholder="Search tools..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <ToolCard key={tool.id} tool={tool} />
          ))}
        </div>
        
        {filteredTools.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No tools found.</p>
          </div>
        )}
      </div>
    </div>
  )
}