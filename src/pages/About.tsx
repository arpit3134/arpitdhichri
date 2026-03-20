import { Users, Target, Heart, Sparkles } from 'lucide-react'

export default function About() {
  const values = [
    {
      icon: Users,
      title: 'Community First',
      description: 'We believe in building a community of learners and creators.',
    },
    {
      icon: Target,
      title: 'Quality Content',
      description: 'Curating only the best resources for our users.',
    },
    {
      icon: Heart,
      title: 'Passion for Discovery',
      description: 'Helping others find what they need to succeed.',
    },
    {
      icon: Sparkles,
      title: 'Innovation',
      description: 'Always exploring new ways to improve discovery.',
    },
  ]

  return (
    <div className="min-h-screen">
      <div className="bg-gradient-to-b from-primary/5 to-transparent py-20">
        <div className="container text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">About OpenLov</h1>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            We're on a mission to help people discover amazing tools, articles, and resources.
          </p>
        </div>
      </div>

      <div className="container py-20">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-3xl font-bold mb-6">Our Story</h2>
          <p className="text-muted-foreground mb-6">
            OpenLov was born from a simple idea: finding quality resources shouldn't be hard. 
            In today's digital age, there's an overwhelming amount of information available, 
            and we wanted to create a platform that curates the best content in one place.
          </p>
          <p className="text-muted-foreground mb-12">
            Whether you're looking for the latest AI tools, insightful articles, or practical 
            calculators, OpenLov helps you discover exactly what you need to learn, grow, 
            and succeed.
          </p>

          <h2 className="text-3xl font-bold mb-6">Our Values</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
            {values.map((value) => (
              <div key={value.title} className="p-6 rounded-xl border bg-card">
                <value.icon className="h-10 w-10 text-primary mb-4" />
                <h3 className="text-lg font-semibold mb-2">{value.title}</h3>
                <p className="text-muted-foreground">{value.description}</p>
              </div>
            ))}
          </div>

          <h2 className="text-3xl font-bold mb-6">Join Our Journey</h2>
          <p className="text-muted-foreground">
            We're always looking to improve and grow. Have suggestions or want to contribute? 
            We'd love to hear from you. Get in touch through our contact page or follow us 
            on social media to stay updated.
          </p>
        </div>
      </div>
    </div>
  )
}