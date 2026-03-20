import { cn } from '@/lib/utils'
import { Topic } from '@/types'

interface TopicChipProps {
  topic: Topic
  selected?: boolean
  onClick?: () => void
}

export function TopicChip({ topic, selected, onClick }: TopicChipProps) {
  return (
    <button
      onClick={onClick}
      className={cn(
        'inline-flex items-center gap-2 px-3 py-1.5 rounded-full text-sm font-medium transition-colors',
        selected
          ? 'bg-primary text-primary-foreground'
          : 'bg-muted hover:bg-muted/80'
      )}
    >
      <span>{topic.icon}</span>
      <span>{topic.name}</span>
      <span className="text-xs opacity-70">({topic.count})</span>
    </button>
  )
}