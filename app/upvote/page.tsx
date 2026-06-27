'use client'

import { supabase } from '@/lib/supabase'
import Link from 'next/link'
import { useState, useEffect } from 'react'

type Tool = {
  id: string
  name: string
  description: string
  category: string
  price: string
  url: string
  logo: string
  votes: number
}

export default function UpvotePage() {
  const [tools, setTools] = useState<Tool[]>([])
  const [votedTools, setVotedTools] = useState<string[]>([])
  const [loading, setLoading] = useState(true)

  useEffect(() => {
    fetchTools()
    const saved = localStorage.getItem('votedTools')
    if (saved) setVotedTools(JSON.parse(saved))
  }, [])

  async function fetchTools() {
    const { data, error } = await supabase
      .from('tools')
      .select('id, name, description, category, price, url, logo, votes')
      .order('votes', { ascending: false })
    
    if (data) setTools(data)
    if (error) console.error(error)
    setLoading(false)
  }

  async function handleUpvote(toolId: string) {
    if (votedTools.includes(toolId)) return

    // Optimistic update
    setTools(prev => prev.map(t => 
      t.id === toolId ? { ...t, votes: t.votes + 1 } : t
    ).sort((a, b) => b.votes - a.votes))

    // Save to localStorage so they can't vote twice
    const newVoted = [...votedTools, toolId]
    setVotedTools(newVoted)
    localStorage.setItem('votedTools', JSON.stringify(newVoted))

    // Update Supabase
    const { error } = await supabase
      .from('tools')
      .update({ votes: tools.find(t => t.id === toolId)!.votes + 1 })
      .eq('id', toolId)

    if (error) {
      console.error(error)
      fetchTools() // Revert on error
    }
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <div className="text-xl">Loading top tools...</div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-[#0D0D0D] text-white">
      <nav className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-2">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
            <span className="font-bold text-xl">AI Tool Hub</span>
          </Link>
          <div className="flex items-center gap-4">
            <Link href="/" className="text-gray-400 hover:text-white transition text-sm">
              All Tools
            </Link>
            <Link 
              href="/upvote"
              className="bg-gradient-to-r from-orange-500 to-pink-500 px-4 py-2 rounded-lg font-semibold text-sm"
            >
              Top Voted
            </Link>
          </div>
        </div>
      </nav>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="text-center mb-12">
          <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-orange-300">Live • Global votes</span>
          </div>
          <h1 className="text-5xl font-bold mb-4">
            Top AI Tools
            <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"> This Week</span>
          </h1>
          <p className="text-gray-400 text-lg">
            Upvote your favorite tools. Most voted rises to the top.
          </p>
        </div>

        <div className="space-y-3">
          {tools.map((tool, index) => (
            <div
              key={tool.id}
              className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-5 hover:border-orange-500/30 transition-all flex items-center gap-5"
            >
              <div className="text-2xl font-bold text-gray-600 w-8 text-center">
                {index + 1}
              </div>

              <button
                onClick={() => handleUpvote(tool.id)}
                disabled={votedTools.includes(tool.id)}
                className={`flex flex-col items-center justify-center w-16 h-16 rounded-xl border-2 transition ${
                  votedTools.includes(tool.id)
                   ? 'bg-orange-500/20 border-orange-500/50 cursor-not-allowed'
                    : 'bg-[#0D0D0D] border-gray-700 hover:border-orange-500 hover:bg-orange-500/10 hover:scale-110'
                }`}
              >
                <svg 
                  className={`w-5 h-5 ${votedTools.includes(tool.id)? 'text-orange-500' : 'text-gray-400'}`}
                  fill="currentColor" 
                  viewBox="0 0 20 20"
                >
                  <path d="M10 3l7 7h-4v7H7v-7H3l7-7z" />
                </svg>
                <span className={`text-sm font-bold ${votedTools.includes(tool.id)? 'text-orange-500' : 'text-white'}`}>
                  {tool.votes}
                </span>
              </button>

              <img 
                src={tool.logo} 
                alt={tool.name}
                className="w-12 h-12 rounded-xl object-contain bg-white p-2"
              />
              
              <div className="flex-1 min-w-0">
                <Link href={`/tools/${tool.id}`} className="group">
                  <h3 className="font-bold text-lg mb-1 group-hover:text-orange-400 transition">
                    {tool.name}
                  </h3>
                </Link>
                <p className="text-gray-400 text-sm line-clamp-1">{tool.description}</p>
                <div className="flex items-center gap-3 mt-2">
                  <span className="text-xs text-orange-400 bg-orange-500/10 px-2 py-0.5 rounded">
                    {tool.category}
                  </span>
                  <span className="text-xs text-green-400 font-semibold">{tool.price}</span>
                </div>
              </div>

              <a
                href={tool.url}
                target="_blank"
                className="bg-[#0D0D0D] border border-gray-700 px-4 py-2 rounded-lg text-sm font-semibold hover:border-gray-600 transition whitespace-nowrap"
              >
                Visit →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
