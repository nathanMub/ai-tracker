import { NextResponse } from 'next/server'

// This runs server-side. Later you add real scraping/API calls
export async function GET() {
  // Mock for now. Replace with real data fetch later
  const prices = {
    chatgpt: 'Free / $20/mo',
    claude: 'Free / $20/mo',
    updatedAt: new Date().toISOString()
  }
  
  return NextResponse.json(prices)
}
