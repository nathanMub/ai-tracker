export const tools = [
  // WRITING & CONTENT
  {
    id: 'chatgpt',
    name: 'ChatGPT',
    description: 'Advanced AI chatbot for writing, coding, and problem solving',
    category: 'Writing',
    price: 'Free / $20/mo',
    url: 'https://chatgpt.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/chatgpt-4.svg',
    featured: true,
    aiReview: {
      pros: ['Most versatile AI', 'Great for coding', 'Huge plugin ecosystem'],
      cons: ['Can be slow', 'Knowledge cutoff', 'Hallucinates sometimes'],
      bestFor: 'General purpose AI assistant for writing, coding, and research'
    }
  },
  {
    id: 'claude',
    name: 'Claude',
    description: 'Anthropic\'s AI assistant with 200k context window',
    category: 'Writing',
    price: 'Free / $20/mo',
    url: 'https://claude.ai',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/7/7a/Anthropic_logo.svg',
    featured: true,
    aiReview: {
      pros: ['Massive context window', 'Best at coding', 'More ethical'],
      cons: ['Stricter limits', 'No image generation', 'Slower than GPT-4'],
      bestFor: 'Developers and writers working with long documents'
    }
  },
  {
    id: 'jasper',
    name: 'Jasper',
    description: 'AI content platform for marketing teams',
    category: 'Marketing',
    price: '$39/mo',
    url: 'https://jasper.ai',
    logo: 'https://assets-global.website-files.com/60e5f2de011b86acebc30db7/60e5f2de011b86c4b3c30e0f_jasper-logo.svg',
    aiReview: {
      pros: ['Marketing templates', 'Brand voice training', 'SEO mode'],
      cons: ['Expensive', 'Generic output', 'Locked behind paywall'],
      bestFor: 'Marketing teams creating blog posts and ad copy at scale'
    }
  },
  {
    id: 'copy-ai',
    name: 'Copy.ai',
    description: 'AI copywriter for ads, emails, and websites',
    category: 'Marketing',
    price: 'Free / $36/mo',
    url: 'https://copy.ai',
    logo: 'https://assets-global.website-files.com/628e8f56b0b59f1b7d4c8d4a/628e8f56b0b59f4c8a4c8d5f_copy-ai-logo.svg',
    aiReview: {
      pros: ['Good free tier', '90+ templates', 'Fast generation'],
      cons: ['Output needs editing', 'Repetitive', 'Weak long-form'],
      bestFor: 'Small businesses writing social posts and product descriptions'
    }
  },
  {
    id: 'writesonic',
    name: 'Writesonic',
    description: 'GPT-4 powered writing assistant with SEO tools',
    category: 'Writing',
    price: 'Free / $20/mo',
    url: 'https://writesonic.com',
    logo: 'https://writesonic.com/wp-content/uploads/2023/03/writesonic-logo.svg',
    aiReview: {
      pros: ['SEO optimization', 'Article writer', 'Affordable'],
      cons: ['UI is cluttered', 'Credit system confusing', 'Quality varies'],
      bestFor: 'Bloggers and SEO writers who need factual articles fast'
    }
  },
  {
    id: 'rytr',
    name: 'Rytr',
    description: 'Budget AI writing assistant for short-form content',
    category: 'Writing',
    price: 'Free / $9/mo',
    url: 'https://rytr.me',
    logo: 'https://rytr.me/wp-content/uploads/2021/04/rytr-logo.svg',
    aiReview: {
      pros: ['Cheapest option', 'Simple UI', '30+ languages'],
      cons: ['Weak at long-form', 'Basic features', 'Robotic tone'],
      bestFor: 'Students and solopreneurs on a tight budget'
    }
  },
  {
    id: 'grammarly',
    name: 'Grammarly',
    description: 'AI writing assistant for grammar and tone',
    category: 'Writing',
    price: 'Free / $12/mo',
    url: 'https://grammarly.com',
    logo: 'https://static.grammarly.com/assets/files/ef3458a5561e3b5d6a6d4e5e5e5e5e5e/grammarly-logo.svg',
    aiReview: {
      pros: ['Best grammar checker', 'Browser extension', 'Tone suggestions'],
      cons: ['AI features paywalled', 'Can be intrusive', 'Misses context'],
      bestFor: 'Anyone who writes emails and documents professionally'
    }
  },
  {
    id: 'notion-ai',
    name: 'Notion AI',
    description: 'AI writing inside your Notion workspace',
    category: 'Productivity',
    price: '$10/mo add-on',
    url: 'https://notion.so/product/ai',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/4/45/Notion_app_logo.png',
    aiReview: {
      pros: ['Integrated with notes', 'Summarizes docs', 'Good for ideation'],
      cons: ['Requires Notion', 'Extra cost', 'Not as smart as Claude'],
      bestFor: 'Teams already using Notion for docs and project management'
    }
  },

  // IMAGE GENERATION
  {
    id: 'midjourney',
    name: 'Midjourney',
    description: 'Best AI image generator via Discord',
    category: 'Image',
    price: '$10/mo',
    url: 'https://midjourney.com',
    logo: 'https://cdn.worldvectorlogo.com/logos/midjourney.svg',
    featured: true,
    aiReview: {
      pros: ['Best image quality', 'Amazing art styles', 'Active community'],
      cons: ['Discord only', 'No free tier', 'Learning curve'],
      bestFor: 'Artists and designers who want photorealistic AI images'
    }
  },
  {
    id: 'dalle-3',
    name: 'DALL·E 3',
    description: 'OpenAI\'s image generator in ChatGPT',
    category: 'Image',
    price: '$20/mo',
    url: 'https://openai.com/dall-e-3',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/0/04/ChatGPT_logo.svg',
    featured: true,
    aiReview: {
      pros: ['Best at text in images', 'Easy prompting', 'Integrated in ChatGPT'],
      cons: ['Behind paywall', 'Censorship heavy', 'Less artistic than MJ'],
      bestFor: 'Creating graphics with readable text and logos'
    }
  },
  {
    id: 'stable-diffusion',
    name: 'Stable Diffusion',
    description: 'Open source AI image generator',
    category: 'Image',
    price: 'Free',
    url: 'https://stability.ai',
    logo: 'https://avatars.githubusercontent.com/u/100299595',
    aiReview: {
      pros: ['Completely free', 'Run locally', 'Uncensored'],
      cons: ['Needs GPU', 'Complex setup', 'Worse quality out of box'],
      bestFor: 'Developers who want full control and NSFW generation'
    }
  },
  {
    id: 'leonardo-ai',
    name: 'Leonardo.Ai',
    description: 'AI art generator for game assets',
    category: 'Image',
    price: 'Free / $12/mo',
    url: 'https://leonardo.ai',
    logo: 'https://leonardo-cdn.b-cdn.net/wp-content/uploads/2023/02/leonardo-logo.svg',
    aiReview: {
      pros: ['Great for game art', 'Free daily credits', 'Fine-tuned models'],
      cons: ['Queue times', 'Confusing UI', 'Credits run out fast'],
      bestFor: 'Indie game devs creating character and environment art'
    }
  },
  {
    id: 'adobe-firefly',
    name: 'Adobe Firefly',
    description: 'Adobe\'s commercial-safe AI image generator',
    category: 'Image',
    price: 'Free / $5/mo',
    url: 'https://firefly.adobe.com',
    logo: 'https://www.adobe.com/content/dam/cc/icons/firefly.svg',
    aiReview: {
      pros: ['Commercial safe', 'Photoshop integration', 'Text effects'],
      cons: ['Boring style', 'Weak prompts', 'Heavy censorship'],
      bestFor: 'Corporate designers who need licensed images'
    }
  },
  {
    id: 'ideogram',
    name: 'Ideogram',
    description: 'AI image generator that\'s amazing at text',
    category: 'Image',
    price: 'Free / $8/mo',
    url: 'https://ideogram.ai',
    logo: 'https://ideogram.ai/assets/img/logo.svg',
    aiReview: {
      pros: ['Best text rendering', 'Good free tier', 'Clean UI'],
      cons: ['Slower than MJ', 'Less artistic', 'Limited styles'],
      bestFor: 'Creating posters, logos, and t-shirt designs with text'
    }
  },

  // VIDEO
  {
    id: 'runway',
    name: 'Runway',
    description: 'AI video generation and editing suite',
    category: 'Video',
    price: 'Free / $12/mo',
    url: 'https://runwayml.com',
    logo: 'https://cdn.prod.website-files.com/6424a1b5946b2a57e2d0c3d3/6424a1b5946b2a2e0ed0c400_runway-logo.svg',
    featured: true,
    aiReview: {
      pros: ['Best AI video', 'Gen-3 model', 'Full editor suite'],
      cons: ['Expensive credits', 'Short clips', 'Render queue'],
      bestFor: 'Filmmakers and editors creating AI b-roll and effects'
    }
  },
  {
    id: 'pika',
    name: 'Pika',
    description: 'AI video generator from text/image',
    category: 'Video',
    price: 'Free / $10/mo',
    url: 'https://pika.art',
    logo: 'https://pika.art/assets/logo.svg',
    aiReview: {
      pros: ['Good free tier', 'Easy to use', 'Fun effects'],
      cons: ['Low resolution', '3s limit free', 'Watermark'],
      bestFor: 'Social media creators making short AI clips'
    }
  },
  {
    id: 'heygen',
    name: 'HeyGen',
    description: 'AI avatar video generator with lip-sync',
    category: 'Video',
    price: 'Free / $24/mo',
    url: 'https://heygen.com',
    logo: 'https://assets-global.website-files.com/64c7f2e8b8a7b7e7e7e7e7e7/64c7f2e8b8a7b7e7e7e7e7f8_heygen-logo.svg',
    aiReview: {
      pros: ['Realistic avatars', 'Lip-sync any language', 'Templates'],
      cons: ['Uncanny valley', 'Expensive', 'Free watermark'],
      bestFor: 'Businesses making training videos without filming'
    }
  },
  {
    id: 'synthesia',
    name: 'Synthesia',
    description: 'AI video platform for business training',
    category: 'Video',
    price: '$29/mo',
    url: 'https://synthesia.io',
    logo: 'https://www.synthesia.io/_next/static/media/logo.8b5d7c5c.svg',
    aiReview: {
      pros: ['120+ languages', 'Professional avatars', 'No editing needed'],
      cons: ['Robotic feel', 'Very expensive', 'No free plan'],
      bestFor: 'Corporate L&D teams creating training videos at scale'
    }
  },
  {
    id: 'descript',
    name: 'Descript',
    description: 'Edit video by editing text',
    category: 'Video',
    price: 'Free / $12/mo',
    url: 'https://descript.com',
    logo: 'https://www.descript.com/static/images/logo.svg',
    aiReview: {
      pros: ['Edit video like docs', 'Overdub voice clone', 'Screen record'],
      cons: ['Buggy', 'Slow exports', 'Learning curve'],
      bestFor: 'Podcasters and YouTubers editing talking head videos'
    }
  },

  // AUDIO & VOICE
  {
    id: 'elevenlabs',
    name: 'ElevenLabs',
    description: 'Best AI voice generator and cloning',
    category: 'Audio',
    price: 'Free / $5/mo',
    url: 'https://elevenlabs.io',
    logo: 'https://elevenlabs.io/assets/logo.svg',
    featured: true,
    aiReview: {
      pros: ['Most realistic voices', 'Voice cloning', '29 languages'],
      cons: ['Character limits', 'Expensive scale', 'Misuse potential'],
      bestFor: 'Creators making audiobooks and voiceovers'
    }
  },
  {
    id: 'suno',
    name: 'Suno',
    description: 'AI music generator from text prompts',
    category: 'Audio',
    price: 'Free / $10/mo',
    url: 'https://suno.ai',
    logo: 'https://suno.ai/logo.svg',
    aiReview: {
      pros: ['Full songs with vocals', 'Scary good', 'Free tier'],
      cons: ['Copyright issues', 'Repetitive', 'No stems'],
      bestFor: 'Making background music and fun songs fast'
    }
  },
  {
    id: 'mubert',
    name: 'Mubert',
    description: 'Royalty-free AI music for creators',
    category: 'Audio',
    price: 'Free / $14/mo',
    url: 'https://mubert.com',
    logo: 'https://mubert.com/img/logo.svg',
    aiReview: {
      pros: ['Royalty free', 'Endless streams', 'API access'],
      cons: ['Generic sound', 'No vocals', 'Weak control'],
      bestFor: 'Streamers and app developers needing background music'
    }
  },
  {
    id: 'adobe-podcast',
    name: 'Adobe Podcast',
    description: 'AI audio enhancer and editor',
    category: 'Audio',
    price: 'Free',
    url: 'https://podcast.adobe.com',
    logo: 'https://www.adobe.com/content/dam/cc/icons/podcast.svg',
    aiReview: {
      pros: ['Best noise removal', 'Free', 'Enhance speech'],
      cons: ['Only web', 'Can sound robotic', 'Long uploads'],
      bestFor: 'Podcasters fixing bad audio recordings instantly'
    }
  },

  // CODE
  {
    id: 'github-copilot',
    name: 'GitHub Copilot',
    description: 'AI pair programmer in your IDE',
    category: 'Code',
    price: '$10/mo',
    url: 'https://github.com/features/copilot',
    logo: 'https://github.githubassets.com/images/modules/site/copilot/copilot.png',
    featured: true,
    aiReview: {
      pros: ['Best autocomplete', 'IDE integration', 'Knows your codebase'],
      cons: ['Can suggest bugs', 'Expensive', 'Trained on public code'],
      bestFor: 'Professional developers writing code daily'
    }
  },
  {
    id: 'cursor',
    name: 'Cursor',
    description: 'AI-first code editor forked from VSCode',
    category: 'Code',
    price: 'Free / $20/mo',
    url: 'https://cursor.com',
    logo: 'https://cursor.com/assets/logo.png',
    aiReview: {
      pros: ['Chat with codebase', 'Composer mode', 'GPT-4 + Claude'],
      cons: ['Buggy', 'Heavy RAM', 'Paywalled features'],
      bestFor: 'Developers who want AI built into their entire workflow'
    }
  },
  {
    id: 'replit',
    name: 'Replit AI',
    description: 'Browser IDE with AI coding agent',
    category: 'Code',
    price: 'Free / $20/mo',
    url: 'https://replit.com',
    logo: 'https://upload.wikimedia.org/wikipedia/commons/b/b2/Replit_logo.svg',
    aiReview: {
      pros: ['No setup needed', 'Agent builds apps', 'Deploy instantly'],
      cons: ['Slow', 'Limited free', 'Weak for big projects'],
      bestFor: 'Beginners learning to code and shipping MVPs'
    }
  },
  {
    id: 'v0',
    name: 'v0 by Vercel',
    description: 'Generate React components with AI',
    category: 'Code',
    price: 'Free / $20/mo',
    url: 'https://v0.dev',
    logo: 'https://v0.dev/favicon.svg',
    aiReview: {
      pros: ['Shadcn + Tailwind', 'Copy paste ready', 'Fast iteration'],
      cons: ['React only', 'Generic designs', 'Credit limits'],
      bestFor: 'Frontend devs scaffolding UI components fast'
    }
  },
  {
    id: 'bolt',
    name: 'Bolt.new',
    description: 'Prompt, run, edit, and deploy full-stack apps',
    category: 'Code',
    price: 'Free / $20/mo',
    url: 'https://bolt.new',
    logo: 'https://bolt.new/favicon.svg',
    aiReview: {
      pros: ['Full-stack in browser', 'Instant deploy', 'StackBlitz engine'],
      cons: ['Token limits', 'Breaks on complex apps', 'Beta'],
      bestFor: 'Shipping hackathon projects and MVPs in minutes'
    }
  },

  // PRODUCTIVITY
  {
    id: 'perplexity',
    name: 'Perplexity',
    description: 'AI search engine with citations',
    category: 'Research',
    price: 'Free / $20/mo',
    url: 'https://perplexity.ai',
    logo: 'https://uxwing.com/wp-content/themes/uxwing/download/brands-and-social-media/perplexity-ai-icon.svg',
    featured: true,
    aiReview: {
      pros: ['Real-time web search', 'Shows sources', 'Pro mode uses GPT-4'],
      cons: ['Can be wrong', 'Limited free Pro', 'Basic UI'],
      bestFor: 'Researchers and students who need cited answers fast'
    }
  },
  {
    id: 'gemini',
    name: 'Google Gemini',
    description: 'Google\'s multimodal AI in Workspace',
    category: 'Productivity',
    price: 'Free / $20/mo',
    url: 'https://gemini.google.com',
    logo: 'https://www.gstatic.com/lamda/images/gemini_sparkle_v002_d4735304ff6292a690345.svg',
    aiReview: {
      pros: ['Free tier strong', 'YouTube integration', 'Gmail/Docs access'],
      cons: ['Hallucinates', 'Privacy concerns', 'Worse at code'],
      bestFor: 'Google Workspace users who live in Gmail and Docs'
    }
  },
  {
    id: 'otter-ai',
    name: 'Otter.ai',
    description: 'AI meeting notes and transcription',
    category: 'Productivity',
    price: 'Free / $17/mo',
    url: 'https://otter.ai',
    logo: 'https://otter.ai/images/otter-logo.svg',
    aiReview: {
      pros: ['Auto-joins Zoom', 'Speaker ID', 'Search transcripts'],
      cons: ['Accuracy issues', 'Monthly limits', 'Privacy concerns'],
      bestFor: 'Teams who hate taking meeting notes manually'
    }
  },
  {
    id: 'fireflies',
    name: 'Fireflies.ai',
    description: 'AI notetaker for all your meetings',
    category: 'Productivity',
    price: 'Free / $10/mo',
    url: 'https://fireflies.ai',
    logo: 'https://assets-global.website-files.com/6130fa19a13f6a2b6e2b8e5a/6130fa19a13f6a2b6e2b8e5a_fireflies-logo.svg',
    aiReview: {
      pros: ['Works on all platforms', 'CRM integration', 'Topic tracking'],
      cons: ['Expensive scale', 'Bot feels intrusive', 'Storage limits'],
      bestFor: 'Sales teams logging calls to CRM automatically'
    }
  },

  // DESIGN
  {
    id: 'canva-ai',
    name: 'Canva Magic Studio',
    description: 'AI design tools inside Canva',
    category: 'Design',
    price: 'Free / $12/mo',
    url: 'https://canva.com/magic',
    logo: 'https://static.canva.com/static/images/canva_logo.svg',
    aiReview: {
      pros: ['Easy for non-designers', 'Magic Edit', 'Templates'],
      cons: ['Generic look', 'Paywalled AI', 'Not for pros'],
      bestFor: 'Small businesses making social media graphics fast'
    }
  },
  {
    id: 'figma-ai',
    name: 'Figma AI',
    description: 'AI design features in Figma',
    category: 'Design',
    price: 'Free / $12/mo',
    url: 'https://figma.com/ai',
    logo: 'https://cdn.worldvectorlogo.com/logos/figma-1.svg',
    aiReview: {
      pros: ['Generate layouts', 'Rename layers', 'Prototype faster'],
      cons: ['Beta features', 'Limited', 'Requires seat'],
      bestFor: 'UI/UX designers speeding up wireframing'
    }
  },
  {
    id: 'uizard',
    name: 'Uizard',
    description: 'Turn screenshots into editable designs',
    category: 'Design',
    price: 'Free / $12/mo',
    url: 'https://uizard.io',
    logo: 'https://uizard.io/static/img/logo.svg',
    aiReview: {
      pros: ['Screenshot to design', 'No design skills needed', 'Fast mockups'],
      cons: ['Messy output', 'Limited control', 'Paywall features'],
      bestFor: 'PMs and founders creating quick app mockups'
    }
  },
  {
    id: 'framer-ai',
    name: 'Framer AI',
    description: 'Generate websites with AI prompts',
    category: 'Design',
    price: 'Free / $5/mo',
    url: 'https://framer.com/ai',
    logo: 'https://www.framer.com/images/logos/framer-logo.svg',
    aiReview: {
      pros: ['Ship sites fast', 'No-code', 'Good animations'],
      cons: ['Framer lock-in', 'Limited CMS', 'Learning curve'],
      bestFor: 'Designers launching landing pages without code'
    }
  },

  // MARKETING & SEO
  {
    id: 'surfer-seo',
    name: 'Surfer SEO',
    description: 'AI content optimization for ranking',
    category: 'SEO',
    price: '$89/mo',
    url: 'https://surferseo.com',
    logo: 'https://surferseo.com/wp-content/uploads/2021/03/surfer-logo.svg',
    aiReview: {
      pros: ['Content score', 'SERP analyzer', 'NLP terms'],
      cons: ['Very expensive', 'Makes writing robotic', 'Overkill for small sites'],
      bestFor: 'SEO agencies optimizing blog posts to rank'
    }
  },
  {
    id: 'semrush',
    name: 'Semrush',
    description: 'All-in-one SEO suite with AI tools',
    category: 'SEO',
    price: '$129/mo',
    url: 'https://semrush.com',
    logo: 'https://cdn.semrush.com/static/index/semrush_logo.svg',
    aiReview: {
      pros: ['Best keyword data', 'Site audit', 'Competitor tracking'],
      cons: ['Insanely expensive', 'Overwhelming', 'AI features basic'],
      bestFor: 'SEO professionals managing large sites'
    }
  },

  // MORE TOOLS - CATEGORIES MIXED
  {
    id: 'character-ai',
    name: 'Character.AI',
    description: 'Chat with AI characters',
    category: 'Chat',
    price: 'Free / $10/mo',
    url: 'https://character.ai',
    logo: 'https://character.ai/logo.svg',
    aiReview: {
      pros: ['Fun personalities', 'Roleplay', 'Free'],
      cons: ['Filter heavy', 'Slow', 'Repetitive'],
      bestFor: 'Entertainment and creative writing inspiration'
    }
  },
  {
    id: 'poe',
    name: 'Poe',
    description: 'Access multiple AI models in one app',
    category: 'Chat',
    price: 'Free / $20/mo',
    url: 'https://poe.com',
    logo: 'https://poe.com/logo.svg',
    aiReview: {
      pros: ['GPT-4 + Claude + more', 'Create bots', 'Fast'],
      cons: ['Message limits', 'Quora owns data', 'Expensive'],
      bestFor: 'Testing different AI models side by side'
    }
  },
  {
    id: 'gamma',
    name: 'Gamma',
    description: 'AI presentation and doc maker',
    category: 'Productivity',
    price: 'Free / $8/mo',
    url: 'https://gamma.app',
    logo: 'https://gamma.app/logo.svg',
    aiReview: {
      pros: ['Beautiful decks', 'One prompt to slides', 'Interactive'],
      cons: ['Limited control', 'Generic designs', 'Credit system'],
      bestFor: 'Founders making pitch decks in 5 minutes'
    }
  },
  {
    id: 'tome',
    name: 'Tome',
    description: 'AI storytelling format for presentations',
    category: 'Productivity',
    price: 'Free / $10/mo',
    url: 'https://tome.app',
    logo: 'https://tome.app/logo.svg',
    aiReview: {
      pros: ['Unique format', 'Good AI writing', 'Mobile friendly'],
      cons: ['Weird UX', 'Not PowerPoint', 'Limited export'],
      bestFor: 'Creative presentations that aren\'t boring slides'
    }
  },
  {
    id: 'beautiful-ai',
    name: 'Beautiful.ai',
    description: 'Smart presentation builder',
    category: 'Productivity',
    price: '$12/mo',
    url: 'https://beautiful.ai',
    logo: 'https://www.beautiful.ai/logo.svg',
    aiReview: {
      pros: ['Auto-design', 'Brand kit', 'Team templates'],
      cons: ['No free plan', 'Rigid layouts', 'Limited'],
      bestFor: 'Sales teams making consistent pitch decks'
    }
  },
  {
    id: 'decktopus',
    name: 'Decktopus',
    description: 'AI presentation generator',
    category: 'Productivity',
    price: 'Free / $10/mo',
    url: 'https://decktopus.com',
    logo: 'https://decktopus.com/logo.svg',
    aiReview: {
      pros: ['Script + slides', 'Fast', 'Good templates'],
      cons: ['Basic AI', 'Watermark free', 'Limited'],
      bestFor: 'Students making class presentations fast'
    }
  },
  {
    id: 'lex',
    name: 'Lex',
    description: 'AI word processor for writers',
    category: 'Writing',
    price: 'Free',
    url: 'https://lex.page',
    logo: 'https://lex.page/logo.svg',
    aiReview: {
      pros: ['Clean UI', 'Good AI suggestions', 'Free'],
      cons: ['Basic features', 'No collaboration', 'Beta'],
      bestFor: 'Writers who want AI help without clutter'
    }
  },
  {
    id: 'sudowrite',
    name: 'Sudowrite',
    description: 'AI writing partner for fiction',
    category: 'Writing',
    price: '$10/mo',
    url: 'https://sudowrite.com',
    logo: 'https://www.sudowrite.com/logo.svg',
    aiReview: {
      pros: ['Built for novels', 'Brainstorm mode', 'Show don\'t tell'],
      cons: ['Expensive', 'Can be purple', 'Learning curve'],
      bestFor: 'Fiction authors beating writer\'s block'
    }
  },
  {
    id: 'huggingface',
    name: 'Hugging Face',
    description: 'Open source AI model hub',
    category: 'Code',
    price: 'Free',
    url: 'https://huggingface.co',
    logo: 'https://huggingface.co/front/assets/huggingface_logo.svg',
    aiReview: {
      pros: ['100k+ models', 'Spaces demos', 'Free inference'],
      cons: ['Technical', 'Models vary quality', 'Slow free tier'],
      bestFor: 'ML engineers testing open source models'
    }
  },
  {
    id: 'replicate',
    name: 'Replicate',
    description: 'Run AI models with an API',
    category: 'Code',
    price: 'Pay as you go',
    url: 'https://replicate.com',
    logo: 'https://replicate.com/static/logo.svg',
    aiReview: {
      pros: ['Simple API', 'Any model', 'Cheap'],
      cons: ['Cold starts', 'No free tier', 'Technical'],
      bestFor: 'Developers adding AI to apps without GPUs'
    }
  },
  {
    id: 'pinecone',
    name: 'Pinecone',
    description: 'Vector database for AI apps',
    category: 'Code',
    price: 'Free / $70/mo',
    url: 'https://pinecone.io',
    logo: 'https://www.pinecone.io/logo.svg',
    aiReview: {
      pros: ['Fast vector search', 'Managed', 'Scales'],
      cons: ['Expensive', 'Overkill for small', 'Vendor lock'],
      bestFor: 'Building RAG chatbots and semantic search'
    }
  },
  {
    id: 'langchain',
    name: 'LangChain',
    description: 'Framework for building LLM apps',
    category: 'Code',
    price: 'Free',
    url: 'https://langchain.com',
    logo: 'https://python.langchain.com/img/brand/wordmark.png',
    aiReview: {
      pros: ['Standard framework', 'Tons of integrations', 'Python/JS'],
      cons: ['Over-engineered', 'Breaking changes', 'Bloated'],
      bestFor: 'Developers building complex AI agents'
    }
  },
  {
    id: 'flowise',
    name: 'Flowise',
    description: 'Drag & drop LLM flows',
    category: 'Code',
    price: 'Free',
    url: 'https://flowiseai.com',
    logo: 'https://flowiseai.com/logo.svg',
    aiReview: {
      pros: ['No-code LangChain', 'Visual', 'Open source'],
      cons: ['Buggy', 'Limited', 'Self-host'],
      bestFor: 'Building AI chatbots without coding'
    }
  },
  {
    id: 'd-id',
    name: 'D-ID',
    description: 'AI talking head videos',
    category: 'Video',
    price: 'Free / $6/mo',
    url: 'https://d-id.com',
    logo: 'https://www.d-id.com/logo.svg',
    aiReview: {
      pros: ['Photo to video', 'API access', 'Cheap'],
      cons: ['Uncanny', 'Short limits', 'Watermark'],
      bestFor: 'Animating profile pics for social media'
    }
  },
  {
    id: 'kaiber',
    name: 'Kaiber',
    description: 'AI video generation for artists',
    category: 'Video',
    price: '$5/mo',
    url: 'https://kaiber.ai',
    logo: 'https://www.kaiber.ai/logo.svg',
    aiReview: {
      pros: ['Music videos', 'Style transfer', 'Affordable'],
      cons: ['Low res', 'Slow', 'Credits'],
      bestFor: 'Musicians making AI music videos'
    }
  },
  {
    id: 'luma',
    name: 'Luma Dream Machine',
    description: 'AI video from text and images',
    category: 'Video',
    price: 'Free / $30/mo',
    url: 'https://lumalabs.ai',
    logo: 'https://lumalabs.ai/logo.svg',
    aiReview: {
      pros: ['Good motion', 'Free tier', 'Fast'],
      cons: ['5s clips', 'Queue', 'Artifacts'],
      bestFor: 'Creating short AI b-roll for TikTok'
    }
  },
  {
    id: 'krea',
    name: 'Krea AI',
    description: 'Real-time AI image generation',
    category: 'Image',
    price: 'Free / $10/mo',
    url: 'https://krea.ai',
    logo: 'https://www.krea.ai/logo.svg',
    aiReview: {
      pros: ['Real-time canvas', 'Upscaler', 'Free tier'],
      cons: ['Queue times', 'Credits', 'Beta'],
      bestFor: 'Designers iterating on concepts live'
    }
  },
   {
    id: 'playground',
    name: 'Playground AI',
    description: 'Edit images with AI',
    category: 'Image Editing',
    price: 'Free',
    url: 'https://playgroundai.com',
    logo: 'https://playgroundai.com/favicon.ico',
    featured: false,
    aiReview: {
      pros: ['Free tier', 'Easy to use', 'Good for beginners'],
      cons: ['Limited credits', 'Queue times', 'Basic features'],
      bestFor: 'Hobbyists editing images with AI'
    }
  }
]

   
