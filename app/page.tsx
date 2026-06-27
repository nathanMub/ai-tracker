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
  { id: '6', name: 'DALL-E 3', description: 'OpenAI\'s image generator built into ChatGPT.', category: 'Image', price: 'Freemium', url: 'https://openai.com/dall-e-3', featured: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/OpenAI_Logo.svg', votes: 298 },
  { id: '7', name: 'Stable Diffusion', description: 'Open-source AI image generator you can run locally.', category: 'Image', price: 'Free', url: 'https://stability.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/100421808', votes: 367 },
  { id: '8', name: 'Gemini', description: 'Google\'s multimodal AI for text, images, and code.', category: 'Chatbots', price: 'Freemium', url: 'https://gemini.google.com', featured: false, logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', votes: 312 },
  { id: '9', name: 'Runway', description: 'AI video generator and editor for creators.', category: 'Video', price: 'Freemium', url: 'https://runwayml.com', featured: false, logo: 'https://avatars.githubusercontent.com/u/62699294', votes: 267 },
  { id: '10', name: 'ElevenLabs', description: 'Realistic AI voice generation and cloning.', category: 'Audio', price: 'Freemium', url: 'https://elevenlabs.io', featured: false, logo: 'https://avatars.githubusercontent.com/u/124599866', votes: 289 },
  { id: '11', name: 'Notion AI', description: 'AI writing assistant built into Notion workspaces.', category: 'Productivity', price: 'Paid', url: 'https://notion.so/product/ai', featured: false, logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png', votes: 276 },
  { id: '12', name: 'Cursor', description: 'AI-first code editor built for pair programming with AI.', category: 'Coding', price: 'Freemium', url: 'https://cursor.sh', featured: false, logo: 'https://avatars.githubusercontent.com/u/126759922', votes: 401 },
  { id: '13', name: 'Synthesia', description: 'Create AI videos with digital avatars from text.', category: 'Video', price: 'Paid', url: 'https://synthesia.io', featured: false, logo: 'https://avatars.githubusercontent.com/u/71233652', votes: 198 },
  { id: '14', name: 'Grammarly', description: 'AI writing assistant for grammar, tone, and clarity.', category: 'Writing', price: 'Freemium', url: 'https://grammarly.com', featured: false, logo: 'https://static.grammarly.com/assets/files/efe71f8d9b2726c8d5ef/grammarly-logo.svg', votes: 345 },
  { id: '15', name: 'Leonardo.Ai', description: 'AI art generator focused on game assets and concept art.', category: 'Image', price: 'Freemium', url: 'https://leonardo.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/126839500', votes: 221 },
  { id: '16', name: 'Suno', description: 'Generate complete songs with vocals from text prompts.', category: 'Audio', price: 'Freemium', url: 'https://suno.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/148881063', votes: 256 },
  { id: '17', name: 'Luma AI', description: 'AI for 3D capture and video generation.', category: 'Video', price: 'Freemium', url: 'https://lumalabs.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/92341067', votes: 187 },
  { id: '18', name: 'Replit AI', description: 'AI coding in the browser with instant deployments.', category: 'Coding', price: 'Freemium', url: 'https://replit.com/ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/983194', votes: 233 },
  { id: '19', name: 'Otter.ai', description: 'AI meeting notes and real-time transcription.', category: 'Productivity', price: 'Freemium', url: 'https://otter.ai', featured: false, logo: 'https://avatars.githubusercontent.com/u/31618408', votes: 209 },
  { id: '20', name: 'Phind', description: 'AI search engine for developers with code answers.', category: 'Coding', price: 'Free', url: 'https://phind.com', featured: false, logo: 'https://www.phind.com/images/favicon.png', votes: 244 },
]

export default function Home() {
  const [tools, setTools] = useState<Tool[]>(allTools.sort((a, b) => b.votes - a.votes))
  const [votedTools, setVotedTools] = useState<Set<string>>(new Set())
  const [search, setSearch] = useState('')
  const [category, setCategory] = useState('All')

  const categories = ['All',...Array.from(new Set(allTools.map(t => t.category)))]

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

  const filteredTools = tools.filter(tool => {
    const matchesSearch = tool.name.toLowerCase().includes(search.toLowerCase()) || 
                          tool.description.toLowerCase().includes(search.toLowerCase())
    const matchesCategory = category === 'All' || tool.category === category
    return matchesSearch && matchesCategory
  })

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        <div className="text-center mb-12">
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Tool Hub
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto mb-8">
            {allTools.length}+ AI tools ranked by the community. Find your next superpower.
          </p>
          
          {/* Search + Filter */}
          <div className="flex flex-col md:flex-row gap-4 max-w-2xl mx-auto">
            <input 
              type="text"
              placeholder="Search AI tools..."
              value={search}
              onChange={(e) => setSearch(e.target.value)}
              className="flex-1 px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white placeholder-zinc-500 focus:border-purple-500 focus:outline-none"
            />
            <select 
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              className="px-4 py-3 bg-zinc-900 border border-zinc-800 rounded-xl text-white focus:border-purple-500 focus:outline-none"
            >
              {categories.map(cat => <option key={cat} value={cat}>{cat}</option>)}
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredTools.map((tool, index) => (
            <div key={tool.id} className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300">
              {index < 3 && (
                <div className="absolute -top-3 -left-3">
                  <span className="flex items-center justify-center w-8 h-8 text-sm font-black bg-gradient-to-br from-purple-500 to-blue-500 text-white rounded-full shadow-lg">
                    #{index + 1}
                  </span>
                </div>
              )}

              <button
                onClick={() => handleUpvote(tool.id)}
                disabled={votedTools.has(tool.id)}
                className={`absolute top-4 right-4 flex flex-col items-center gap-1 px-3 py-2 rounded-xl transition-all ${
                  votedTools.has(tool.id)
                   ? 'bg-purple-500/20 text-purple-400 cursor-not-allowed'
                    : 'bg-zinc-800 text-zinc-400 hover:bg-purple-500/20 hover:text-purple-400 hover:scale-110 active:scale-95'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l6 6h-4v8H8V8H4l6-6z"/>
                </svg>
                <span className="text-sm font-bold">{tool.votes}</span>
              </button>

              <div className="w-12 h-12 mb-4 bg-white rounded-xl p-2 group-hover:scale-110 transition-transform flex items-center justify-center">
                <img src={tool.logo} alt={`${tool.name} logo`} className="w-full h-full object-contain" />
              </div>
              
              <h2 className="text-xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors pr-16">
                {tool.name}
              </h2>
              <p className="text-zinc-400 text-sm mb-4 leading-relaxed line-clamp-2">
                {tool.description}
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-lg">
                  {tool.category}
                </span>
                <span className={`px-2 py-1 text-xs font-medium rounded-lg ${
                  tool.price === 'Free'? 'bg-green-500/10 text-green-400' : 
                  tool.price === 'Freemium'? 'bg-yellow-500/10 text-yellow-400' : 
                  'bg-blue-500/10 text-blue-400'
                }`}>
                  {tool.price}
                </span>
              </div>

              <Link href={tool.url} target="_blank" className="block w-full text-center py-2.5 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold text-white text-sm transition-all">
                Visit →
              </Link>
            </div>
          ))}
        </div>

        {filteredTools.length === 0 && (
          <div className="text-center py-20 text-zinc-500">
            No tools found. Try a different search.
          </div>
        )}

        <div className="text-center mt-20 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm mb-2">Built with Next.js 15 • {allTools.length} tools and counting</p>
          <button className="text-purple-400 hover:text-purple-300 text-sm font-semibold">
            + Submit an AI Tool
          </button>
        </div>
      </div>
    </main>
  )
}
