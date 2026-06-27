import { tools } from '@/lib/tools'
import Link from 'next/link'

export default async function ComparePage({
  searchParams,
}: {
  searchParams: Promise<{ tools?: string }>
}) {
  const params = await searchParams
  const toolIds = params.tools?.split(',') || []
  const compareTools = tools.filter(t => toolIds.includes(t.id))

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      <div className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4">
          <Link href="/" className="text-gray-400 hover:text-white transition">
            ← Back to all tools
          </Link>
        </div>
      </div>

      <div className="max-w-7xl mx-auto px-4 py-12">
        <h1 className="text-4xl font-bold mb-8 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Compare AI Tools
        </h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {compareTools.map(tool => (
            <div key={tool.id} className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-6">
              <img src={tool.logo} alt={tool.name} className="w-16 h-16 rounded-xl bg-white p-2 mb-4 shadow-lg" />
              <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
              <p className="text-green-400 font-bold text-xl mb-6">{tool.price}</p>
              
              <h3 className="font-semibold mb-3 text-green-400">✓ Pros</h3>
              <ul className="text-sm text-gray-300 mb-6 space-y-2">
                {tool.aiReview?.pros.map(pro => <li key={pro}>• {pro}</li>)}
              </ul>
              
              <h3 className="font-semibold mb-3 text-red-400">✗ Cons</h3>
              <ul className="text-sm text-gray-300 mb-6 space-y-2">
                {tool.aiReview?.cons.map(con => <li key={con}>• {con}</li>)}
              </ul>
              
              <div className="bg-gradient-to-r from-purple-600/20 to-blue-600/20 border border-purple-500/30 rounded-xl p-4">
                <p className="text-xs text-purple-300 font-semibold mb-1 uppercase">BEST FOR</p>
                <p className="text-sm">{tool.aiReview?.bestFor}</p>
              </div>

              <a 
                href={tool.url} 
                target="_blank"
                className="mt-6 w-full bg-gradient-to-r from-orange-500 to-pink-500 py-3 rounded-lg font-semibold text-center block hover:scale-105 transition"
              >
                Visit Website →
              </a>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
