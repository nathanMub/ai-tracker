'use client'

import { tools } from '@/lib/tools'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [upvotes, setUpvotes] = useState<Record<string, number>>({})
  const [selectedTools, setSelectedTools] = useState<string[]>([])
  const [hoveredTool, setHoveredTool] = useState<string | null>(null)

  useEffect(() => {
    const stored = localStorage.getItem('upvotes')
    if (stored) setUpvotes(JSON.parse(stored))
  }, [])

  const handleUpvote = (id: string, e: React.MouseEvent) => {
    e.preventDefault()
    const newUpvotes = {...upvotes, [id]: (upvotes[id] || 0) + 1 }
    setUpvotes(newUpvotes)
    localStorage.setItem('upvotes', JSON.stringify(newUpvotes))
  }

  const toggleCompare = (id: string) => {
    setSelectedTools(prev => 
      prev.includes(id) 
      ? prev.filter(t => t!== id)
        : prev.length < 3? [...prev, id] : prev
    )
  }

  const sortedTools = [...tools].sort((a, b) => (upvotes[b.id] || 0) - (upvotes[a.id] || 0))

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      {/* Header with gradient glow */}
      <div className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
            <h1 className="text-xl font-bold">AI Tracker</h1>
            <span className="text-xs bg-orange-500/20 text-orange-400 px-2 py-1 rounded-full">BETA</span>
          </div>
          <Link href="/submit" className="bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 px-5 py-2.5 rounded-lg font-semibold text-sm shadow-lg shadow-orange-500/25 transition-all hover:scale-105">
            Submit Tool
          </Link>
        </div>
      </div>

      {/* Compare Bar */}
      {selectedTools.length > 0 && (
        <div className="sticky top-[65px] z-30 bg-gradient-to-r from-purple-600 to-blue-600 px-4 py-3 shadow-lg shadow-purple-500/20 animate-in slide-in-from-top">
          <div className="max-w-7xl mx-auto flex items-center justify-between">
            <div className="flex items-center gap-3">
              <span className="font-semibold">{selectedTools.length}/3 tools selected</span>
              <div className="flex -space-x-2">
                {selectedTools.map(id => {
                  const tool = tools.find(t => t.id === id)
                  return (
                    <img key={id} src={tool?.logo} alt="" className="w-6 h-6 rounded-full bg-white border-2 border-purple-600" />
                  )
                })}
              </div>
            </div>
            <Link 
              href={`/compare?tools=${selectedTools.join(',')}`}
              className="bg-white text-purple-600 px-5 py-2 rounded-lg font-semibold text-sm hover:scale-105 transition-transform"
            >
              Compare Now →
            </Link>
          </div>
        </div>
      )}

      {/* Hero Section */}
      <div className="max-w-7xl mx-auto px-4 pt-16 pb-8">
        <div className="text-center mb-12">
          <div className="inline-block mb-4 px-4 py-1.5 bg-orange-500/10 border border-orange-500/20 rounded-full text-orange-400 text-sm font-medium">
            🔥 Updated daily with AI
          </div>
          <h2 className="text-5xl md:text-6xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Top AI Tools Today
          </h2>
          <p className="text-gray-400 text-lg">Discover, upvote, and compare the best AI tools</p>
        </div>
        
        {/* Tool List */}
        <div className="space-y-4">
          {sortedTools.map((tool, index) => (
            <div 
              key={tool.id} 
              onMouseEnter={() => setHoveredTool(tool.id)}
              onMouseLeave={() => setHoveredTool(null)}
              className="group relative bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-5 hover:border-orange-500/50 transition-all duration-300 hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-0.5"
            >
              {/* Rank Badge */}
              {index < 3 && (
                <div className="absolute -top-2 -left-2 w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg flex items-center justify-center font-bold text-sm shadow-lg">
                  #{index + 1}
                </div>
              )}

              <div className="flex items-center gap-5">
                {/* Upvote */}
                <button 
                  onClick={(e) => handleUpvote(tool.id, e)}
                  className="flex flex-col items-center justify-center w-16 h-16 border-2 border-gray-700 rounded-xl hover:border-orange-500 hover:bg-orange-500/10 transition-all hover:scale-110 group/upvote"
                >
                  <svg className="w-5 h-5 mb-1 group-hover/upvote:text-orange-500 transition-colors" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3l7 7h-4v7h-6v-7H3l7-7z"/>
                  </svg>
                  <span className="text-base font-bold">{upvotes[tool.id] || 0}</span>
                </button>

                {/* Logo with glow */}
                <div className="relative">
                  <div className={`absolute inset-0 bg-orange-500/20 rounded-xl blur-xl transition-opacity ${hoveredTool === tool.id? 'opacity-100' : 'opacity-0'}`}></div>
                  <img 
                    src={tool.logo} 
                    alt={tool.name}
                    className="relative w-14 h-14 rounded-xl object-contain bg-white p-2 shadow-lg"
                    onError={(e) => {
                      e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=f97316&color=fff&size=128&bold=true`
                    }}
                  />
                </div>

                {/* Info */}
                <div className="flex-1 min-w-0">
                  <div className="flex items-center gap-2 mb-1.5">
                    <h3 className="text-xl font-bold group-hover:text-orange-400 transition-colors">{tool.name}</h3>
                    <span className="text-xs bg-gray-800 px-2.5 py-1 rounded-md text-gray-300 border border-gray-700">{tool.category}</span>
                    {tool.price.includes('Free') && (
                      <span className="text-xs bg-green-500/20 text-green-400 px-2.5 py-1 rounded-md border border-green-500/30">FREE</span>
                    )}
                  </div>
                  <p className="text-gray-400 text-sm mb-3 line-clamp-1">{tool.description}</p>
                  <div className="flex items-center gap-4 text-sm">
                    <span className="text-green-400 font-bold">{tool.price}</span>
                    <span className="text-gray-600">•</span>
                    <Link href={`/tools/${tool.id}`} className="text-gray-500 hover:text-orange-400 transition-colors flex items-center gap-1">
                      AI Review <span className="text-xs">→</span>
                    </Link>
                  </div>
                </div>

                {/* Compare Checkbox */}
                <button
                  onClick={() => toggleCompare(tool.id)}
                  className={`px-4 py-2.5 rounded-xl text-sm font-semibold border-2 transition-all ${
                    selectedTools.includes(tool.id) 
                    ? 'bg-purple-600 border-purple-600 text-white shadow-lg shadow-purple-500/25 scale-105' 
                      : 'border-gray-700 hover:border-purple-500 hover:bg-purple-500/10'
                  }`}
                >
                  {selectedTools.includes(tool.id)? '✓ Selected' : '+ Compare'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
