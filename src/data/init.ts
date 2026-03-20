import { setTopics, setArticles } from './store'

export function initStore() {
  setTopics([
    {
      id: 't1',
      name: 'Technology',
      slug: 'technology',
      description: 'The tools and systems shaping the future.',
      articleCount: 24,
      icon: '⚡',
      color: 'teal',
    },
    {
      id: 't2',
      name: 'Science',
      slug: 'science',
      description: 'Discoveries pushing the boundaries of what we know.',
      articleCount: 18,
      icon: '🔬',
      color: 'blue',
    },
    {
      id: 't3',
      name: 'Culture',
      slug: 'culture',
      description: 'Ideas, art, and movements redefining society.',
      articleCount: 15,
      icon: '🎭',
      color: 'purple',
    },
    {
      id: 't4',
      name: 'Climate',
      slug: 'climate',
      description: 'Understanding and responding to planetary change.',
      articleCount: 21,
      icon: '🌍',
      color: 'green',
    },
    {
      id: 't5',
      name: 'Health',
      slug: 'health',
      description: 'The science and practice of human wellbeing.',
      articleCount: 19,
      icon: '🫀',
      color: 'rose',
    },
    {
      id: 't6',
      name: 'Economics',
      slug: 'economics',
      description: 'Markets, money, and the systems that move the world.',
      articleCount: 16,
      icon: '📈',
      color: 'amber',
    },
    {
      id: 't7',
      name: 'Design',
      slug: 'design',
      description: 'How we shape objects, spaces, and experiences.',
      articleCount: 12,
      icon: '✦',
      color: 'pink',
    },
    {
      id: 't8',
      name: 'Philosophy',
      slug: 'philosophy',
      description: 'Questions worth sitting with for a long time.',
      articleCount: 10,
      icon: '∞',
      color: 'indigo',
    },
  ])

  setArticles([
    {
      id: 'a1',
      title: 'The quiet revolution in ambient computing',
      excerpt:
        'Devices are disappearing into the background—and taking our attention with them. What happens when the screen is no longer the interface?',
      topicId: 't1',
      topicName: 'Technology',
      readTime: 6,
      publishedAt: '2024-11-10',
      featured: true,
    },
    {
      id: 'a2',
      title: 'What the gut microbiome is still trying to tell us',
      excerpt:
        'Decades of research and billions in funding later, we still know surprisingly little about the trillions living inside us.',
      topicId: 't5',
      topicName: 'Health',
      readTime: 8,
      publishedAt: '2024-11-08',
      featured: true,
    },
    {
      id: 'a3',
      title: 'How cities are redesigning themselves around water',
      excerpt:
        'From Rotterdam to Singapore, urban planners are accepting floods rather than fighting them—and building something beautiful in the process.',
      topicId: 't4',
      topicName: 'Climate',
      readTime: 7,
      publishedAt: '2024-11-06',
      featured: true,
    },
    {
      id: 'a4',
      title: 'The return of the physical object',
      excerpt:
        'After years of digitizing everything, designers are finding that material goods carry meaning software never could.',
      topicId: 't7',
      topicName: 'Design',
      readTime: 5,
      publishedAt: '2024-11-04',
      featured: false,
    },
    {
      id: 'a5',
      title: 'Degrowth economics is no longer a fringe idea',
      excerpt:
        'A growing number of economists argue that infinite growth on a finite planet was always the real radical position.',
      topicId: 't6',
      topicName: 'Economics',
      readTime: 9,
      publishedAt: '2024-11-02',
      featured: false,
    },
    {
      id: 'a6',
      title: 'Why attention is the new currency of science',
      excerpt:
        'Researchers are finding that where we direct our collective curiosity shapes what gets discovered—and what stays hidden.',
      topicId: 't2',
      topicName: 'Science',
      readTime: 6,
      publishedAt: '2024-10-30',
      featured: false,
    },
  ])
}