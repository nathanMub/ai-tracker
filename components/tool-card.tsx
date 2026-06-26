import Link from 'next/link'
import { Star } from 'lucide-react'

export default function ToolCard({ tool, index }: any) {
  return (
    <Link href={`/tools/${tool.slug}`}>
      <div className="group h-full overflow-hidden rounded-2xl border border-border/60 bg-card p-5 hover:border-violet-500/40 transition">
        <div className="flex items-start justify-between">
          <div className={`h-10 w-10 rounded-xl bg-gradient-to-br ${tool.color} flex items-center justify-center text-white font-bold`}>
            {tool.initial}
          </div>
          <div className="flex items-center gap-1 text-xs">
            <Star className="h-3 w-3 fill-amber-400 text-amber-400" />
            {tool.rating}
          </div>
        </div>
        <h3 className="mt-4 font-semibold group-hover:text-violet-300">{tool.name}</h3>
        <p className="text-xs text-muted-foreground mt-1 line-clamp-2">{tool.tagline}</p>
        <div className="mt-3 text-xs text-muted-foreground">{tool.pricing}</div>
      </div>
    </Link>
  )
}
