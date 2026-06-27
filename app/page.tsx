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
  featured: boolean
  votes: number
}

export default function Home() {
  const [tools, setTools] = useState<Tool[]>([])
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState('')

  useEffect(() => {
    fetchTools()
  }, [])

  async function fetchTools() {
    try {
      const { data, error } = await supabase
        .from('tools')
        .select('*')
        .order('featured', { ascending: false })
      
      if (error) throw error
      if (data) setTools(data)
    } catch (err: any) {
      setError('Failed to load tools. Check Supabase connection.')
      console.error(err)
    } finally {
      setLoading(false)
    }
  }

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

  if (loading) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <div className="text-xl">Loading AI tools...</div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-[#0D0D0D] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="text-xl text-red-500 mb-2">Error</div>
          <div className="text-gray-400">{error}</div>
        </div>
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
            <Link href="/upvote" className="text-gray-400 hover:text-white transition text-sm">
              Top Voted
            </Link>
          </div>
        </div>
      </nav>

      <section className="relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-orange-500/10 via-transparent to-pink-500/10"></div>
        <div className="max-w-7xl mx-auto px-4 py-20 relative">
          <div className="max-w-3xl mx-auto text-center">
            <div className="inline-flex items-center gap-2 bg-orange-500/10 border border-orange-500/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <span className="text-sm text-orange-300">Live database • Supabase</span>
            </div>
            
            <h1 className="text-5xl md:text-7xl font-bold mb-6 leading-tight">
              Find the best
              <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent"> AI tools</span>
              <br />in seconds
            </h1>
            
            <p className="text-xl text-gray-400 mb-8 max-w-2xl mx-auto">
              {tools.length}+ AI tools. Community voted. Updates in real-time.
            </p>

            <a 
              href="#tools"
              className="inline-block bg-gradient-to-r from-orange-500 to-pink-500 px-8 py-3.5 rounded-xl font-semibold hover:scale-105 transition-all shadow-lg shadow-orange-500/25"
            >
              Browse {tools.length}+ Tools
            </a>
          </div>
        </div>
      </section>

      <section id="tools" className="max-w-7xl mx-auto px-4 py-16">
        <input
          type="text"
          placeholder="Search tools..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full bg-[#1A1A1A] border border-gray-800 rounded-xl px-5 py-4 text-white placeholder-gray-500 focus:outline-none focus:border-orange-500 transition text-lg mb-6"
        />
        
        <div className="flex gap-2 flex-wrap mb-8">
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
      </section>
    </div>
  )
}
