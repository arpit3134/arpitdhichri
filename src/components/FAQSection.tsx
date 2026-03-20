import { useState } from 'react'
import { ChevronDown } from 'lucide-react'
import { cn } from '@/lib/utils'

interface FAQItem {
  question: string
  answer: string
}

const defaultFAQs: FAQItem[] = [
  {
    question: 'What is OpenLov?',
    answer: 'OpenLov is a discovery platform where you can find curated articles, tools, calculators, and resources all in one place.',
  },
  {
    question: 'Is OpenLov free to use?',
    answer: 'Yes, OpenLov is completely free to use. We believe in making quality resources accessible to everyone.',
  },
  {
    question: 'How can I submit a tool or resource?',
    answer: 'You can submit suggestions through our contact page. We review all submissions to ensure quality.',
  },
  {
    question: 'How often is content updated?',
    answer: 'We regularly update our content with new articles, tools, and resources to keep things fresh and relevant.',
  },
]

interface FAQSectionProps {
  faqs?: FAQItem[]
  title?: string
  description?: string
}

export function FAQSection({ 
  faqs = defaultFAQs, 
  title = "Frequently Asked Questions",
  description = "Find answers to common questions about OpenLov"
}: FAQSectionProps) {
  const [openIndex, setOpenIndex] = useState<number | null>(null)

  return (
    <section className="py-20">
      <div className="container max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-bold mb-4">{title}</h2>
          <p className="text-muted-foreground">{description}</p>
        </div>
        
        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border rounded-lg bg-card overflow-hidden"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full flex items-center justify-between p-4 text-left font-medium hover:bg-muted/50 transition-colors"
              >
                <span>{faq.question}</span>
                <ChevronDown
                  className={cn(
                    'h-5 w-5 transition-transform',
                    openIndex === index && 'rotate-180'
                  )}
                />
              </button>
              {openIndex === index && (
                <div className="p-4 pt-0 text-muted-foreground border-t">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}