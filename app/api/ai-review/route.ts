import { NextRequest, NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: NextRequest) {
  try {
    // Check if key exists first
    if (!process.env.OPENAI_API_KEY) {
      return NextResponse.json(
        { error: 'OPENAI_API_KEY not set in Vercel' }, 
        { status: 500 }
      )
    }

    const { name, description, category, price } = await req.json()

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [
        {
          role: 'system',
          content: 'You are a tech reviewer. Return ONLY valid JSON with keys: pros, cons, bestFor. pros and cons must be arrays of 3 short strings. bestFor is one sentence.'
        },
        {
          role: 'user',
          content: `Review this AI tool: ${name} - ${description}. Category: ${category}. Price: ${price}`
        }
      ],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    })

    const content = completion.choices[0].message.content
    if (!content) throw new Error('OpenAI returned empty response')
    
    const result = JSON.parse(content)
    return NextResponse.json(result)

  } catch (error: any) {
    console.error('AI Review Error:', error)
    return NextResponse.json(
      { error: error.message || 'Failed to generate review' }, 
      { status: 500 }
    )
  }
}
