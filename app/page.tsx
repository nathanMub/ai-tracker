// app/page.tsx
'use client'

import { useState, useEffect } from 'react'

type AITool = {
  id: string
  name: string
  description: string
  logo: string
  votes: number
  url: string
}

const initialTools: AITool[] = [
  { id: '1', name: 'ChatGPT', description: 'Advanced AI chatbot for writing, coding, and problem solving', logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg', votes: 1842, url: 'https://chatgpt.com' },
  { id: '2', name: 'Claude', description: 'Anthropic\'s AI assistant with 200k context window', logo: 'https://avatars.githubusercontent.com/u/127994741', votes: 1621, url: 'https://claude.ai' },
  { id: '3', name: 'GitHub Copilot', description: 'AI coding assistant that lives in your editor', logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png', votes: 1589, url: 'https://github.com/features/copilot' },
  { id: '4', name: 'Midjourney', description: 'Best AI image generator via Discord', logo: 'https://seeklogo.com/images/M/midjourney-logo-02A3B9B4A8-seeklogo.com.png', votes: 1433, url: 'https://midjourney.com' },
  { id: '5', name: 'Perplexity', description: 'AI search engine that cites sources', logo: 'https://avatars.githubusercontent.com/u/126392263', votes: 1204, url: 'https://perplexity.ai' },
  { id: '6', name: 'Cursor', description: 'AI-first code editor for pair programming', logo: 'https://avatars.githubusercontent.com/u/126759922', votes: 1102, url: 'https://cursor.sh' },
  { id: '7', name: 'Gemini', description: 'Google\'s multimodal AI for text, images, and code', logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg', votes: 987, url: 'https://gemini.google.com' },
  { id: '8', name: 'ElevenLabs', description: 'Realistic AI voice generation and cloning', logo: 'https://avatars.githubusercontent.com/u/124599866', votes: 856, url: 'https://elevenlabs.io' },
  { id: '9', name: 'Runway', description: 'AI video generation and editing suite', logo: 'https://avatars.githubusercontent.com/u/62699294', votes: 743, url: 'https://runwayml.com' },
  { id: '10', name: 'DALL·E 3', description: 'OpenAI\'s image generator in ChatGPT', logo: 'https://upload.wikimedia.org/wikipedia/commons/a/a4/OpenAI_Logo.svg', votes: 691, url: 'https://openai.com/dall-e-3' },
]

export default function Home() {
  const [tools, setTools] = useState<AITool[]>([])
  const [votedTools, setVotedTools] = useState<Set<string>>(new Set())

  useEffect(() => {
    // Load from localStorage
    const savedVotes = localStorage.getItem('aiTrackerVotes')
    const savedVotedTools = localStorage.getItem('aiTrackerVotedTools')
    
    if (savedVotes) {
      const votesMap = JSON.parse(savedVotes)
      const updatedTools = initialTools.map(tool => ({
        ...tool,
        votes: votesMap[tool.id] || tool.votes
      })).sort((a, b) => b.votes - a.votes)
      setTools(updatedTools)
    } else {
      setTools(initialTools.sort((a, b) => b.votes - a.votes))
    }
    
    if (savedVotedTools) {
      setVotedTools(new Set(JSON.parse(savedVotedTools)))
    }
  }, [])

  const handleUpvote = (id: string) => {
    if (votedTools.has(id)) return
    
    const newVotedTools = new Set(votedTools)
    newVotedTools.add(id)
    setVotedTools(newVotedTools)
    
    const newTools = tools.map(tool => 
      tool.id === id ? { ...tool, votes: tool.votes + 1 } : tool
    ).sort((a, b) => b.votes - a.votes)
    
    setTools(newTools)
    
    // Save to localStorage
    const votesMap = Object.fromEntries(newTools.map(t => [t.id, t.votes]))
    localStorage.setItem('aiTrackerVotes', JSON.stringify(votesMap))
    localStorage.setItem('aiTrackerVotedTools', JSON.stringify([...newVotedTools]))
  }

  return (
    <main className="min-h-screen bg-[#0A0A0A] text-white">
      {/* Header */}
      <header className="border-b border-zinc-900 sticky top-0 z-50 bg-[#0A0A0A]/90 backdrop-blur-xl">
        <div className="max-w-3xl mx-auto px-4 py-4">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-orange-500 to-pink-500 flex items-center justify-center">
              <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                <path d="M10 2l6 6h-4v8H8V8H4l6-6z"/>
              </svg>
            </div>
            <div>
              <h1 className="text-xl font-black">AI Upvote Tracker</h1>
              <p className="text-xs text-zinc-500">Community-ranked AI tools</p>
            </div>
          </div>
        </div>
      </header>

      {/* Leaderboard */}
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="mb-6">
          <h2 className="text-2xl font-bold mb-1">Top AI Tools Today</h2>
          <p className="text-zinc-500 text-sm">Upvote your favorites. Rankings update live.</p>
        </div>

        <div className="space-y-2">
          {tools.map((tool, index) => (
            <div 
              key={tool.id}
              className="group flex items-center gap-4 bg-zinc-900/40 border border-zinc-800 rounded-xl p-3 hover:bg-zinc-900 hover:border-zinc-700 transition-all"
            >
              {/* Rank */}
              <div className={`text-center w-8 shrink-0 ${
                index === 0 ? 'text-yellow-400' : 
                index === 1 ? 'text-zinc-300' : 
                index === 2 ? 'text-orange-400' : 
                'text-zinc-600'
              }`}>
                <div className="text-2xl font-black leading-none">#{index + 1}</div>
              </div>

              {/* Upvote */}
              <button
                onClick={() => handleUpvote(tool.id)}
                disabled={votedTools.has(tool.id)}
                className={`flex flex-col items-center justify-center w-14 h-14 rounded-lg border transition-all shrink-0 ${
                  votedTools.has(tool.id)
                    ? 'bg-orange-500/10 border-orange-500/30 text-orange-400 cursor-not-allowed'
                    : 'bg-zinc-800 border-zinc-700 text-zinc-400 hover:bg-orange-500/10 hover:border-orange-500/30 hover:text-orange-400 hover:scale-105 active:scale-95'
                }`}
              >
                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 20 20">
                  <path d="M10 2l6 6h-4v8H8V8H4l6-6z"/>
                </svg>
                <span className="text-xs font-bold">{tool.votes}</span>
              </button>

              {/* Logo */}
              <div className="w-10 h-10 bg-white rounded-lg p-1.5 flex items-center justify-center shrink-0">
                <img src={tool.logo} alt={tool.name} className="w-full h-full object-contain" />
              </div>

              {/* Info */}
              <div className="flex-1 min-w-0">
                <a 
                  href={tool.url} 
                  target="_blank"
                  className="font-bold text-white hover:text-orange-400 transition-colors"
                >
                  {tool.name}
                </a>
                <p className="text-zinc-500 text-sm truncate">
                  {tool.description}
                </p>
              </div>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-12 py-8 border-t border-zinc-900 text-zinc-600 text-xs">
          Built by Nathan • Votes stored locally • {tools.length} tools tracked
        </div>
      </div>
    </main>
  )
}
