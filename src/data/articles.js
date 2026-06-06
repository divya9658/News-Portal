const createArticleContent = (title, excerpt, category, author) =>
  `${title} explores how the ${category.toLowerCase()} landscape is shifting through real-world examples, strategic decisions, and the human impact behind each breakthrough. ${excerpt} ${author} examines why this trend matters now, what it means for readers and organizations, and which opportunities or risks will shape the next phase of adoption.`;

export const articles = [
  {
    id: 1,
    title: "Artificial Intelligence Reshapes Software Development",
    author: "Sarah Johnson",
    date: "2026-06-01",
    image: "https://picsum.photos/id/1/600/400",
    excerpt: "AI coding assistants are becoming a standard part of modern software engineering workflows.",
    content: createArticleContent("Artificial Intelligence Reshapes Software Development", "AI coding assistants are becoming a standard part of modern software engineering workflows.", "Technology", "Sarah Johnson"),
    category: "Technology"
  },
  {
    id: 2,
    title: "Global Renewable Energy Adoption Reaches New High",
    author: "Michael Chen",
    date: "2026-05-30",
    image: "https://picsum.photos/id/2/600/400",
    excerpt: "Countries worldwide are accelerating investments in solar and wind infrastructure.",
    content: createArticleContent("Global Renewable Energy Adoption Reaches New High", "Countries worldwide are accelerating investments in solar and wind infrastructure.", "Environment", "Michael Chen"),
    category: "Environment"
  },
  {
    id: 3,
    title: "Electric Vehicle Market Continues Rapid Expansion",
    author: "Emma Wilson",
    date: "2026-05-28",
    image: "https://picsum.photos/id/3/600/400",
    excerpt: "Automakers report record sales as EV adoption increases globally.",
    content: createArticleContent("Electric Vehicle Market Continues Rapid Expansion", "Automakers report record sales as EV adoption increases globally.", "Business", "Emma Wilson"),
    category: "Business"
  },
  {
    id: 4,
    title: "Advancements in Quantum Computing Show Promise",
    author: "David Miller",
    date: "2026-05-27",
    image: "https://picsum.photos/id/4/600/400",
    excerpt: "Researchers demonstrate new breakthroughs in quantum error correction.",
    content: createArticleContent("Advancements in Quantum Computing Show Promise", "Researchers demonstrate new breakthroughs in quantum error correction.", "Technology", "David Miller"),
    category: "Technology"
  },
  {
    id: 5,
    title: "Space Exploration Enters a New Commercial Era",
    author: "Olivia Garcia",
    date: "2026-05-25",
    image: "https://picsum.photos/id/5/600/400",
    excerpt: "Private companies expand missions beyond Earth's orbit.",
    content: createArticleContent("Space Exploration Enters a New Commercial Era", "Private companies expand missions beyond Earth's orbit.", "Science", "Olivia Garcia"),
    category: "Science"
  },
  {
    id: 6,
    title: "Global Cybersecurity Challenges Intensify",
    author: "James Brown",
    date: "2026-05-24",
    image: "https://picsum.photos/id/6/600/400",
    excerpt: "Organizations strengthen defenses against increasingly sophisticated attacks.",
    content: createArticleContent("Global Cybersecurity Challenges Intensify", "Organizations strengthen defenses against increasingly sophisticated attacks.", "Technology", "James Brown"),
    category: "Technology"
  },
  {
    id: 7,
    title: "Healthcare AI Improves Early Disease Detection",
    author: "Sophia Taylor",
    date: "2026-05-23",
    image: "https://picsum.photos/id/7/600/400",
    excerpt: "Hospitals adopt AI-powered diagnostic systems to improve patient outcomes.",
    content: createArticleContent("Healthcare AI Improves Early Disease Detection", "Hospitals adopt AI-powered diagnostic systems to improve patient outcomes.", "Health", "Sophia Taylor"),
    category: "Health"
  },
  {
    id: 8,
    title: "Remote Work Evolves Into Hybrid-First Culture",
    author: "Daniel Martinez",
    date: "2026-05-22",
    image: "https://picsum.photos/id/8/600/400",
    excerpt: "Businesses continue refining flexible workplace strategies.",
    content: createArticleContent("Remote Work Evolves Into Hybrid-First Culture", "Businesses continue refining flexible workplace strategies.", "Business", "Daniel Martinez"),
    category: "Business"
  },
  {
    id: 9,
    title: "Global Semiconductor Industry Expands Production",
    author: "Emily Anderson",
    date: "2026-05-21",
    image: "https://picsum.photos/id/9/600/400",
    excerpt: "Chip manufacturers invest heavily to meet growing demand.",
    content: createArticleContent("Global Semiconductor Industry Expands Production", "Chip manufacturers invest heavily to meet growing demand.", "Technology", "Emily Anderson"),
    category: "Technology"
  },
  {
    id: 10,
    title: "Breakthroughs in Battery Technology Extend EV Range",
    author: "William Thomas",
    date: "2026-05-20",
    image: "https://picsum.photos/id/10/600/400",
    excerpt: "Researchers unveil more efficient and sustainable battery designs.",
    content: createArticleContent("Breakthroughs in Battery Technology Extend EV Range", "Researchers unveil more efficient and sustainable battery designs.", "Science", "William Thomas"),
    category: "Science"
  },
  {
    id: 11,
    title: "Climate Adaptation Projects Gain Momentum Worldwide",
    author: "Charlotte Lee",
    date: "2026-05-19",
    image: "https://picsum.photos/id/11/600/400",
    excerpt: "Cities invest in infrastructure to address environmental challenges.",
    content: createArticleContent("Climate Adaptation Projects Gain Momentum Worldwide", "Cities invest in infrastructure to address environmental challenges.", "Environment", "Charlotte Lee"),
    category: "Environment"
  },
  {
    id: 12,
    title: "Digital Payments Continue Global Growth",
    author: "Alexander Walker",
    date: "2026-05-18",
    image: "https://picsum.photos/id/12/600/400",
    excerpt: "Consumers increasingly adopt cashless payment solutions.",
    content: createArticleContent("Digital Payments Continue Global Growth", "Consumers increasingly adopt cashless payment solutions.", "Finance", "Alexander Walker"),
    category: "Finance"
  },
  {
    id: 13,
    title: "Next-Generation Robotics Transform Manufacturing",
    author: "Grace Hall",
    date: "2026-05-17",
    image: "https://picsum.photos/id/13/600/400",
    excerpt: "Factories deploy smarter automation systems to improve efficiency.",
    content: createArticleContent("Next-Generation Robotics Transform Manufacturing", "Factories deploy smarter automation systems to improve efficiency.", "Technology", "Grace Hall"),
    category: "Technology"
  },
  {
    id: 14,
    title: "Global Tourism Industry Experiences Strong Recovery",
    author: "Benjamin Young",
    date: "2026-05-16",
    image: "https://picsum.photos/id/14/600/400",
    excerpt: "Travel demand reaches new milestones across international markets.",
    content: createArticleContent("Global Tourism Industry Experiences Strong Recovery", "Travel demand reaches new milestones across international markets.", "Travel", "Benjamin Young"),
    category: "Travel"
  },
  {
    id: 15,
    title: "Educational Technology Expands Learning Opportunities",
    author: "Amelia King",
    date: "2026-05-15",
    image: "https://picsum.photos/id/15/600/400",
    excerpt: "Online platforms continue reshaping access to education.",
    content: createArticleContent("Educational Technology Expands Learning Opportunities", "Online platforms continue reshaping access to education.", "Education", "Amelia King"),
    category: "Education"
  },
  {
    id: 16,
    title: "Major Advances in Personalized Medicine",
    author: "Henry Wright",
    date: "2026-05-14",
    image: "https://picsum.photos/id/16/600/400",
    excerpt: "Researchers develop treatments tailored to individual genetic profiles.",
    content: createArticleContent("Major Advances in Personalized Medicine", "Researchers develop treatments tailored to individual genetic profiles.", "Health", "Henry Wright"),
    category: "Health"
  },
  {
    id: 17,
    title: "Sustainable Agriculture Technologies Gain Adoption",
    author: "Evelyn Scott",
    date: "2026-05-13",
    image: "https://picsum.photos/id/17/600/400",
    excerpt: "Farmers use innovative tools to increase productivity while reducing waste.",
    content: createArticleContent("Sustainable Agriculture Technologies Gain Adoption", "Farmers use innovative tools to increase productivity while reducing waste.", "Agriculture", "Evelyn Scott"),
    category: "Agriculture"
  },
  {
    id: 18,
    title: "5G and Beyond: The Future of Connectivity",
    author: "Lucas Green",
    date: "2026-05-12",
    image: "https://picsum.photos/id/18/600/400",
    excerpt: "Telecommunication companies prepare for next-generation networks.",
    content: createArticleContent("5G and Beyond: The Future of Connectivity", "Telecommunication companies prepare for next-generation networks.", "Technology", "Lucas Green"),
    category: "Technology"
  },
  {
    id: 19,
    title: "Financial Markets Adapt to AI-Driven Analytics",
    author: "Harper Adams",
    date: "2026-05-11",
    image: "https://picsum.photos/id/19/600/400",
    excerpt: "Investment firms increasingly rely on machine learning insights.",
    content: createArticleContent("Financial Markets Adapt to AI-Driven Analytics", "Investment firms increasingly rely on machine learning insights.", "Finance", "Harper Adams"),
    category: "Finance"
  },
  {
    id: 20,
    title: "Smart Cities Use Data to Improve Urban Living",
    author: "Jack Carter",
    date: "2026-05-10",
    image: "https://picsum.photos/id/20/600/400",
    excerpt: "Municipalities deploy connected technologies to enhance services.",
    content: createArticleContent("Smart Cities Use Data to Improve Urban Living", "Municipalities deploy connected technologies to enhance services.", "Technology", "Jack Carter"),
    category: "Technology"
  }
];