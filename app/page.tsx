// app/page.tsx
'use client'

import { useState } from 'react'
import Link from 'next/link'

type Tool = {
  id: string
  name: string
  description: string
  category: string
  price: string
  url: string
  logo: string
  featured: boolean
}

const allTools: Tool[] = [
  { id: '1', name: 'ChatGPT', description: 'Advanced AI chatbot for writing, coding, and problem solving', category: 'Writing', price: 'Free / $20/mo', url: 'https://chatgpt.com', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', featured: true },
  { id: '2', name: 'Claude', description: 'Anthropic\'s AI assistant with 200k context window', category: 'Writing', price: 'Free / $20/mo', url: 'https://claude.ai', logo: 'https://avatars.githubusercontent.com/u/127994741', featured: true },
  { id: '3', name: 'Midjourney', description: 'Best AI image generator via Discord', category: 'Image', price: '$10/mo', url: 'https://midjourney.com', logo: 'https://seeklogo.com/images/M/midjourney-logo-02A3B9B4A8-seeklogo.com.png', featured: true },
  { id: '4', name: 'DALL·E 3', description: 'OpenAI\'s image generator in ChatGPT', category: 'Image', price: '$20/mo', url: 'https://openai.com/dall-e-3', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/OpenAI_Logo.svg', featured: true },
  { id: '5', name: 'Runway', description: 'AI video generation and editing suite', category: 'Video', price: 'Free / $12/mo', url: 'https://runwayml.com', featured: true, logo: 'https://avatars.githubusercontent.com/u/62699294', },
  { id: '6', name: 'ElevenLabs', description: 'Best AI voice generator and cloning', category: 'Audio', price: 'Free / $5/mo', url: 'https://elevenlabs.io', featured: true, logo: 'https://avatars.githubusercontent.com/u/124599866', },
  { id: '7', name: 'Jasper', description: 'AI content platform for marketing teams', category: 'Marketing', price: '$39/mo', url: 'https://jasper.ai', logo: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/62efdebb8c656d7212a9b0a8_Jasper%20Logo%20Black.svg', featured: false },
  { id: '8', name: 'Copy.ai', description: 'AI copywriter for ads, emails, and websites', category: 'Marketing', price: '$36/mo', url: 'https://copy.ai', logo: 'https://assets-global.website-files.com/628288c5cd3e8451387d0416/62959d4d60b8355b8f8f2a0e_copy-ai-logo.svg', featured: false },
  { id: '9', name: 'Writesonic', description: 'GPT-4 powered writing assistant with SEO tools', category: 'Writing', price: '$16/mo', url: 'https://writesonic.com', logo: 'https://writesonic.com/static/img/logo.svg', featured: false },
  { id: '10', name: 'Rytr', description: 'Budget AI writing assistant for short-form content', category: 'Writing', price: '$9/mo', url: 'https://rytr.me', logo: 'https://rytr.me/wp-content/uploads/2021/03/rytr-logo.svg', featured: false },
]

const categories = ['All', 'Writing', 'Marketing', 'Productivity', 'Image', 'Video', 'Audio', 'Code', 'Research', 'Design', 'SEO', 'Chat', 'Image Editing']

export default function Home() {
  const [search, setSearch] = useState('')
  const [activeCategory, setActiveCategory] = useState('All')

  const featuredTools = allTools.filter(t => t.featured)
  const filteredTools = allTools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                          tool.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = activeCategory === 'All' || tool.category === activeCategory
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-[#0D0D0D] text-white">
      {/* Header */}
      <header className="border-b border-zinc-900/50 sticky top-0 z-50 bg-[#0D0D0D]/80 backdrop-blur-lg">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-400 to-pink-500"></div>
            <span className="text-xl font-bold">AI Tool Hub</span>
          </div>
          <div className="flex items-center gap-6">
            <button className="text-zinc-400 hover:text-white transition-colors">Browse Tools</button>
            <button className="px-4 py-2 bg-white text-black rounded-lg font-semibold hover:bg-zinc-200 transition-colors">
              Submit Tool
            </button>
          </div>
        </div>
      </header>

      {/* Hero */}
      <section className="relative bg-gradient-to-b from-[#1A1410] to-[#0D0D0D] border-b border-zinc-900/50">
        <div className="max-w-7xl mx-auto px-4 py-20 md:py-28 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-zinc-900/60 border border-zinc-800 rounded-full mb-8">
            <div className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></div>
            <span className="text-sm text-zinc-400">Updated daily with new AI tools</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-black mb-6 leading-tight">
            Find the best <span className="bg-gradient-to-r from-orange-400 to-pink-500 bg-clip-text text-transparent">AI tools</span><br/>
            in seconds
          </h1>
          
          <p className="text-lg text-zinc-400 max-w-2xl mx-auto mb-8">
            Stop wasting hours testing bad AI. We review, rank, and organize 56+ tools so you can ship faster.
          </p>
          
          <div className="flex items-center justify-center gap-4">
            <button className="px-6 py-3 bg-gradient-to-r from-orange-500 to-pink-500 rounded-xl font-semibold text-white hover:scale-105 transition-transform shadow-lg shadow-orange-500/20">
              Browse 56+ Tools
            </button>
            <button className="px-6 py-3 bg-zinc-900 border border-zinc-800 rounded-xl font-semibold text-white hover:bg-zinc-800 transition-colors">
              View Top Pick →
            </button>
          </div>

          {/* Stats */}
          <div className="flex items-center justify-center gap-12 mt-16">
            <div>
              <div className="text-4xl font-black text-white">56+</div>
              <div className="text-sm text-zinc-500">Tools</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white">12+</div>
              <div className="text-sm text-zinc-500">Categories</div>
            </div>
            <div>
              <div className="text-4xl font-black text-white">100%</div>
              <div className="text-sm text-zinc-500">Free</div>
            </div>
          </div>
        </div>
      </section>

      {/* Top Picks */}
      <section className="max-w-7xl mx-auto px-4 py-16">
        <div className="flex items-center gap-3 mb-8">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-orange-400 to-pink-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20"><path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z"/></svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold">Top Picks</h2>
            <p className="text-zinc-500">Hand-picked tools we actually use</p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {featuredTools.map((tool) => (
            <div key={tool.id} className="bg-[#1A1410] border border-zinc-900 rounded-2xl p-5 hover:border-orange-500/50 transition-all">
              <div className="flex items-start justify-between mb-3">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                    <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                  </div>
                  <div>
                    <h3 className="font-bold text-lg">{tool.name}</h3>
                    <span className="text-xs px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-md">{tool.category}</span>
                  </div>
                </div>
                <span className="px-2.5 py-1 text-xs font-bold bg-gradient-to-r from-orange-500 to-pink-500 rounded-full">
                  FEATURED
                </span>
              </div>
              
              <p className="text-zinc-400 text-sm mb-4 h-10 line-clamp-2">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">{tool.price}</span>
                <Link href={tool.url} target="_blank" className="text-zinc-400 hover:text-white text-sm font-semibold">
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* All Tools */}
      <section className="max-w-7xl mx-auto px-4 pb-20">
        <div className="flex items-center gap-3 mb-6">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-blue-400 to-purple-500 flex items-center justify-center">
            <svg className="w-5 h-5 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
          </div>
          <div>
            <h2 className="text-3xl font-bold">All Tools</h2>
            <p className="text-zinc-500">Search and filter 56+ AI tools</p>
          </div>
        </div>

        {/* Search */}
        <input 
          type="text"
          placeholder="Search tools by name, category, or description..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full px-4 py-3 bg-[#1A1410] border border-zinc-900 rounded-xl text-white placeholder-zinc-600 focus:border-orange-500 focus:outline-none mb-4"
        />

        {/* Category Filters */}
        <div className="flex items-center gap-2 mb-8 overflow-x-auto pb-2">
          {categories.map(cat => (
            <button
              key={cat}
              onClick={() => setActiveCategory(cat)}
              className={`px-4 py-2 rounded-lg text-sm font-semibold whitespace-nowrap transition-all ${
                activeCategory === cat 
                  ? 'bg-gradient-to-r from-orange-500 to-pink-500 text-white' 
                  : 'bg-zinc-900 text-zinc-400 hover:text-white border border-zinc-800'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredTools.map((tool) => (
            <div key={tool.id} className="bg-[#1A1410] border border-zinc-900 rounded-2xl p-5 hover:border-orange-500/50 transition-all">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                  <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <h3 className="font-bold text-lg">{tool.name}</h3>
                  <span className="text-xs px-2 py-0.5 bg-orange-500/10 text-orange-400 rounded-md">{tool.category}</span>
                </div>
              </div>
              
              <p className="text-zinc-400 text-sm mb-4 h-10 line-clamp-2">
                {tool.description}
              </p>
              
              <div className="flex items-center justify-between">
                <span className="text-green-400 font-semibold">{tool.price}</span>
                <Link href={tool.url} target="_blank" className="text-zinc-400 hover:text-white text-sm font-semibold">
                  View →
                </Link>
              </div>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20 text-zinc-600">
            No tools found for "{search}"
          </div>
        )}
      </section>
    </main>
  )
}
