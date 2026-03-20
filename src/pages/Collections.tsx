import { CollectionCard } from '@/components/CollectionCard'
import { SectionHeader } from '@/components/SectionHeader'
import { collections } from '@/data/mockData'

export default function Collections() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <SectionHeader
          title="Collections"
          description="Curated collections of the best resources"
        />
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mt-12">
          {collections.map((collection) => (
            <CollectionCard key={collection.id} collection={collection} />
          ))}
        </div>
      </div>
    </div>
  )
}