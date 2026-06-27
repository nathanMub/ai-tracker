'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SubmitPage() {
  const [submitted, setSubmitted] = useState(false)
  const [formData, setFormData] = useState({
    name: '',
    url: '',
    description: '',
    category: 'Chat',
    price: ''
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // For now: save to localStorage. Later: send to DB
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]')
    submissions.push({...formData, id: Date.now(), upvotes: 0, submittedAt: new Date()})
    localStorage.setItem('submissions', JSON.stringify(submissions))
    setSubmitted(true)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white flex items-center justify-center">
        <div className="text-center max-w-md">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-2xl mx-auto mb-6 flex items-center justify-center text-3xl">
            ✓
          </div>
          <h1 className="text-3xl font-bold mb-4">Tool Submitted!</h1>
          <p className="text-gray-400 mb-8">Thanks for contributing. We'll review and add it soon.</p>
          <Link href="/" className="bg-gradient-to-r from-orange-500 to-pink-500 px-6 py-3 rounded-lg font-semibold inline-block hover:scale-105 transition">
            Back to Tools
          </Link>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      <div className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl sticky top-0 z-40">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
            <h1 className="text-xl font-bold">AI Tracker</h1>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <h1 className="text-4xl font-bold mb-4 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
          Submit an AI Tool
        </h1>
        <p className="text-gray-400 mb-8">Found a cool AI tool? Share it with the community.</p>

        <form onSubmit={handleSubmit} className="space-y-6 bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-8">
          <div>
            <label className="block text-sm font-semibold mb-2">Tool Name *</label>
            <input
              type="text"
              required
              value={formData.name}
              onChange={(e) => setFormData({...formData, name: e.target.value})}
              placeholder="ChatGPT"
              className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Website URL *</label>
            <input
              type="url"
              required
              value={formData.url}
              onChange={(e) => setFormData({...formData, url: e.target.value})}
              placeholder="https://chat.openai.com"
              className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description *</label>
            <textarea
              required
              value={formData.description}
              onChange={(e) => setFormData({...formData, description: e.target.value})}
              placeholder="What does this tool do? What makes it special?"
              rows={4}
              className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition resize-none"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Category *</label>
              <select
                value={formData.category}
                onChange={(e) => setFormData({...formData, category: e.target.value})}
                className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              >
                <option>Chat</option>
                <option>Image</option>
                <option>Video</option>
                <option>Music</option>
                <option>Coding</option>
                <option>Writing</option>
                <option>Other</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Pricing *</label>
              <input
                type="text"
                required
                value={formData.price}
                onChange={(e) => setFormData({...formData, price: e.target.value})}
                placeholder="Free / $20/mo"
                className="w-full bg-[#0D0D0D] border border-gray-700 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 py-3.5 rounded-lg font-semibold shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]"
          >
            Submit Tool
          </button>
        </form>
      </div>
    </div>
  )
}
