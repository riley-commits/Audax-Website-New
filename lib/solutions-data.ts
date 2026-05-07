export interface SolutionData {
  slug: string;
  title: string;
  heroTitle: string;
  heroSub: string;
  metaTitle: string;
  metaDescription: string;
  description: string;
  phases: {
    number: number;
    name: string;
    icon: string;
    description: string;
    duration: string;
    deliverables: string[];
  }[];
  whoItsFor: string[];
  differentiators: string[];
  faq: { q: string; a: string }[];
}

export const solutionsData: SolutionData[] = [
  {
    slug: "catalyst-for-founders",
    title: "Catalyst for Founders",
    heroTitle: "Catalyst for Founders — Your Venture & Product Partner From Idea to Traction",
    heroSub:
      "A structured three-phase program that takes you from raw idea to a live, revenue-generating product — with the team, process, and accountability you need.",
    metaTitle: "Catalyst for Founders Program | MVP to Traction | Audax Ventures",
    metaDescription:
      "Catalyst for Founders: our structured Validate → Launch → Scale program for pre-seed and seed-stage founders. Book a free intro call with Audax Ventures.",
    description:
      "Most founders are smart, motivated, and full of ideas. What they often lack is a reliable technical partner who understands the startup journey — the need to move fast, stay lean, and make every dollar count. Catalyst for Founders is our answer: a program designed specifically for pre-seed and seed-stage founders who need more than an agency.",
    phases: [
      {
        number: 1,
        name: "Validate",
        icon: "🔍",
        description:
          "Before writing a line of code, we help you validate your core assumptions with real users. We run a Discovery Sprint: customer interviews, competitive analysis, and a lean experiment to test your riskiest hypothesis. You'll leave with evidence-based confidence in your idea, a defined MVP scope, and a user persona document you can use to raise capital.",
        duration: "2–3 weeks",
        deliverables: [
          "5–10 customer discovery interviews",
          "Competitive landscape analysis",
          "MVP feature scope document",
          "Validated user personas",
          "Lean experiment results (landing page test, prototype test, or pre-order campaign)",
        ],
      },
      {
        number: 2,
        name: "Launch",
        icon: "🚀",
        description:
          "With a validated scope, we move into design and development. We apply our MVP development process: fast, focused sprints, weekly demos, and a bias toward shipping over perfecting. You'll have a production-ready product in the hands of your first users within 8–16 weeks.",
        duration: "8–16 weeks",
        deliverables: [
          "Complete UI/UX in Figma",
          "Production-ready MVP (mobile or web)",
          "Authentication, core features, and basic analytics",
          "Cloud deployment with CI/CD pipeline",
          "Launch checklist and GTM support",
        ],
      },
      {
        number: 3,
        name: "Scale",
        icon: "📈",
        description:
          "Once you have users and early revenue, we help you build the systems for scale: better onboarding, new features guided by user data, and infrastructure that grows with you. Many Catalyst clients raise their seed round with us in the Scale phase, using their traction as proof of product-market fit.",
        duration: "Ongoing — typically 6–18 months",
        deliverables: [
          "Feature roadmap based on user feedback and analytics",
          "Ongoing 2-week sprint cycles",
          "A/B testing infrastructure",
          "Investor-ready metrics dashboard",
          "Technical due diligence support for fundraising",
        ],
      },
    ],
    whoItsFor: [
      "Pre-seed founders with a validated idea who need a technical co-founder equivalent",
      "Solo entrepreneurs launching a digital product or SaaS",
      "Seed-stage companies that need to move faster than their internal team allows",
      "Non-technical founders who need a trusted partner, not just a vendor",
    ],
    differentiators: [
      "We act as a partner, not just a contractor — we care about your outcomes",
      "Fixed-scope, time-boxed phases prevent scope creep and budget surprises",
      "You own all IP, code, and assets from day one",
      "We have domain experience in SaaS, marketplace, fintech, and healthtech",
      "We'll tell you if your idea needs more validation before we build",
      "Founder alumni network connects you with other Catalyst graduates",
    ],
    faq: [
      { q: "What's the minimum budget for Catalyst?", a: "The Validate phase starts at $8,000. The Launch phase (MVP build) typically ranges from $25,000 to $80,000. We structure payments by phase so you're never paying for work that hasn't started." },
      { q: "How is Catalyst different from hiring a development agency?", a: "Most agencies take a brief and build what you ask for. We challenge your assumptions, help you scope correctly, and act as a genuine product partner. We've seen what works and we'll tell you when something won't." },
      { q: "Do you take equity?", a: "Our primary model is fee-based. In select cases, we'll discuss a reduced-fee + equity arrangement with early-stage founders, but this is evaluated case by case." },
      { q: "What if I'm still in the idea stage?", a: "Perfect — that's exactly when to start. The Validate phase is designed for founders who have an idea but haven't built anything yet." },
      { q: "Can I do just the Validate phase?", a: "Yes. Phases are sold independently. Many founders do the Validate phase and then take the deliverables to raise a pre-seed round before commissioning the build." },
    ],
  },
  {
    slug: "enterprise-innovation-program",
    title: "Enterprise Innovation Program",
    heroTitle: "Enterprise Innovation Program — From Internal Idea to Shipped Product",
    heroSub:
      "A three-phase program that helps enterprise innovation teams, CTOs, and product leaders turn internal ideas into production-grade software products.",
    metaTitle: "Enterprise Innovation Program | Internal Product Development | Audax Ventures",
    metaDescription:
      "Audax Ventures' Enterprise Innovation Program: Audit → Build → Scale. Turn internal ideas into shipped products. For innovation teams, CTOs, and product VPs.",
    description:
      "Enterprise innovation is hard. Internal teams face bureaucracy, resource constraints, and a culture optimized for the existing business — not for new product development. Our Enterprise Innovation Program provides the external team, structured process, and senior technical leadership to move your initiative from whiteboard to production.",
    phases: [
      {
        number: 1,
        name: "Audit",
        icon: "🔎",
        description:
          "We embed with your team for 2–3 weeks to understand the current state: existing technology, internal workflows, stakeholder requirements, and the gap between where you are and where you want to go. The output is an Innovation Blueprint — a prioritized roadmap with build-vs-buy recommendations, risk assessment, and an investment case your executive team can approve.",
        duration: "2–3 weeks",
        deliverables: [
          "Technology landscape audit",
          "Stakeholder requirements document",
          "Build vs. buy analysis",
          "Risk and dependency assessment",
          "Innovation Blueprint with prioritized roadmap",
          "Investment case for executive sign-off",
        ],
      },
      {
        number: 2,
        name: "Build",
        icon: "🏗️",
        description:
          "With executive sign-off on the Innovation Blueprint, we assemble a dedicated pod of senior engineers, a designer, and a project lead to execute the build. We work in tight, 2-week sprints with bi-weekly stakeholder demos. Your team is looped in throughout — we believe the build process is also a knowledge transfer.",
        duration: "3–9 months",
        deliverables: [
          "Production-ready software product",
          "Full test coverage and QA documentation",
          "CI/CD pipeline and cloud infrastructure",
          "API documentation and integration guides",
          "Internal team training and handoff sessions",
          "Source code in your repository",
        ],
      },
      {
        number: 3,
        name: "Scale",
        icon: "📊",
        description:
          "Post-launch, we remain available as a strategic technology partner: helping your internal team build on the foundation we created, responding to performance needs as user volume grows, and advising on the next phase of your innovation roadmap.",
        duration: "Ongoing — typically 6–24 months",
        deliverables: [
          "Ongoing sprint capacity (flexible 20–80 hours/month)",
          "Architecture evolution planning",
          "Performance monitoring and optimization",
          "Feature expansion aligned to user feedback",
          "Innovation roadmap quarterly reviews",
        ],
      },
    ],
    whoItsFor: [
      "Corporate innovation teams with ideas stuck in the planning phase",
      "CTOs who need external capacity to execute alongside internal teams",
      "Product VPs launching a new digital product line",
      "Organizations that need to move faster than internal procurement allows",
    ],
    differentiators: [
      "Senior-only team — no juniors on your project",
      "Fixed-price phases eliminate budget surprises for finance approval",
      "Executive-ready reporting at every milestone",
      "We integrate with your internal teams, not around them",
      "Experience across regulated industries: healthcare, finance, logistics, and government",
      "Full IP transfer — no vendor lock-in",
    ],
    faq: [
      { q: "How does Audax differ from a Big 4 consulting firm?", a: "Big 4 firms excel at strategy documents. We actually build the software. Our teams are practitioners: engineers, designers, and architects who write code every day." },
      { q: "Can you work within our procurement process?", a: "Yes. We're set up for enterprise procurement including MSAs, SOWs, insurance certificates, security questionnaires, and PO-based billing." },
      { q: "How do you handle data security for enterprise clients?", a: "We sign a comprehensive DPA, work within your security framework, and can complete security questionnaires. We have experience with SOC 2, HIPAA, and ISO 27001 environments." },
      { q: "Do you resource the project with your team or subcontractors?", a: "We use our own team. We do not offshore or subcontract without disclosure. The team you meet in the discovery is the team that builds your product." },
      { q: "How do we get started?", a: "The Audit phase begins with a 2-hour stakeholder alignment workshop followed by a 2-week deep-dive. We can typically begin within 2 weeks of agreement." },
    ],
  },
];

export function getSolutionBySlug(slug: string): SolutionData | undefined {
  return solutionsData.find((s) => s.slug === slug);
}

export function getAllSolutionSlugs(): string[] {
  return solutionsData.map((s) => s.slug);
}
