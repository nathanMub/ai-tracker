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
    <div className="min-h-screen bg-[#0E0E0E] text-white p-8">
      <div className="max-w-7xl mx-auto">
        <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
          ← Back to all tools
        </Link>
        
        <h1 className="text-4xl font-bold mb-8">Compare AI Tools</h1>
        
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {compareTools.map(tool => (
            <div key={tool.id} className="bg-[#1A1A1A] border border-gray-800 rounded-xl p-6">
              <img src={tool.logo} alt={tool.name} className="w-16 h-16 rounded-lg bg-white p-2 mb-4" />
              <h2 className="text-2xl font-bold mb-2">{tool.name}</h2>
              <p className="text-green-400 font-semibold mb-4">{tool.price}</p>
              
              <h3 className="font-semibold mb-2 text-green-400">Pros</h3>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                {tool.aiReview?.pros.map(pro => <li key={pro}>• {pro}</li>)}
              </ul>
              
              <h3 className="font-semibold mb-2 text-red-400">Cons</h3>
              <ul className="text-sm text-gray-400 mb-4 space-y-1">
                {tool.aiReview?.cons.map(con => <li key={con}>• {con}</li>)}
              </ul>
              
              <div className="bg-purple-600/20 border border-purple-600/50 rounded-lg p-3">
                <p className="text-xs text-purple-300 font-semibold">BEST FOR</p>
                <p className="text-sm">{tool.aiReview?.bestFor}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}
