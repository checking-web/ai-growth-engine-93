export interface QAItem {
  question: string;
  answer: string[];
}

export interface Section {
  id: string;
  title: string;
  icon: string;
  questions: QAItem[];
}

export const sections: Section[] = [
  {
    id: "section-1",
    title: "Market Need & Problem Statement",
    icon: "📌",
    questions: [
      {
        question: "Why are traditional SEO/SEM and manual creative production failing now?",
        answer: [
          "Traditional SEO/SEM relies on ranking webpages for keywords, but users are increasingly receiving direct AI-generated answers without clicking links. This reduces organic visibility.",
          "Manual content production is slow and costly, while AI enables instant multi-format content generation, making old methods too inefficient for modern marketing speed."
        ]
      },
      {
        question: "How does the shift to AI answer engines impact marketing strategies?",
        answer: [
          "Brands must optimize content not just for keywords, but for AI agents, structured data, and conversational formats.",
          "The focus shifts to:",
          "• Building authoritative, fact-rich content",
          "• Feeding AI systems with structured information",
          "• Optimizing for AI Overviews and LLM results",
          "This means \"Ask Engine Optimization\" becomes more critical than classic SEO."
        ]
      },
      {
        question: "What does 2B monthly Google AI Overview reach mean for brands?",
        answer: [
          "It means users are consuming information directly from AI answers rather than visiting websites.",
          "Brands that don't appear inside these AI summaries risk losing visibility, traffic, and conversions.",
          "Those who adapt to AEO can dominate the new top position in search: the AI answer box."
        ]
      }
    ]
  },
  {
    id: "section-2",
    title: "AI & Creator Economy Megatrends",
    icon: "📌",
    questions: [
      {
        question: "How do Generative AI & Creator Economy reinforce each other?",
        answer: [
          "Creators need to produce high-volume, multi-format content. AI tools help them scale without burnout.",
          "Brands need fast, cost-efficient campaigns. Creators provide distribution.",
          "AI accelerates production → creators produce more → brands invest more → platforms grow.",
          "Both markets feed off each other, forming a powerful growth loop."
        ]
      },
      {
        question: "What drives rapid growth in Generative AI content creation?",
        answer: [
          "• Explosion of short-form video platforms",
          "• Need for daily content across channels",
          "• Huge demand for personalization",
          "• Lower cost and faster production using AI",
          "• Enterprises adopting AI for efficiency",
          "Combined, these factors push the market toward ~$80B by 2030."
        ]
      },
      {
        question: "Why are creators/brands dependent on automation?",
        answer: [
          "Content volume expectations have doubled.",
          "Algorithms reward consistency and speed.",
          "Manual production leads to delays, high cost, and burnout.",
          "AI workflows handle scripting, editing, design, analytics, and advertising — enabling sustainable and scalable growth."
        ]
      }
    ]
  },
  {
    id: "section-3",
    title: "Ask Engine Optimization (AEO)",
    icon: "📌",
    questions: [
      {
        question: "Explain AEO vs SEO.",
        answer: [
          "SEO optimizes to appear on traditional search results.",
          "AEO optimizes to appear inside AI answers, AI agents, and LLM-generated summaries.",
          "It focuses on structured factual content, citations, conversational queries, and entity-based optimization."
        ]
      },
      {
        question: "Skills needed for AEO?",
        answer: [
          "• Understanding of LLM retrieval patterns",
          "• Ability to structure information for AI models",
          "• Knowledge of schema markup and entity optimization",
          "• Conversational content writing",
          "• Monitoring AI Overview visibility",
          "These skills help brands be \"selected\" by AI engines during summarization."
        ]
      },
      {
        question: "What changes would you recommend for AI answer box visibility?",
        answer: [
          "• Create fact-based, concise, structured content",
          "• Use Q&A style formatting",
          "• Implement schema markup for all pages",
          "• Strengthen topical authority in niche",
          "• Keep information updated and credible",
          "This increases the chances of being pulled into AI-generated responses."
        ]
      }
    ]
  },
  {
    id: "section-4",
    title: "AI Ads & Performance Marketing",
    icon: "📌",
    questions: [
      {
        question: "Real-world example of 2–5x output with AI?",
        answer: [
          "A mid-sized brand can generate 50 ad creatives in one week manually.",
          "Using AI tools like Midjourney, ChatGPT, or Adobe Firefly, the same team can produce 200–300 variations in a few hours — testing faster, scaling faster, and increasing conversions."
        ]
      },
      {
        question: "How does AI improve ad ROI by 3% or more?",
        answer: [
          "AI can automatically:",
          "• Identify the best-performing audience segments",
          "• Adjust bids dynamically",
          "• Eliminate underperforming ad sets",
          "• Allocate budget to highest-performing creatives",
          "These micro-optimizations cumulatively save lakhs every month."
        ]
      },
      {
        question: "Risks of using AI-generated ads?",
        answer: [
          "• Over-reliance may reduce originality",
          "• Brand voice inconsistency if not monitored",
          "• Possibility of generating culturally insensitive or inaccurate visuals",
          "• Platforms may limit purely AI-generated content",
          "Human review + brand guidelines are essential."
        ]
      }
    ]
  },
  {
    id: "section-5",
    title: "AI-Powered Content Creation",
    icon: "📌",
    questions: [
      {
        question: "What workflows can be automated?",
        answer: [
          "• Video editing (cuts, captions, transitions)",
          "• Scriptwriting & storyboarding",
          "• Image generation & design",
          "• Social media scheduling",
          "• Analytics and reporting",
          "• Personalization at scale",
          "This frees creators and marketers to focus on strategy."
        ]
      },
      {
        question: "How can creators avoid burnout using AI?",
        answer: [
          "AI handles repetitive tasks — editing, repurposing, captioning, thumbnail design — allowing creators to focus on creativity.",
          "This increases output without increasing effort, enabling consistent posting schedules."
        ]
      },
      {
        question: "What KPIs measure AI-driven content performance?",
        answer: [
          "• CTR and engagement rate",
          "• Cost per acquisition (CPA)",
          "• Watch time and retention",
          "• Content production time saved",
          "• ROI from automated campaigns",
          "• Audience growth rate",
          "These directly show whether AI workflows improve efficiency and results."
        ]
      }
    ]
  },
  {
    id: "section-6",
    title: "Program Design & Outcomes",
    icon: "📌",
    questions: [
      {
        question: "How does the curriculum serve both brands and creators?",
        answer: [
          "It focuses on shared workflows like AEO, AI ads, content automation, and analytics.",
          "Brands apply these for campaign efficiency; creators apply them for audience growth and monetization.",
          "The systems are common, so the program benefits both segments."
        ]
      },
      {
        question: "Why teach workflow-level mastery, not tools?",
        answer: [
          "Tools change rapidly.",
          "Workflows — like content pipeline automation, ad optimization cycles, or AEO frameworks — remain relevant.",
          "Learners become adaptable instead of dependent on specific tools."
        ]
      },
      {
        question: "What does the capstone project demonstrate?",
        answer: [
          "It shows that a learner can independently create a complete AI-powered growth engine — from strategy to execution.",
          "This includes:",
          "• AEO-optimized content",
          "• AI-generated ads",
          "• Automated workflows",
          "• Data-driven performance monitoring",
          "This proves real-world readiness."
        ]
      }
    ]
  },
  {
    id: "section-7",
    title: "Future Scope",
    icon: "📌",
    questions: [
      {
        question: "How do micro-certifications add value?",
        answer: [
          "They allow learners to specialize in emerging areas like AI Ads, AEO, analytics automation, or creator automation.",
          "This helps them stay updated and deepen their expertise continuously."
        ]
      },
      {
        question: "Why is the APAC & Middle East region suitable?",
        answer: [
          "These markets are:",
          "• Rapidly digitizing",
          "• Investing heavily in AI and marketing",
          "• Experiencing a surge in creators and SMB brands",
          "• Lacking structured AI marketing education",
          "This creates strong demand for such a program."
        ]
      },
      {
        question: "How will rapid AI evolution affect curriculum relevance?",
        answer: [
          "The curriculum is designed to evolve.",
          "As new models, agents, and ad platforms emerge, modules can be updated easily.",
          "The focus on workflows ensures long-term adaptability."
        ]
      }
    ]
  },
  {
    id: "section-8",
    title: "Critical Thinking",
    icon: "📌",
    questions: [
      {
        question: "If AI Overviews change tomorrow, how should the program adapt?",
        answer: [
          "Shift modules to new AI search behaviors, update AEO strategies, and include new markup or formatting requirements.",
          "Maintain agility by continuously monitoring how LLMs retrieve and present content."
        ]
      },
      {
        question: "In an AI-dominated world, what makes human creators valuable?",
        answer: [
          "Authenticity, storytelling, lived experiences, and emotional intelligence.",
          "AI can generate content, but humans drive culture, trends, and relatability — which audiences trust."
        ]
      },
      {
        question: "What ethical concerns do you foresee?",
        answer: [
          "• Deepfakes and misinformation",
          "• Loss of originality",
          "• Data privacy concerns",
          "• Unintentional bias reinforcement",
          "• Over-automation replacing creative jobs",
          "These require guidelines, human oversight, and responsible AI usage."
        ]
      }
    ]
  }
];
