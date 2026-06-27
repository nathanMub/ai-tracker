export const tools = [
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    category: 'Chat',
    price: 'Free / $20/mo',
    description: 'Conversational AI by OpenAI. Best for coding, writing, brainstorming.',
    url: 'https://chat.openai.com',
    logo: 'https://logo.clearbit.com/openai.com',
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
    logo: 'https://logo.clearbit.com/anthropic.com',
    tags: ['coding', 'analysis', 'documents'],
    aiReview: {
      pros: ['200k context window', 'Best at reasoning', 'Safer responses'],
      cons: ['Slower than GPT-4o', 'No image generation', 'Stricter filters'],
      bestFor: 'Analyzing PDFs and complex codebases'
    }
  }
]
