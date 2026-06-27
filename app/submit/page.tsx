'use client'

import Link from 'next/link'
import { useState } from 'react'

export default function SubmitPage() {
  const [form, setForm] = useState({
    name: '',
    url: '',
    description: '',
    category: 'Chat',
    price: '',
    twitter: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const submissions = JSON.parse(localStorage.getItem('submissions') || '[]')
    submissions.push({...form, id: Date.now(), votes: 0, submittedAt: new Date().toISOString()})
    localStorage.setItem('submissions', JSON.stringify(submissions))
    setSubmitted(true)
    setTimeout(() => {
      window.location.href = '/'
    }, 2000)
  }

  if (submitted) {
    return (
      <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white flex items-center justify-center">
        <div className="text-center">
          <div className="w-16 h-16 bg-gradient-to-br from-green-500 to-emerald-500 rounded-full flex items-center justify-center mx-auto mb-4">
            <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
          </div>
          <h2 className="text-3xl font-bold mb-2">Tool Submitted!</h2>
          <p className="text-gray-400">We'll review it and add it soon. Redirecting...</p>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#0D0D0D] to-[#000000] text-white">
      <div className="border-b border-gray-800/50 bg-[#0A0A0A]/80 backdrop-blur-xl">
        <div className="max-w-7xl mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="flex items-center gap-3">
            <div className="w-8 h-8 bg-gradient-to-br from-orange-500 to-pink-500 rounded-lg"></div>
            <h1 className="text-xl font-bold">AI Tracker</h1>
          </Link>
        </div>
      </div>

      <div className="max-w-2xl mx-auto px-4 py-16">
        <div className="text-center mb-8">
          <h1 className="text-4xl font-bold mb-3 bg-gradient-to-r from-white to-gray-400 bg-clip-text text-transparent">
            Submit an AI Tool
          </h1>
          <p className="text-gray-400">Found a cool AI tool? Share it with the community.</p>
        </div>

        <form onSubmit={handleSubmit} className="bg-gradient-to-br from-[#1A1A1A] to-[#141414] border border-gray-800/50 rounded-2xl p-8 space-y-6">
          <div>
            <label className="block text-sm font-semibold mb-2">Tool Name *</label>
            <input
              required
              type="text"
              value={form.name}
              onChange={(e) => setForm({...form, name: e.target.value})}
              placeholder="e.g. ChatGPT"
              className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Website URL *</label>
            <input
              required
              type="url"
              value={form.url}
              onChange={(e) => setForm({...form, url: e.target.value})}
              placeholder="https://..."
              className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Description *</label>
            <textarea
              required
              value={form.description}
              onChange={(e) => setForm({...form, description: e.target.value})}
              placeholder="What does this tool do? What makes it special?"
              rows={3}
              className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <div className="grid grid-cols-2 gap-4">
            <div>
              <label className="block text-sm font-semibold mb-2">Category *</label>
              <select
                value={form.category}
                onChange={(e) => setForm({...form, category: e.target.value})}
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              >
                <option>Chat</option>
                <option>Image</option>
                <option>Video</option>
                <option>Music</option>
                <option>Coding</option>
                <option>Writing</option>
                <option>Productivity</option>
              </select>
            </div>

            <div>
              <label className="block text-sm font-semibold mb-2">Pricing *</label>
              <input
                required
                type="text"
                value={form.price}
                onChange={(e) => setForm({...form, price: e.target.value})}
                placeholder="Free / $20/mo"
                className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
              />
            </div>
          </div>

          <div>
            <label className="block text-sm font-semibold mb-2">Twitter / X Handle</label>
            <input
              type="text"
              value={form.twitter}
              onChange={(e) => setForm({...form, twitter: e.target.value})}
              placeholder="@username"
              className="w-full bg-[#0D0D0D] border border-gray-800 rounded-lg px-4 py-3 focus:outline-none focus:border-orange-500 transition"
            />
          </div>

          <button
            type="submit"
            className="w-full bg-gradient-to-r from-orange-500 to-pink-500 hover:from-orange-600 hover:to-pink-600 py-4 rounded-lg font-bold text-lg shadow-lg shadow-orange-500/25 transition-all hover:scale-[1.02]"
          >
            Submit Tool →
          </button>
        </form>

        <p className="text-center text-gray-500 text-sm mt-6">
          Tools are reviewed before going live. Usually takes 24 hours.
        </p>
      </div>
    </div>
  )
}
