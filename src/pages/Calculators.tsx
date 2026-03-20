import { useState } from 'react'
import { CalculatorCard } from '@/components/CalculatorCard'
import { SectionHeader } from '@/components/SectionHeader'
import { calculators } from '@/data/mockData'

export default function Calculators() {
  const [searchQuery, setSearchQuery] = useState('')

  const filteredCalculators = calculators.filter(calc =>
    calc.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
    calc.description.toLowerCase().includes(searchQuery.toLowerCase())
  )

  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <SectionHeader
          title="Calculators"
          description="Useful calculators for finance, health, and more"
        />
        
        <div className="mt-8 mb-12">
          <input
            type="text"
            placeholder="Search calculators..."
            value={searchQuery}
            onChange={(e) => setSearchQuery(e.target.value)}
            className="max-w-md w-full px-4 py-2 rounded-lg border bg-background focus:outline-none focus:ring-2 focus:ring-primary"
          />
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredCalculators.map((calc) => (
            <CalculatorCard key={calc.id} calculator={calc} />
          ))}
        </div>
        
        {filteredCalculators.length === 0 && (
          <div className="text-center py-12">
            <p className="text-muted-foreground">No calculators found.</p>
          </div>
        )}
      </div>
    </div>
  )
}