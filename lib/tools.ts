export const tools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'Chat',
    price: 'Free / $20/mo',
    description: 'Conversational AI by OpenAI. Best for coding, writing, brainstorming.',
    url: 'https://chat.openai.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    tags: ['writing', 'coding', 'general'],
    aiReview: {
      pros: ['Best at coding', 'Huge plugin ecosystem', 'GPT-4o is fast'],
      cons: ['Can hallucinate', 'Data cutoff', 'Rate limits on free'],
      bestFor: 'Developers and writers who need speed'
    }
  },
  {
    id: 'claude',
    name: 'Claude 3.5 Sonnet',
    category: 'Chat',
    price: 'Free / $20/mo',
    description: 'Anthropic\'s AI. Best for long documents, coding, analysis.',
    url: 'https://claude.ai',
    logo: 'https://www.anthropic.com/images/icons/apple-touch-icon.png',
    tags: ['coding', 'analysis', 'documents'],
    aiReview: {
      pros: ['200k context window', 'Best at reasoning', 'Safer responses'],
      cons: ['Slower than GPT-4o', 'No image generation', 'Stricter filters'],
      bestFor: 'Analyzing PDFs and complex codebases'
    }
  },
  {
    id: 'midjourney',
    name: 'Midjourney',
    category: 'Image',
    price: '$10-60/mo',
    description: 'Best AI image generator. Runs on Discord. Photorealistic + artistic.',
    url: 'https://midjourney.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/midjourney.svg',
    tags: ['image', 'art', 'design'],
    aiReview: {
      pros: ['Best image quality', 'Amazing styles', 'Active community'],
      cons: ['Discord only', 'No free tier', 'Learning curve'],
      bestFor: 'Artists and designers who need photorealism'
    }
  },
  {
    id: 'cursor',
    name: 'Cursor',
    category: 'Coding',
    price: 'Free / $20/mo',
    description: 'AI code editor. Fork of VSCode. Writes, edits, debugs code with AI.',
    url: 'https://cursor.com',
    logo: 'https://cursor.com/apple-touch-icon.png',
    tags: ['coding', 'ide', 'developer'],
    aiReview: {
      pros: ['VSCode compatible', 'Composer is insane', 'Reads whole codebase'],
      cons: ['Paid for best models', 'Can be slow', 'New bugs'],
      bestFor: 'Devs who live in their editor'
    }
  },
  {
    id: 'suno',
    name: 'Suno',
    category: 'Music',
    price: 'Free / $10/mo',
    description: 'Generate full songs with vocals from text prompts. Insane quality.',
    url: 'https://suno.com',
    logo: 'https://suno.com/favicon.ico',
    tags: ['music', 'audio', 'creative'],
    aiReview: {
      pros: ['Full songs with vocals', 'Scary good quality', 'Free tier works'],
      cons: ['Copyright questions', 'Limited control', 'Gets generic'],
      bestFor: 'Content creators who need quick music'
    }
  },
  {
    id: 'runway',
    name: 'Runway ML',
    category: 'Video',
    price: 'Free / $12/mo',
    description: 'Text-to-video + video editing with AI. Gen-3 Alpha model.',
    url: 'https://runwayml.com',
    logo: 'https://runwayml.com/favicon.ico',
    tags: ['video', 'editing', 'creative'],
    aiReview: {
      pros: ['Best text-to-video', 'Pro editing tools', 'Gen-3 is wild'],
      cons: ['Expensive credits', 'Slow renders', 'Watermark on free'],
      bestFor: 'Filmmakers and editors'
    }
  }
]
