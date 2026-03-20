import { Calculator } from '@/types'

export const allCalculators: Calculator[] = [
  {
    id: '1',
    name: 'Mortgage Calculator',
    slug: 'mortgage-calculator',
    description: 'Calculate your monthly mortgage payments based on loan amount, interest rate, and term',
    category: 'Finance',
    formula: 'M = P [ i(1 + i)^n ] / [ (1 + i)^n – 1 ]',
    tags: ['Finance', 'Real Estate', 'Loan'],
    featured: true,
  },
  {
    id: '2',
    name: 'BMI Calculator',
    slug: 'bmi-calculator',
    description: 'Calculate your Body Mass Index based on height and weight',
    category: 'Health',
    formula: 'BMI = weight(kg) / height(m)²',
    tags: ['Health', 'Fitness', 'Wellness'],
    featured: true,
  },
  {
    id: '3',
    name: 'EMI Calculator',
    slug: 'emi-calculator',
    description: 'Calculate Equated Monthly Installments for loans',
    category: 'Finance',
    formula: 'EMI = P * r * (1+r)^n / ((1+r)^n - 1)',
    tags: ['Finance', 'Loan', 'EMI'],
    featured: false,
  },
  {
    id: '4',
    name: 'SIP Calculator',
    slug: 'sip-calculator',
    description: 'Calculate returns on Systematic Investment Plans',
    category: 'Finance',
    formula: 'FV = P * ((1 + r)^n - 1) / r * (1 + r)',
    tags: ['Finance', 'Investment', 'SIP'],
    featured: true,
  },
]