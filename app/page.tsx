'use client'

import { tools } from '@/lib/tools'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(tools.map(t => t.category))]

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                         tool.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || tool.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            AI Tool Hub
          </h1>
          <p className="text-gray-400 text-lg">
            Discover the best AI tools. No fluff. Just what works.
          </p>
        </div>

        <div className="mb-8 space-y-4">
          <input
            type="text"
            placeholder="Search tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-4 py-3 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition"
          />
          
          <div className="flex gap-2 flex-wrap">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  category === cat
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white'
                    : 'bg-[#1A1A1A] border border-gray-800 text-gray-400 hover:border-gray-700'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <Link
              key={tool.id}
              href={`/tools/${tool.id}`}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/50 hover:scale-105 transition-all duration-200"
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-12 h-12 rounded-xl object-contain bg-white p-2"
                />
                <div className="flex-1">
                  <h3 className="font-bold text-lg mb-1">{tool.name}</h3>
                  <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-1 rounded">
                    {tool.category}
                  </span>
                </div>
              </div>
              <p className="text-gray-400 text-sm mb-4 line-clamp-2">{tool.description}</p>
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-bold">{tool.price}</span>
                <span className="text-gray-500 text-sm">View →</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-12 text-gray-500">
            No tools found. Try a different search.
          </div>
        )}
      </div>
    </div>
  )
}
