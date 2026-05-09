const AUTHOR = {
  name: "Divyanshu Mishra",
  role: "Python Developer · AI Builder · Full Stack Engineer",
  stack: ["Next.js","Python","FastAPI","Ollama","PostgreSQL","GSAP","Framer Motion"]
};

const PROJECTS = [
  {
    id: "ai-chat", num: "01", name: "AI Chat Assistant", accent: "accent-violet",
    vision: "A cinematic ChatGPT-style AI workspace focused on speed, memory, contextual conversations, and local AI execution using Ollama. The experience should feel like a premium operating system rather than a basic chatbot.",
    objective: "Provide developers, students, creators, and businesses with a privacy-first AI assistant capable of long-context conversations, coding support, file understanding, and real-time streaming.",
    problems: ["Slow and cluttered AI chat interfaces","Lack of memory/context retention","Expensive cloud AI subscriptions","Poor developer-focused AI UX","No offline/local AI execution"],
    users: ["Developers","Students","Startup founders","AI enthusiasts","Freelancers","Content creators"],
    features: [
      { icon: "⚡", title: "AI Chat Engine", items: ["Real-time streaming responses","Multi-model support","Ollama integration","Context memory","Regenerate responses","Chat branching","Typing animations"] },
      { icon: "🖥️", title: "Workspace Features", items: ["Markdown rendering","Code syntax highlighting","Export chats","Save prompts","Search conversations","Voice input","Image upload support"] },
      { icon: "🧠", title: "Smart AI Features", items: ["AI coding assistant","Prompt suggestions","Auto summarization","AI memory engine","Context injection","Tool calling system"] }
    ],
    stack: { frontend: ["Next.js 15","Tailwind CSS","Framer Motion","GSAP","ShadCN UI"], backend: ["FastAPI","WebSockets","Ollama","Redis","PostgreSQL"] },
    design: "Fullscreen immersive hero · Dark matte black theme · Floating glass conversation panels · AI pulse animations · Mouse-follow gradients · Terminal-inspired typography · Smooth scroll storytelling",
    pages: ["Landing Page","AI Workspace","Prompt Library","Conversation History","Settings","AI Model Manager"],
    monetization: ["Premium AI models","Team workspaces","AI credits","Enterprise plans"],
    future: ["AI agents","File system AI","AI coding copilots","Browser automation","Voice assistant mode"]
  },
  {
    id: "ai-revenue", num: "02", name: "AI Revenue Generator", accent: "accent-cyan",
    vision: "An AI-powered income discovery engine that aggregates freelancing, remote jobs, creator monetization, and passive income opportunities into one intelligent dashboard.",
    objective: "Help users discover high-quality earning opportunities using AI-powered filtering and ranking.",
    features: [
      { icon: "🔍", title: "Opportunity Aggregator", items: ["Scrape 100+ platforms","AI-based ranking","Duplicate removal","Real-time updates","Trust score system"] },
      { icon: "🤖", title: "AI Intelligence", items: ["Opportunity matching","Skill analysis","Resume matching","AI recommendations","Salary estimation"] },
      { icon: "📊", title: "User Dashboard", items: ["Saved opportunities","Income tracker","Skill growth map","Daily opportunity feed","Notification engine"] }
    ],
    stack: { frontend: ["Next.js","Tailwind CSS","Framer Motion"], backend: ["Python","BeautifulSoup","FastAPI","PostgreSQL","Celery"] },
    design: "Cyberpunk fintech aesthetic · Animated dashboards · Live counters · Floating graphs · Interactive world map · AI earnings visualizations",
    pages: ["Homepage","Opportunities Feed","Income Dashboard","Skill Matching","Resume Analysis","Notifications Center"],
    monetization: ["Premium analytics","AI resume builder","Sponsored listings","Subscription plans"],
    future: ["AI auto apply","AI proposal generator","Freelancer CRM","AI interview trainer"]
  },
  {
    id: "video-summarizer", num: "03", name: "Video Summarizer", accent: "accent-rose",
    vision: "An AI-powered cinematic learning platform that transforms long-form videos into actionable summaries, highlights, notes, and learning insights.",
    objective: "Reduce learning time by extracting key knowledge from YouTube videos and podcasts.",
    features: [
      { icon: "🎬", title: "AI Video Processing", items: ["YouTube URL input","Whisper transcription","AI summarization","Timestamp generation","Key insight extraction","Chapter segmentation"] },
      { icon: "📚", title: "Learning Features", items: ["Flashcards","AI quiz generation","Knowledge maps","Save notes","Export PDF","Highlight important moments"] },
      { icon: "✨", title: "User Experience", items: ["Real-time progress tracking","Interactive transcript","Video player sync","AI explanation mode"] }
    ],
    stack: { frontend: ["Next.js","Tailwind CSS","Framer Motion"], backend: ["Python","Whisper","FFmpeg","Ollama","FastAPI"] },
    design: "Massive typography · Dynamic cinematic transitions · AI waveform animations · Gradient learning cards · Scroll-based storytelling",
    pages: ["Landing Page","Video Analyzer","AI Summary View","Saved Library","Learning Dashboard"],
    monetization: ["Premium summary length","AI study packs","Team collaboration","Learning subscriptions"],
    future: ["Podcast support","Live lecture capture","Multi-language","AI tutor mode"]
  },
  {
    id: "book-generator", num: "04", name: "AI Book Generator", accent: "accent-amber",
    vision: "An AI publishing engine capable of generating complete books, guides, business documents, and educational materials from a single prompt.",
    objective: "Democratize book publishing with AI-powered content generation and professional export.",
    features: [
      { icon: "✍️", title: "AI Writing Engine", items: ["Topic-based generation","Chapter creation","AI storytelling","Citation generation","Tone customization","Book structure planning"] },
      { icon: "📖", title: "Publishing System", items: ["PDF export","EPUB export","Online reading mode","AI cover generation","Reading analytics"] },
      { icon: "🔮", title: "AI Features", items: ["Grammar correction","Fact improvement","AI rewrite mode","Smart continuation"] }
    ],
    stack: { frontend: ["Next.js","Tailwind CSS","Framer Motion"], backend: ["Python","LLM APIs","PDFKit","FastAPI"] },
    design: "Premium editorial layouts · Minimal publishing aesthetic · Smooth page-turn transitions · Luxury typography system",
    pages: ["Landing Page","AI Book Builder","Reading Interface","Export Center","User Library"],
    monetization: ["Paid exports","Premium AI models","Publishing marketplace","Team collaboration"],
    future: ["Audio book generation","Multi-language","AI illustration","Book marketplace"]
  },
  {
    id: "smart-nav", num: "05", name: "Smart Navigation", accent: "accent-emerald",
    vision: "A futuristic intelligent navigation platform inspired by Google Maps and Tesla dashboards with real-time traffic visualization and AI route intelligence.",
    objective: "Reimagine navigation with AI-powered route optimization and cinematic map experiences.",
    features: [
      { icon: "🗺️", title: "Navigation Features", items: ["Real-time maps","Traffic overlays","Route optimization","Saved places","Nearby discovery","ETA prediction"] },
      { icon: "🤖", title: "AI Features", items: ["Smart route suggestions","Fuel optimization","Traffic prediction","Personalized routes"] },
      { icon: "🎨", title: "Visual Experience", items: ["3D map effects","Neon route glow","Dynamic weather overlays","Animated markers"] }
    ],
    stack: { frontend: ["Next.js","Leaflet.js","OpenStreetMap","Tailwind CSS"], backend: ["FastAPI","Geo APIs","WebSockets"] },
    design: "Tesla-inspired UI · Floating sidebar panels · Futuristic HUD overlays · Cinematic transitions",
    pages: ["Homepage","Navigation Dashboard","Saved Routes","Travel Analytics","Settings"],
    monetization: ["Premium routes","Traffic analytics","Fleet management","Enterprise API"],
    future: ["AR navigation","Voice navigation","AI road alerts","Drone route mode"]
  },
  {
    id: "flight-tracker", num: "06", name: "Flight Tracking System", accent: "accent-blue",
    vision: "A real-time global flight radar experience inspired by Flightradar24 with cinematic aviation visuals and interactive tracking.",
    objective: "Deliver a premium flight tracking experience with real-time data and AI-powered insights.",
    features: [
      { icon: "✈️", title: "Radar System", items: ["Real-time flight tracking","Flight markers","Live flight paths","Airport analytics","Aircraft details"] },
      { icon: "🧠", title: "AI Features", items: ["Delay prediction","Flight recommendations","Weather impact analysis","Smart airport insights"] },
      { icon: "📊", title: "Dashboard Features", items: ["Live statistics","Air traffic density","Route visualizations","Country-wise filters"] }
    ],
    stack: { frontend: ["Next.js","OpenStreetMap","Framer Motion","Tailwind CSS"], backend: ["FastAPI","Aviation APIs","WebSockets"] },
    design: "Dark aviation radar theme · Neon radar effects · Real-time glowing markers · Animated flight paths",
    pages: ["Homepage","Global Radar","Flight Details","Airport Dashboard","Analytics View"],
    monetization: ["Premium radar mode","Historical data","Airport intelligence","Aviation analytics API"],
    future: ["3D globe view","Aircraft comparison","Route prediction","Airport AR"]
  },
  {
    id: "cargo", num: "07", name: "Where Is My Cargo", accent: "accent-orange",
    vision: "A Steam-inspired premium logistics operating system designed for Indian freight tracking, cargo visualization, and AI-powered route intelligence.",
    objective: "Transform boring logistics tracking into an immersive cinematic digital platform.",
    features: [
      { icon: "🚂", title: "Freight Tracking", items: ["Live train routes","Cargo status updates","ETA prediction","Container analytics","Freight map visualization"] },
      { icon: "🤖", title: "AI Intelligence", items: ["Route optimization","Delay prediction","Smart rerouting","Fuel optimization","AI logistics assistant"] },
      { icon: "🏢", title: "Enterprise Dashboard", items: ["Shipment analytics","Fleet management","Cargo heatmaps","Real-time alerts"] }
    ],
    stack: { frontend: ["Next.js","GSAP","Framer Motion","Leaflet.js"], backend: ["FastAPI","PostgreSQL","WebSockets","AI route engine"] },
    design: "Steam-inspired cinematic hero · Massive editorial typography · Premium dark mode · Scroll-trigger animations · Animated logistics lines · Glassmorphism dashboards",
    pages: ["Cinematic Landing Page","Cargo Tracking Dashboard","Freight Analytics","Route Intelligence","AI Logistics Assistant","Admin Panel"],
    monetization: ["Enterprise plans","Logistics API","Fleet subscriptions","Cargo insurance integration"],
    future: ["Blockchain cargo verification","AI customs assistant","Fleet IoT integration","Global shipping support"]
  },
  {
    id: "jobs-board", num: "08", name: "AI Jobs Board", accent: "accent-pink",
    vision: "A premium AI-powered jobs ecosystem for developers and tech professionals with startup-focused discovery and intelligent career recommendations.",
    objective: "Connect tech talent with startup opportunities through AI-powered matching and career tools.",
    features: [
      { icon: "💼", title: "Jobs Engine", items: ["Startup jobs aggregation","AI filtering","Role matching","Remote jobs","Salary insights"] },
      { icon: "🎯", title: "AI Career Tools", items: ["Resume analyzer","AI interview prep","AI cover letter generation","Skill gap analysis"] },
      { icon: "📈", title: "Dashboard Features", items: ["Saved jobs","Application tracking","Career analytics","Smart alerts"] }
    ],
    stack: { frontend: ["React","Vite","GSAP","Framer Motion"], backend: ["FastAPI","PostgreSQL","AI recommendation engine"] },
    design: "Dark startup aesthetic · Animated job cards · Interactive salary charts · Smooth filtering transitions",
    pages: ["Homepage","Jobs Feed","Job Details","Resume Analyzer","Career Dashboard"],
    monetization: ["Premium hiring tools","Featured listings","Recruiter subscriptions","AI hiring assistant"],
    future: ["AI auto apply","Video interviews","Skill verification","Freelancer marketplace"]
  },
  {
    id: "gym-fitness", num: "09", name: "AI Gym & Fitness Workspace", accent: "accent-lime",
    vision: "A futuristic AI-powered health and fitness ecosystem with workout intelligence, AI coaching, and cyberpunk-inspired visuals.",
    objective: "Revolutionize personal fitness with AI-driven workout planning, nutrition tracking, and immersive health analytics.",
    features: [
      { icon: "💪", title: "Fitness Intelligence", items: ["AI workout planning","Personalized exercises","Calorie tracking","Progress analytics","Diet recommendations"] },
      { icon: "🏋️", title: "AI Coaching", items: ["AI fitness chatbot","Real-time suggestions","Motivation engine","Recovery tracking"] },
      { icon: "📊", title: "Visual Features", items: ["3D body mapping","Animated progress charts","Cyberpunk health HUD","Workout heatmaps"] }
    ],
    stack: { frontend: ["Next.js","Tailwind CSS","Framer Motion","Three.js"], backend: ["FastAPI","PostgreSQL","AI coaching engine","Nutrition APIs"] },
    design: "Cyberpunk fitness aesthetic · Neon health metrics · Animated body visualizations · Dark immersive dashboards",
    pages: ["Landing Page","Workout Dashboard","AI Coach","Nutrition Tracker","Progress Analytics","Community"],
    monetization: ["Premium coaching","Custom meal plans","Team fitness","Wearable integration"],
    future: ["AR workout guide","Wearable sync","AI physiotherapist","Social challenges"]
  }
];
