import { tools } from '@/lib/tools'
import Link from 'next/link'

export default function ToolsPage({
  searchParams,
}: {
  searchParams: { search?: string }
}) {
  const query = searchParams.search?.toLowerCase() || ''
  
  const filteredTools = query 
    ? tools.filter(tool => 
        tool.name.toLowerCase().includes(query) ||
        tool.description.toLowerCase().includes(query) ||
        tool.tags.some(tag => tag.includes(query))
      )
    : tools

  return (
    <div className="min-h-screen bg-black text-white p-8">
      <div className="max-w-6xl mx-auto">
        <Link href="/" className="text-gray-400 hover:text-white mb-8 inline-block">
          ← Back
        </Link>
        
        <h1 className="text-4xl font-bold mb-2">
          {query ? `Results for "${query}"` : 'All AI Tools'}
        </h1>
        <p className="text-gray-400 mb-8">{filteredTools.length} tools found</p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredTools.map((tool) => (
            <a
              key={tool.id}
              href={tool.url}
              target="_blank"
              className="bg-gray-900 border border-gray-800 rounded-xl p-6 hover:border-purple-500 transition"
            >
              <div className="text-4xl mb-4">{tool.logo}</div>
              <h3 className="text-xl font-bold mb-2">{tool.name}</h3>
              <p className="text-purple-400 text-sm mb-3">{tool.price}</p>
              <p className="text-gray-400 text-sm mb-4">{tool.description}</p>
              <div className="flex flex-wrap gap-2">
                {tool.tags.map(tag => (
                  <span key={tag} className="text-xs bg-gray-800 px-2 py-1 rounded">
                    {tag}
                  </span>
                ))}
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  )
}
