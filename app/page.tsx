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
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      <div className="max-w-7xl mx-auto px-4 py-12">
        
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">
            AI Tool Hub
          </h1>
          <p className="text-gray-400 text-lg">
            {tools.length}+ AI tools. No fluff. Just what works.
          </p>
        </div>

        {/* FEATURED SECTION */}
        {featuredTools.length > 0 && (
          <div className="mb-16">
            <div className="flex items-center gap-3 mb-6">
              <div className="w-8 h-8 bg-gradient-to-br from-yellow-500 to-orange-500 rounded-lg flex items-center justify-center">
                ⭐
              </div>
              <h2 className="text-2xl font-bold">Top Picks</h2>
            </div>
            
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {featuredTools.map((tool) => (
                <Link
                  key={tool.id}
                  href={`/tools/${tool.id}`}
                  className="bg-gradient-to-br from-orange-500/10 to-pink-500/10 border-2 border-orange-500/30 rounded-2xl p-6 hover:border-orange-500/60 hover:scale-105 transition-all duration-200 relative"
                >
                  <div className="absolute top-3 right-3 bg-gradient-to-r from-orange-500 to-pink-500 text-xs font-bold px-2 py-1 rounded">
                    FEATURED
                  </div>
                  <div className="flex items-start gap-4 mb-4">
                    <img 
                      src={tool.logo} 
                      alt={tool.name}
                      className="w-14 h-14 rounded-xl object-contain bg-white p-2 shadow-lg"
                    />
                    <div className="flex-1">
                      <h3 className="font-bold text-xl mb-1">{tool.name}</h3>
                      <span className="text-xs text-orange-400 bg-orange-500/20 px-2 py-1 rounded">
                        {tool.category}
                      </span>
                    </div>
                  </div>
                  <p className="text-gray-300 text-sm mb-4 line-clamp-2">{tool.description}</p>
                  <div className="flex items-center justify-between">
                    <span className="text-green-400 font-bold text-lg">{tool.price}</span>
                    <span className="text-orange-400 text-sm font-semibold">View →</span>
                  </div>
                </Link>
              ))}
            </div>
          </div>
        )}

        {/* SEARCH + FILTERS */}
        <div className="mb-8 space-y-4">
          <div className="flex items-center gap-3 mb-4">
            <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-500 rounded-lg flex items-center justify-center">
              🔍
            </div>
            <h2 className="text-2xl font-bold">All Tools</h2>
          </div>
          
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
                className={`
