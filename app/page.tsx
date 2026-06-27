'use client'

import { tools } from '@/lib/tools'
import Link from 'next/link'
import { useState, useEffect } from 'react'

export default function Home() {
  const [upvotes, setUpvotes] = useState<Record<string, number>>({})
  const [selectedTools, setSelectedTools] = useState<string[]>([])

  useEffect(() => {
    const stored = localStorage.getItem('upvotes')
    if (stored) setUpvotes(JSON.parse(stored))
  }, [])

  const handleUpvote = (id: string) => {
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
    <div className="min-h-screen bg-[#0E0E0E] text-white">
      {/* Header */}
      <div className="border-b border-gray-800 bg-[#1A1A1A]">
        <div className="max-w-6xl mx-auto px-4 py-4 flex items-center justify-between">
          <h1 className="text-2xl font-bold">AI Tracker</h1>
          <Link href="/submit" className="bg-orange-500 hover:bg-orange-600 px-4 py-2 rounded-lg font-semibold text-sm">
            Submit Tool
          </Link>
        </div>
      </div>

      {/* Compare Bar */}
      {selectedTools.length > 0 && (
        <div className="sticky top-0 z-50 bg-purple-600 px-4 py-3">
          <div className="max-w-6xl mx-auto flex items-center justify-between">
            <span className="font-semibold">{selectedTools.length}/3 tools selected</span>
            <Link 
              href={`/compare?tools=${selectedTools.join(',')}`}
              className="bg-white text-purple-600 px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Compare Now →
            </Link>
          </div>
        </div>
      )}

      {/* Tool List */}
      <div className="max-w-6xl mx-auto px-4 py-8">
        <h2 className="text-3xl font-bold mb-8">Top AI Tools Today</h2>
        
        <div className="space-y-3">
          {sortedTools.map((tool, index) => (
            <div key={tool.id} className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-4 hover:border-gray-700 transition group">
              <div className="flex items-center gap-4">
                {/* Upvote */}
                <button 
                  onClick={() => handleUpvote(tool.id)}
                  className="flex flex-col items-center justify-center w-14 h-14 border border-gray-700 rounded-lg hover:border-orange-500 hover:bg-orange-500/10 transition"
                >
                  <svg className="w-4 h-4 mb-1" fill="currentColor" viewBox="0 0 20 20">
                    <path d="M10 3l7 7h-4v7h-6v-7H3l7-7z"/>
                  </svg>
                  <span className="text-sm font-bold">{upvotes[tool.id] || 0}</span>
                </button>

                {/* Logo */}
                <img 
                  src={tool.logo} 
                  alt={tool.name}
                  className="w-12 h-12 rounded-lg object-contain bg-white p-1"
                  onError={(e) => {
                    e.currentTarget.src = `https://ui-avatars.com/api/?name=${tool.name}&background=f97316&color=fff`
                  }}
                />

                {/* Info */}
                <div className="flex-1">
                  <div className="flex items-center gap-2 mb-1">
                    <h3 className="text-lg font-semibold group-hover:text-orange-400">{tool.name}</h3>
                    <span className="text-xs bg-gray-800 px-2 py-1 rounded text-gray-400">{tool.category}</span>
                  </div>
                  <p className="text-gray-400 text-sm mb-2">{tool.description}</p>
                  <div className="flex items-center gap-4 text-xs">
                    <span className="text-green-400 font-semibold">{tool.price}</span>
                    <Link href={`/tools/${tool.id}`} className="text-gray-500 hover:text-white">
                      AI Review →
                    </Link>
                  </div>
                </div>

                {/* Compare Checkbox */}
                <button
                  onClick={() => toggleCompare(tool.id)}
                  className={`px-3 py-2 rounded-lg text-xs font-semibold border transition ${
                    selectedTools.includes(tool.id) 
                     ? 'bg-purple-600 border-purple-600 text-white' 
                      : 'border-gray-700 hover:border-gray-600'
                  }`}
                >
                  {selectedTools.includes(tool.id)? 'Selected' : 'Compare'}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
