import Link from 'next/link'
import { Sparkles } from 'lucide-react'

export default function Navbar() {
  return (
    <nav className="border-b border-border/40 bg-background/95 backdrop-blur">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="h-8 w-8 rounded-lg bg-gradient-to-br from-violet-500 to-fuchsia-500 flex items-center justify-center">
            <Sparkles className="h-4 w-4 text-white" />
          </div>
          AIToolHub
        </Link>
        <div className="flex items-center gap-6 text-sm">
          <Link href="/tools" className="text-muted-foreground hover:text-foreground">Tools</Link>
          <Link href="/tools" className="bg-gradient-to-r from-violet-500 to-fuchsia-500 text-white px-4 py-2 rounded-lg">Browse Tools</Link>
        </div>
      </div>
    </nav>
  )
}
