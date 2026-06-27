// app/page.tsx
import Link from 'next/link'

export default function Home() {
  // Hardcoded data - no database needed
  const tools = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'AI chatbot by OpenAI. Ask questions, write code, brainstorm ideas.',
      category: 'Chatbots',
      price: 'Freemium',
      url: 'https://chatgpt.com',
      featured: true
    },
    {
      id: '2',
      name: 'Midjourney', 
      description: 'AI image generator that creates stunning art from text prompts.',
      category: 'Image',
      price: 'Paid',
      url: 'https://midjourney.com',
      featured: false
    },
    {
      id: '3',
      name: 'GitHub Copilot',
      description: 'AI coding assistant that lives in your editor and suggests code.',
      category: 'Coding', 
      price: 'Paid',
      url: 'https://github.com/features/copilot',
      featured: false
    },
    {
      id: '4',
      name: 'Claude',
      description: 'Anthropic\'s AI assistant for analysis, writing, and coding.',
      category: 'Chatbots',
      price: 'Freemium',
      url: 'https://claude.ai',
      featured: false
    }
  ]

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold mb-4 bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            AI Tool Hub
          </h1>
          <p className="text-zinc-400 text-lg">
            Discover the best AI tools to supercharge your workflow
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className="bg-zinc-900 border border-zinc-800 rounded-xl p-6 hover:border-zinc-700 transition-all hover:scale-105"
            >
              {tool.featured && (
                <span className="inline-block px-3 py-1 text-xs font-semibold bg-yellow-500/10 text-yellow-500 rounded-full mb-3">
                  Featured
                </span>
              )}
              
              <h2 className="text-xl font-bold mb-2">{tool.name}</h2>
              <p className="text-zinc-400 text-sm mb-4 line-clamp-2">
                {tool.description}
              </p>
              
              <div className="flex items-center gap-2 mb-4">
                <span className="px-2 py-1 text-xs bg-zinc-800 rounded-md">
                  {tool.category}
                </span>
                <span className="px-2 py-1 text-xs bg-green-500/10 text-green-500 rounded-md">
                  {tool.price}
                </span>
              </div>

              <Link 
                href={tool.url}
                target="_blank"
                className="block w-full text-center py-2 bg-blue-600 hover:bg-blue-700 rounded-lg font-medium transition-colors"
              >
                Visit Tool
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-16 text-zinc-600 text-sm">
          <p>Built by Nathan. More tools coming soon.</p>
        </div>
      </div>
    </main>
  )
}
