import { Link } from 'react-router-dom'
import { SectionHeader } from '@/components/SectionHeader'
import { topics } from '@/data/mockData'

export default function Topics() {
  return (
    <div className="min-h-screen py-12">
      <div className="container">
        <SectionHeader
          title="Topics"
          description="Explore content by topic"
        />
        
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mt-12">
          {topics.map((topic) => (
            <Link
              key={topic.id}
              to={`/topics/${topic.slug}`}
              className="group p-8 rounded-xl bg-card border hover:border-primary/50 transition-all hover:shadow-lg text-center"
            >
              <