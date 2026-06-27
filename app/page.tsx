'use client'

import { tools } from '@/lib/tools'
import Link from 'next/link'
import { useState } from 'react'
import { useRouter } from 'next/navigation'

export default function Home() {
  const [search, setSearch] = useState('')
  const router = useRouter()
  
  const popularTools = ['chatgpt', 'claude', 'midjourney', 'cursor', 'suno', 'runway']

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault()
    if (search.trim()) {
      router.push(`/tools?search=${search}`)
    }
  }

  return (
    <div className="min-h-screen bg-black text-white">
      <div className="max-w-4xl mx-auto px-4 py-20 text-center">
        <h1 className="text-6xl font-bold mb-6">
          Discover the best AI tools <span className="text-purple-500">in seconds</span>
        </h1>
        
        <form onSubmit={handleSearch} className="mb-12">
          <div className="flex gap-2 max-w-2xl mx-auto">
            <input
              type="text"
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              placeholder="Search AI tools..."
              className="flex-1 bg-gray-900 border border-gray-800 rounded-lg px-6 py-4 text-lg focus:outline-none focus:border-purple-500"
            />
            <button 
              type="submit"
              className="bg-purple-600 hover:bg-purple-700 px-8 py-4 rounded-lg font-semibold transition"
            >
              Search
            </button>
          </div>
        </form>

        <div className="flex flex-wrap gap-3 justify-center">
          <span className="text-gray-400">Popular:</span>
          {popularTools.map(id => {
            const tool = tools.find(t => t.id === id)
            if (!tool) return null
            return (
              <Link 
                key={id}
                href={`/tools?search=${tool.name}`}
                className="flex items-center gap-2 bg-gray-900 border border-gray-800 px-4 py-2 rounded-full hover:border-purple-500 transition"
              >
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-5 h-5 rounded object-contain bg-white"
                  onError={(e) => {
                    e.currentTarget.style.display = 'none'
                  }}
                />
                <span className="text-sm">{tool.name}</span>
              </Link>
            )
          })}
        </div>
      </div>
    </div>
  )
}
