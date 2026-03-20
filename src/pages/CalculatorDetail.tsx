import { useParams, Link } from 'react-router-dom'
import { Calculator, ArrowLeft } from 'lucide-react'
import { calculators } from '@/data/mockData'
import { useState } from 'react'

export default function CalculatorDetail() {
  const { id } = useParams()
  const calculator = calculators.find(c => c.id === id)

  const [inputs, setInputs] = useState<Record<string, number>>({})

  if (!calculator) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <p className="text-muted-foreground">Calculator not found</p>
      </div>
    )
  }

  return (
    <div className="min-h-screen py-12">
      <div className="container max-w-4xl">
        <Link
          to="/calculators"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-8"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Calculators
        </Link>

        <div className="bg-card rounded-xl border p-8">
          <div className="flex items-center gap-3 mb-4">
            <Calculator className="h-8 w-8 text-primary" />
            <h1 className="text-3xl font-bold">{calculator.name}</h1>
          </div>
          
          <p className="text-muted-foreground mb-6">{calculator.description}</p>
          
          <div className="bg-muted/30 rounded-lg p-6 mb-8">
            <h3 className="font-semibold mb-2">Formula</h3>
            <code className="text-sm font-mono">{calculator.formula}</code>
          </div>
          
          <div className="space-y-4">
            <h3 className="font-semibold">Try it yourself</h3>
            <p className="text-sm text-muted-foreground">
              This calculator is interactive. Enter values to see the results.
            </p>
            <div className="bg-muted/30 rounded-lg p-6 text-center">
              <p className="text-muted-foreground">Interactive calculator coming soon!</p>
              <p className="text-sm text-muted-foreground mt-2">
                This is a demo. Full functionality will be implemented based on the formula.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}