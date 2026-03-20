import { useParams, Link } from 'react-router-dom'
import { Calculator, ArrowLeft, Star, TrendingUp, Copy, Check } from 'lucide-react'
import { calculators } from '@/data/mockData'
import { useState } from 'react'
import { BookmarkButton } from '@/components/BookmarkButton'

export default function CalculatorDetail() {
  const { id } = useParams()
  const calculator = calculators.find(c => c.id === id)
  const [copied, setCopied] = useState(false)
  const [inputs, setInputs] = useState<Record<string, number>>({})

  if (!calculator) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
          <h2 className="text-xl font-semibold mb-2">Calculator not found</h2>
          <p className="text-muted-foreground mb-4">
            The calculator you're looking for doesn't exist or has been moved.
          </p>
          <Link
            to="/calculators"
            className="inline-flex items-center gap-2 px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90"
          >
            <ArrowLeft className="h-4 w-4" />
            Browse Calculators
          </Link>
        </div>
      </div>
    )
  }

  const copyFormula = () => {
    navigator.clipboard.writeText(calculator.formula)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  const handleInputChange = (name: string, value: string) => {
    setInputs(prev => ({
      ...prev,
      [name]: parseFloat(value) || 0
    }))
  }

  return (
    <div className="min-h-screen py-8 md:py-12">
      <div className="container max-w-4xl">
        {/* Back button */}
        <Link
          to="/calculators"
          className="inline-flex items-center gap-2 text-muted-foreground hover:text-primary mb-6 transition-colors"
        >
          <ArrowLeft className="h-4 w-4" />
          Back to Calculators
        </Link>

        {/* Main card */}
        <div className="bg-card rounded-xl border overflow-hidden">
          {/* Header */}
          <div className="p-6 md:p-8 border-b bg-gradient-to-r from-primary/5 to-transparent">
            <div className="flex items-start justify-between gap-4">
              <div className="flex items-center gap-3">
                <div className="p-3 rounded-xl bg-primary/10">
                  <Calculator className="h-6 w-6 md:h-8 md:w-8 text-primary" />
                </div>
                <div>
                  <h1 className="text-2xl md:text-3xl font-bold">{calculator.name}</h1>
                  <div className="flex items-center gap-2 mt-2">
                    <span className="text-sm px-2 py-0.5 rounded-full bg-muted">
                      {calculator.category}
                    </span>
                    {calculator.featured && (
                      <span className="flex items-center gap-1 text-xs px-2 py-0.5 rounded-full bg-primary/10 text-primary">
                        <TrendingUp className="h-3 w-3" />
                        Featured
                      </span>
                    )}
                  </div>
                </div>
              </div>
              <BookmarkButton itemId={calculator.id} itemType="calculator" />
            </div>
            <p className="text-muted-foreground mt-4 leading-relaxed">
              {calculator.description}
            </p>
          </div>

          {/* Formula section */}
          <div className="p-6 md:p-8 border-b bg-muted/20">
            <div className="flex items-center justify-between mb-3">
              <h2 className="text-lg font-semibold">Formula</h2>
              <button
                onClick={copyFormula}
                className="flex items-center gap-1 text-sm text-muted-foreground hover:text-primary transition-colors"
              >
                {copied ? (
                  <>
                    <Check className="h-4 w-4" />
                    Copied!
                  </>
                ) : (
                  <>
                    <Copy className="h-4 w-4" />
                    Copy
                  </>
                )}
              </button>
            </div>
            <div className="bg-card rounded-lg p-4 font-mono text-sm border">
              <code className="text-primary">{calculator.formula}</code>
            </div>
            <p className="text-xs text-muted-foreground mt-3">
              Where variables represent standard mathematical notation
            </p>
          </div>

          {/* Interactive calculator */}
          <div className="p-6 md:p-8">
            <h2 className="text-lg font-semibold mb-4">Try it yourself</h2>
            
            {/* Calculator form based on type */}
            {calculator.slug === 'mortgage-calculator' && (
              <MortgageCalculatorForm />
            )}

            {calculator.slug === 'bmi-calculator' && (
              <BMICalculatorForm />
            )}

            {calculator.slug === 'emi-calculator' && (
              <EMICalculatorForm />
            )}

            {calculator.slug === 'sip-calculator' && (
              <SIPCalculatorForm />
            )}

            {/* Default calculator interface */}
            {!['mortgage-calculator', 'bmi-calculator', 'emi-calculator', 'sip-calculator'].includes(calculator.slug) && (
              <div className="bg-muted/30 rounded-lg p-8 text-center">
                <Calculator className="h-12 w-12 text-muted-foreground mx-auto mb-3" />
                <p className="text-muted-foreground mb-2">
                  Interactive calculator coming soon!
                </p>
                <p className="text-sm text-muted-foreground">
                  This calculator will be fully interactive based on the formula above.
                </p>
              </div>
            )}
          </div>

          {/* Tags */}
          <div className="p-6 md:p-8 border-t bg-muted/10">
            <h3 className="text-sm font-medium mb-3">Related topics</h3>
            <div className="flex flex-wrap gap-2">
              {calculator.tags.map((tag) => (
                <Link
                  key={tag}
                  to={`/topics/${tag.toLowerCase().replace(/\s+/g, '-')}`}
                  className="px-3 py-1 rounded-full bg-muted text-sm hover:bg-primary/10 hover:text-primary transition-colors"
                >
                  #{tag}
                </Link>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

// Individual calculator components
function MortgageCalculatorForm() {
  const [loanAmount, setLoanAmount] = useState(300000)
  const [interestRate, setInterestRate] = useState(5.5)
  const [loanTerm, setLoanTerm] = useState(30)

  const monthlyRate = interestRate / 100 / 12
  const numberOfPayments = loanTerm * 12
  const monthlyPayment = loanAmount * monthlyRate * Math.pow(1 + monthlyRate, numberOfPayments) / (Math.pow(1 + monthlyRate, numberOfPayments) - 1)

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">Loan Amount ($)</label>
          <input
            type="range"
            min="10000"
            max="1000000"
            step="10000"
            value={loanAmount}
            onChange={(e) => setLoanAmount(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            ${loanAmount.toLocaleString()}
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Interest Rate (%)</label>
          <input
            type="range"
            min="1"
            max="15"
            step="0.1"
            value={interestRate}
            onChange={(e) => setInterestRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            {interestRate}%
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Loan Term (years)</label>
          <input
            type="range"
            min="5"
            max="30"
            step="5"
            value={loanTerm}
            onChange={(e) => setLoanTerm(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            {loanTerm} years
          </div>
        </div>
      </div>
      
      <div className="bg-primary/5 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Monthly Payment</p>
        <p className="text-2xl font-bold text-primary">
          ${monthlyPayment.toFixed(2)}
        </p>
      </div>
    </div>
  )
}

function BMICalculatorForm() {
  const [weight, setWeight] = useState(70)
  const [height, setHeight] = useState(170)

  const heightInMeters = height / 100
  const bmi = weight / (heightInMeters * heightInMeters)
  
  const getBMICategory = (bmi: number) => {
    if (bmi < 18.5) return { label: 'Underweight', color: 'text-blue-500' }
    if (bmi < 25) return { label: 'Normal', color: 'text-green-500' }
    if (bmi < 30) return { label: 'Overweight', color: 'text-yellow-500' }
    return { label: 'Obese', color: 'text-red-500' }
  }
  
  const category = getBMICategory(bmi)

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">Weight (kg)</label>
          <input
            type="number"
            value={weight}
            onChange={(e) => setWeight(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg border bg-background"
          />
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Height (cm)</label>
          <input
            type="number"
            value={height}
            onChange={(e) => setHeight(Number(e.target.value))}
            className="w-full px-3 py-2 rounded-lg border bg-background"
          />
        </div>
      </div>
      
      <div className="bg-primary/5 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Your BMI</p>
        <p className="text-3xl font-bold text-primary">
          {bmi.toFixed(1)}
        </p>
        <p className={`text-sm font-medium mt-2 ${category.color}`}>
          {category.label}
        </p>
      </div>
    </div>
  )
}

function EMICalculatorForm() {
  const [principal, setPrincipal] = useState(500000)
  const [rate, setRate] = useState(10.5)
  const [tenure, setTenure] = useState(5)

  const monthlyRate = rate / 100 / 12
  const months = tenure * 12
  const emi = principal * monthlyRate * Math.pow(1 + monthlyRate, months) / (Math.pow(1 + monthlyRate, months) - 1)
  const totalPayment = emi * months
  const totalInterest = totalPayment - principal

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">Loan Amount (₹)</label>
          <input
            type="range"
            min="10000"
            max="10000000"
            step="10000"
            value={principal}
            onChange={(e) => setPrincipal(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            ₹{principal.toLocaleString()}
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Interest Rate (%)</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={rate}
            onChange={(e) => setRate(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            {rate}%
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Tenure (years)</label>
          <input
            type="range"
            min="1"
            max="20"
            step="1"
            value={tenure}
            onChange={(e) => setTenure(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            {tenure} years
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary/5 rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">Monthly EMI</p>
          <p className="text-lg font-bold text-primary">
            ₹{emi.toFixed(0)}
          </p>
        </div>
        <div className="bg-primary/5 rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">Total Interest</p>
          <p className="text-lg font-bold text-primary">
            ₹{totalInterest.toFixed(0)}
          </p>
        </div>
      </div>
    </div>
  )
}

function SIPCalculatorForm() {
  const [monthlyInvestment, setMonthlyInvestment] = useState(5000)
  const [expectedReturn, setExpectedReturn] = useState(12)
  const [timePeriod, setTimePeriod] = useState(10)

  const monthlyRate = expectedReturn / 100 / 12
  const months = timePeriod * 12
  const futureValue = monthlyInvestment * ((Math.pow(1 + monthlyRate, months) - 1) / monthlyRate) * (1 + monthlyRate)
  const totalInvestment = monthlyInvestment * months
  const estimatedReturns = futureValue - totalInvestment

  return (
    <div className="space-y-6">
      <div className="grid gap-4">
        <div>
          <label className="text-sm font-medium block mb-2">Monthly Investment (₹)</label>
          <input
            type="range"
            min="500"
            max="100000"
            step="500"
            value={monthlyInvestment}
            onChange={(e) => setMonthlyInvestment(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            ₹{monthlyInvestment.toLocaleString()}
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Expected Return (%)</label>
          <input
            type="range"
            min="1"
            max="20"
            step="0.5"
            value={expectedReturn}
            onChange={(e) => setExpectedReturn(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            {expectedReturn}%
          </div>
        </div>
        
        <div>
          <label className="text-sm font-medium block mb-2">Time Period (years)</label>
          <input
            type="range"
            min="1"
            max="30"
            step="1"
            value={timePeriod}
            onChange={(e) => setTimePeriod(Number(e.target.value))}
            className="w-full"
          />
          <div className="text-right text-sm text-muted-foreground mt-1">
            {timePeriod} years
          </div>
        </div>
      </div>
      
      <div className="grid grid-cols-2 gap-4">
        <div className="bg-primary/5 rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">Invested Amount</p>
          <p className="text-lg font-bold text-primary">
            ₹{totalInvestment.toLocaleString()}
          </p>
        </div>
        <div className="bg-primary/5 rounded-lg p-3 text-center">
          <p className="text-xs text-muted-foreground">Estimated Returns</p>
          <p className="text-lg font-bold text-primary">
            ₹{estimatedReturns.toLocaleString()}
          </p>
        </div>
      </div>
      
      <div className="bg-primary/10 rounded-lg p-4 text-center">
        <p className="text-sm text-muted-foreground mb-1">Future Value</p>
        <p className="text-2xl font-bold text-primary">
          ₹{futureValue.toLocaleString()}
        </p>
      </div>
    </div>
  )
}