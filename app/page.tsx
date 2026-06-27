'use client'

import { tools } from '@/lib/tools'
import Link from 'next/link'
import { useState } from 'react'

export default function Home() {
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All', ...new Set(tools.map(t => t.category))]
  const featuredTools = tools.filter(t => t.featured)
  
  const filteredTools = tools.filter(tool => {
    const query = search.toLowerCase()
    const matchesSearch = 
      tool.name.toLowerCase().includes(query) ||
      tool.description.toLowerCase().includes(query) ||
      tool.category.toLowerCase().includes(query)
    
    const matchesCategory = category === 'All' || tool.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      {/* NAVBAR */}
      <nav className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-xl">AI Tool Hub</span>
          </div>
          <div className="flex items-center gap-4">
            <Link href="#tools" className="text-gray-400 hover:text-white transition text-sm">
              Browse Tools
            </Link>
            <a 
              href="https://github.com" 
              target="_blank"
              className="bg-white text-black px-4 py-2 rounded-lg font-semibold text-sm hover:bg-gray-200 transition"
            >
              Submit Tool
            </a>
          </div>
        </div>
      </nav>

      {/* HERO SECTION */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-orange-300">Updated daily with new AI tools</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find the best
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"> AI tools</span>
              <br />in seconds
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              Stop wasting hours testing bad AI. We review, rank, and organize {tools.length}+ tools so you can ship faster.
            </p>

            <div className="flex items-center gap-4 justify-center mb-12">
              <a 
                href="#tools"
                className="bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-orange-500/25"
              >
                Browse {tools.length}+ Tools
              </a>
              <Link 
                href="/tools/chatgpt"
                className="bg-[#1A1A1A] border border-gray-800 px-8 py-3.5 rounded-xl font-semibold hover:border-gray-700 transition"
              >
                View Top Pick →
              </Link>
            </div>

            {/* STATS */}
            <div className="grid grid-cols-3 gap-8 max-w-2xl mx-auto">
              <div>
                <div className="text-3xl font-bold text-white mb-1">{tools.length}+</div>
                <div className="text-sm text-gray-500">AI Tools</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">{categories.length - 1}+</div>
                <div className="text-sm text-gray-500">Categories</div>
              </div>
              <div>
                <div className="text-3xl font-bold text-white mb-1">100%</div>
                <div className="text-sm text-gray-500">Free to Use</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* FEATURED SECTION */}
      {featuredTools.length > 0 && (
        <section className="max-w-7xl mx-auto px-4 py-16">
          <div className="flex items-center justify-between mb-8">
            <div className="flex items-center gap-3">
              <div className="w-10 h-10 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-xl flex items-center justify-center text-xl">
                ⭐
              </div>
              <div>
                <h2 className="text-3xl font-bold">Top Picks</h2>
                <p className="text-gray-500 text-sm">Hand-picked tools we actually use</p>
              </div>
            </div>
          </div>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredTools.slice(0, 6).map((tool) => (
              <Link
                key={tool.id}
                href={`/tools/${tool.id}`}
                className="bg-gradient-to-br from-orange-500/5 to-pink-500/5 border-2 border-orange-500/20 rounded-2xl p-6 hover:border-orange-500/40 hover:scale-105 transition-all duration-200 relative group"
              >
                <div className="absolute top-4 right-4 bg-gradient-to-r from-orange-500 to-pink-500 text-xs font-bold px-2.5 py-1 rounded-full">
                  FEATURED
                </div>
                <div className="flex items-start gap-4 mb-4">
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="w-14 h-14 rounded-xl object-contain bg-white p-2 shadow-xl group-hover:scale-110 transition"
                  />
                  <div className="flex-1">
                    <h3 className="font-bold text-xl mb-1">{tool.name}</h3>
                    <span className="text-xs text-orange-400 bg-orange-500/20 px-2.5 py-1 rounded-full">
                      {tool.category}
                    </span>
                  </div>
                </div>
                <p className="text-gray-300 text-sm mb-4 line-clamp-2">{tool.description}</p>
                <div className="flex items-center justify-between">
                  <span className="text-green-400 font-bold text-lg">{tool.price}</span>
                  <span className="text-orange-400 text-sm font-semibold group-hover:translate-x-1 transition">View →</span>
                </div>
              </Link>
            ))}
          </div>
        </section>
      )}

      {/* ALL TOOLS SECTION */}
      <section id="tools" className="max-w-7xl mx-auto px-4 py-16">
        <div className="mb-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-blue-500 to-purple-500 rounded-xl flex items-center justify-center text-xl">
              🔍
            </div>
            <div>
              <h2 className="text-3xl font-bold">All Tools</h2>
              <p className="text-gray-500 text-sm">Search and filter {tools.length}+ AI tools</p>
            </div>
          </div>
          
          <input
            type="text"
            placeholder="Search tools by name, category, or description..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-lg"
          />
          
          <div className="flex gap-2 flex-wrap mt-4">
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setCategory(cat)}
                className={`px-4 py-2 rounded-lg text-sm font-semibold transition ${
                  category === cat
                    ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white shadow-lg shadow-orange-500/25'
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
              className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-6 hover:border-orange-500/50 hover:scale-105 transition-all duration-200 group"
            >
              <div className="flex items-start gap-4 mb-4">
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-12 h-12 rounded-xl object-contain bg-white p-2 group-hover:scale-110 transition"
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
                <span className="text-gray-500 text-sm group-hover:text-orange-400 transition">View →</span>
              </div>
            </Link>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-16">
            <div className="text-6xl mb-4">🔍</div>
            <div className="text-xl text-gray-400 mb-2">No tools found</div>
            <div className="text-gray-600">Try a different search or category</div>
          </div>
        )}
      </section>

      {/* FOOTER */}
      <footer className="border-t border-gray-800/50 mt-20">
        <div className="max-w-7xl mx-auto px-4 py-12">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <div className="flex items-center gap-2">
              <div className="w-6 h-6 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
              <span className="font-semibold">AI Tool Hub</span>
            </div>
            <div className="text-gray-500 text-sm">
              Built by Nathan from Germiston 🇿🇦 • {new Date().getFullYear()}
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
