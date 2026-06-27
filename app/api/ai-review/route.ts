import { NextResponse } from 'next/server'
import OpenAI from 'openai'

const openai = new OpenAI({
  apiKey: process.env.OPENAI_API_KEY,
})

export async function POST(req: Request) {
  try {
    const { name, description, category, price } = await req.json()

    const prompt = `You are an expert AI tool reviewer. Analyze this tool and return ONLY valid JSON.

Tool: ${name}
Category: ${category}
Price: ${price}
Description: ${description}

Return JSON with this exact structure:
{
  "pros": ["3 specific pros, max 8 words each"],
  "cons": ["3 specific cons, max 8 words each"], 
  "bestFor": "One sentence: who should use this tool"
}

Be honest. If it's expensive, say it. If it's limited, say it. No marketing fluff.`

    const completion = await openai.chat.completions.create({
      model: 'gpt-4o-mini',
      messages: [{ role: 'user', content: prompt }],
      response_format: { type: 'json_object' },
      temperature: 0.7,
    })

    const review = JSON.parse(completion.choices[0].message.content || '{}')
    
    return NextResponse.json(review)
  } catch (error) {
    console.error(error)
    return NextResponse.json({ error: 'Failed to generate review' }, { status: 500 })
  }
}
