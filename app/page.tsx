// app/page.tsx
'use client'

import { useState, useEffect } from 'react'
import Link from 'next/link'

type Tool = {
  id: string
  name: string
  description: string
  category: string
  price: string
  url: string
  featured: boolean
  logo: string
  votes: number
}

const allTools: Tool[] = [
  { id: '1', name: 'ChatGPT', description: 'AI chatbot by OpenAI. Ask questions, write code, brainstorm ideas.', category: 'Chatbots', price: 'Freemium', url: 'https://chatgpt.com', featured: true, logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', votes: 542 },
  { id: '2', name: 'Claude', description: 'Anthropic\'s AI assistant for analysis, writing, and coding.', category: 'Chatbots', price: 'Freemium', url: 'https://claude.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/127994741', votes: 421 },
  { id: '3', name: 'Midjourney', description: 'AI image generator that creates stunning art from text prompts.', category: 'Image', price: 'Paid', url: 'https://midjourney.com', featured: false, logo: 'https://seeklogo.com/images/M/midjourney-logo-02A3B9B4A8-seeklogo.com.png', votes: 389 },
  { id: '4', name: 'GitHub Copilot', description: 'AI coding assistant that lives in your editor and suggests code.', category: 'Coding', price: 'Paid', url: 'https://github.com/features/copilot', featured: false, logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png', votes: 511 },
  { id: '5', name: 'Perplexity', description: 'AI search engine that cites sources and gives direct answers.', category: 'Search', price: 'Freemium', url: 'https://perplexity.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/126392263', votes: 334 },
  { id: '6', name: 'Gemini', description: 'Google\'s multimodal AI for text, images, and code.', category: 'Chatbots', price: 'Freemium', url: 'https://gemini.google.com', featured: false, logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', votes: 312 },
  { id: '7', name: 'Cursor', description: 'AI-first code editor built for pair programming with AI.', category: 'Coding', price: 'Freemium', url: 'https://cursor.sh', featured: false, logo: 'https://avatars.githubusercontent.com/u/126759922', votes: 401 },
  { id: '8', name: 'ElevenLabs', description: 'Realistic AI voice generation and cloning.', category: 'Audio', price: 'Freemium', url: 'https://elevenlabs.io', featured: false, logo: 'https://avatars.githubusercontent.com/u/124599866', votes: 289 },
]

export default function Home() {
  const [tools, setTools] = useState<Tool[]>(allTools.sort((a, b) => b.votes - a.votes))
  const [votedTools, setVotedTools] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')

  useEffect(() => {
    const saved = localStorage.getItem('votedTools')
    if (saved) setVotedTools(new Set(JSON.parse(saved)))
  }, [])

  const handleUpvote = (id: string) => {
    if (votedTools.has(id)) return
    const newVotedTools = new Set(votedTools)
    newVotedTools.add(id)
    setVotedTools(newVotedTools)
    localStorage.setItem('votedTools', JSON.stringify([...newVotedTools]))
    setTools(tools.map(tool => 
      tool.id === id? {...tool, votes: tool.votes + 1 } : tool
    ).sort((a, b) => b.votes - a.votes))
  }

  const filteredTools = tools.filter(tool => 
    tool.name.toLowerCase().includes(search.toLowerCase()) || 
    tool.description.toLowerCase().includes(search.toLowerCase())
  )

  return (
    <main className="min-h-screen bg-zinc-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/10 via-transparent to-transparent"></div>
      
      <div className="relative max-w-4xl mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="mb-8">
          <h1 className="text-5xl font-black mb-3 bg-gradient-to-r from-purple-400 to-blue-400 bg-clip-text text-transparent">
            AI Tool Hub
          </h1>
          <p className="text-zinc-400 mb-6">
            Upvote your favorite AI tools. Top tools rise daily.
          </p>
          
          {/* Search */}
          <input 
            type="text"
            placeholder="Search AI tools..."
            value={search}
            onChange={(e) => setSearch(e.target.value)}
            className="w-full px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
          />
        </div>

        {/* Vertical List */}
        <div className="space-y-3">
          {filteredTools.map((tool, index) => (
            <div 
              key={tool.id}
              className="group flex items-center gap-4 bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-xl p-4 hover:border-purple-500/50 hover:bg-zinc-900 transition-all duration-200"
            >
              {/* Rank */}
              <div className="text-zinc-600 font-bold text-sm w-8 text-center shrink-0">
                #{index + 1}
              </div>

              {/* Upvote Button - Vertical */}
              <button
                onClick={() => handleUpvote(tool.id)}
                disabled={votedTools.has(tool.id)}
                className={`flex flex-col items-center justify-center gap-0.5 w-12 h-16 rounded-lg transition-all shrink-0 ${
                  votedTools.has(tool.id)
                   ? 'bg-purple-500/20 text-purple-400'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-purple-500/20 hover:text-purple-400 hover:scale-105 active:scale-95'
                }`}
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l6 6h-4v8H8V8H4l6-6z"/>
                </svg>
                <span className="text-xs font-bold">{tool.votes}</span>
              </button>

              {/* Logo */}
              <div className="w-12 h-12 bg-white rounded-lg p-2 flex items-center justify-center shrink-0">
                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
              </div>

              {/* Content */}
              <div className="flex-1 min-w-0">
                <div className="flex items-center gap-2 mb-1">
                  <h2 className="text-lg font-bold text-white group-hover:text-purple-400 transition-colors">
                    {tool.name}
                  </h2>
                  {tool.featured && (
                    <span className="px-2 py-0.5 text-xs font-bold bg-yellow-500/20 text-yellow-400 rounded">
                      Featured
                    </span>
                  )}
                </div>
                <p className="text-zinc-400 text-sm mb-2 line-clamp-1">
                  {tool.description}
                </p>
                <div className="flex items-center gap-2">
                  <span className="px-2 py-0.5 text-xs bg-zinc-800 text-zinc-400 rounded">
                    {tool.category}
                  </span>
                  <span className={`px-2 py-0.5 text-xs rounded ${
                    tool.price === 'Freemium' 
                     ? 'bg-green-500/10 text-green-400' 
                      : 'bg-blue-500/10 text-blue-400'
                  }`}>
                    {tool.price}
                  </span>
                </div>
              </div>

              {/* Visit Button */}
              <Link 
                href={tool.url}
                target="_blank"
                className="px-4 py-2 bg-zinc-800 hover:bg-purple-600 rounded-lg font-semibold text-white text-sm transition-all shrink-0"
              >
                Visit
              </Link>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No tools found.
          </div>
        )}

        {/* Footer */}
        <div className="text-center mt-12 pt-8 border-t border-zinc-800 text-zinc-600 text-sm">
          Built by Nathan • {allTools.length} tools
        </div>
      </div>
    </main>
  )
                    }
