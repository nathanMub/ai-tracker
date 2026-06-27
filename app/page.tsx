// app/page.tsx
import Link from 'next/link'

export default function Home() {
  const tools = [
    {
      id: '1',
      name: 'ChatGPT',
      description: 'AI chatbot by OpenAI. Ask questions, write code, brainstorm ideas.',
      category: 'Chatbots',
      price: 'Freemium',
      url: 'https://chatgpt.com',
      featured: true,
      icon: '🤖'
    },
    {
      id: '2',
      name: 'Midjourney',
      description: 'AI image generator that creates stunning art from text prompts.',
      category: 'Image',
      price: 'Paid',
      url: 'https://midjourney.com',
      featured: false,
      icon: '🎨'
    },
    {
      id: '3',
      name: 'GitHub Copilot',
      description: 'AI coding assistant that lives in your editor and suggests code.',
      category: 'Coding',
      price: 'Paid',
      url: 'https://github.com/features/copilot',
      featured: false,
      icon: '💻'
    },
    {
      id: '4',
      name: 'Claude',
      description: 'Anthropic\'s AI assistant for analysis, writing, and coding.',
      category: 'Chatbots',
      price: 'Freemium',
      url: 'https://claude.ai',
      featured: false,
      icon: '🧠'
    }
  ]

  return (
    <main className="min-h-screen bg-gradient-to-br from-zinc-950 via-zinc-900 to-zinc-950">
      {/* Background glow */}
      <div className="fixed inset-0 bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-purple-900/20 via-transparent to-transparent"></div>
      
      <div className="relative max-w-7xl mx-auto px-4 py-16">
        
        {/* Header */}
        <div className="text-center mb-16">
          <div className="inline-block mb-4">
            <span className="px-4 py-1.5 text-xs font-semibold bg-purple-500/10 text-purple-400 rounded-full border border-purple-500/20">
              Curated by Nathan
            </span>
          </div>
          <h1 className="text-6xl md:text-7xl font-black mb-4 bg-gradient-to-r from-purple-400 via-blue-400 to-cyan-400 bg-clip-text text-transparent">
            AI Tool Hub
          </h1>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto">
            Discover the best AI tools to supercharge your workflow. Handpicked, no fluff.
          </p>
        </div>

        {/* Tools Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {tools.map((tool) => (
            <div 
              key={tool.id}
              className="group relative bg-zinc-900/50 backdrop-blur-sm border border-zinc-800 rounded-2xl p-6 hover:border-purple-500/50 hover:shadow-2xl hover:shadow-purple-500/10 transition-all duration-300 hover:-translate-y-1"
            >
              {/* Featured badge */}
              {tool.featured && (
                <div className="absolute -top-3 -right-3">
                  <span className="flex items-center gap-1 px-3 py-1 text-xs font-bold bg-gradient-to-r from-yellow-500 to-orange-500 text-black rounded-full shadow-lg">
                    ⭐ Featured
                  </span>
                </div>
              )}

              {/* Icon */}
              <div className="text-4xl mb-4 group-hover:scale-110 transition-transform">
                {tool.icon}
              </div>
              
              {/* Content */}
              <h2 className="text-2xl font-bold text-white mb-2 group-hover:text-purple-400 transition-colors">
                {tool.name}
              </h2>
              <p className="text-zinc-400 text-sm mb-6 leading-relaxed">
                {tool.description}
              </p>
              
              {/* Tags */}
              <div className="flex items-center gap-2 mb-6">
                <span className="px-3 py-1 text-xs font-medium bg-zinc-800 text-zinc-300 rounded-lg">
                  {tool.category}
                </span>
                <span className={`px-3 py-1 text-xs font-medium rounded-lg ${
                  tool.price === 'Freemium' 
                    ? 'bg-green-500/10 text-green-400' 
                    : 'bg-blue-500/10 text-blue-400'
                }`}>
                  {tool.price}
                </span>
              </div>

              {/* Button */}
              <Link 
                href={tool.url}
                target="_blank"
                className="block w-full text-center py-3 bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-500 hover:to-blue-500 rounded-xl font-semibold text-white transition-all duration-200 shadow-lg shadow-purple-500/20 hover:shadow-purple-500/40"
              >
                Visit Tool →
              </Link>
            </div>
          ))}
        </div>

        {/* Footer */}
        <div className="text-center mt-20 pt-8 border-t border-zinc-800">
          <p className="text-zinc-500 text-sm">
            Built with Next.js 15 • Deployed on Vercel • Germiston, SA 🇿🇦
          </p>
        </div>
      </div>
    </main>
  )
}
