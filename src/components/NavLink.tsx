import { Link, useLocation } from 'react-router-dom'
import { cn } from '@/lib/utils'

interface NavLinkProps {
  href: string
  children: React.ReactNode
  className?: string
}

export function NavLink({ href, children, className }: NavLinkProps) {
  const location = useLocation()
  const isActive = location.pathname === href || (href !== '/' && location.pathname.startsWith(href))

  return (
    <Link
      to={href}
      className={cn(
        'text-sm font-medium transition-colors hover:text-primary',
        isActive ? 'text-primary' : 'text-muted-foreground',
        className
      )}
    >
      {children}
    </Link>
  )
}