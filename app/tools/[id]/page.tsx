import { tools } from '@/lib/tools'
import Link from 'next/link'
import { notFound } from 'next/navigation'

export default async function ToolPage({ params }: { params: Promise<{ id: string }> }) {
  const { id } = await params
  const tool = tools.find(t => t.id === id)
  
  if (!tool) return notFound()

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      <div className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Back to all tools
          </Link>
        </div>
      </div>

      <div className="max-w-4xl mx-auto px-4 py-12">
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-8 mb-8">
          <div className="flex items-start gap-6 mb-6">
            <img 
              src={tool.logo} 
              alt={tool.name}
              className="w-20 h-20 rounded-2xl object-contain bg-white p-3 shadow-xl"
            />
            <div className="flex-1">
              <h1 className="text-4xl font-bold mb-2">{tool.name}</h1>
              <p className="text-gray-400 mb-4">{tool.description}</p>
              <div className="flex items-center gap-3">
                <span className="text-2xl font-bold text-green-400">{tool.price}</span>
                <a 
                  href={tool.url} 
                  target="_blank"
                  className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-2.5 rounded-lg font-semibold hover:scale-105 transition"
                >
                  Visit Website →
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* AI Review */}
        <div className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-8">
          <div className="flex items-center gap-3 mb-6">
            <div className="w-10 h-10 bg-gradient-to-br from-purple-500 to-blue-500 rounded-lg flex items-center justify-center">
              ✨
            </div>
            <h2 className="text-2xl font-bold">AI Review</h2>
          </div>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div>
              <h3 className="font-semibold mb-3 text-green-400 flex items-center gap-2">
                <span className="text-lg">✓</span> Pros
              </h3>
              <ul className="space-y-2">
                {tool.aiReview?.pros.map(pro => (
                  <li key={pro} className="text-gray-300 flex items-start gap-2">
                    <span className="text-green-500 mt-1">•</span> {pro}
                  </li>
                ))}
              </ul>
            </div>

            <div>
              <h3 className="font-semibold mb-3 text-red-400 flex items-center gap-2">
                <span className="text-lg">✗</span> Cons
              </h3>
              <ul className="space-y-2">
                {tool.aiReview?.cons.map(con => (
                  <li key={con} className="text-gray-300 flex items-start gap-2">
                    <span className="text-red-500 mt-1">•</span> {con}
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-5">
            <p className="text-xs text-purple-300 font-semibold mb-1 uppercase tracking-wider">Best For</p>
            <p className="text-lg text-white">{tool.aiReview?.bestFor}</p>
          </div>
        </div>
      </div>
    </div>
  )
}
