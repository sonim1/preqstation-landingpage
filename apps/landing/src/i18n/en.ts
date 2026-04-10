export default {
  meta: {
    title: "PREQSTATION — AI Agent Execution Platform",
    description: "Queue a task, let agents plan and execute it, then verify the result. An open-source, self-hosted AI agent execution platform.",
  },
  nav: {
    github: "GitHub",
    cta: "Start Setup",
    localeLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
    jumpLabel: "Jump to",
    moreLabel: "More",
    sections: [
      { id: "overview", label: "Overview" },
      { id: "problem", label: "Problem" },
      { id: "solution", label: "Kitchen model" },
      { id: "who", label: "Who it's for" },
      { id: "features", label: "Stories" },
      { id: "why-preq", label: "Philosophy" },
      { id: "workflow", label: "Workflow" },
      { id: "engines", label: "Engines" },
      { id: "pricing", label: "Pricing" },
      { id: "faq", label: "FAQ" },
      { id: "start", label: "Start" },
    ],
  },
  hero: {
    badge: "The Developer's Kitchen",
    title: "Queue the task.\nAgents do the work.",
    description: "PREQSTATION exists for developers who cannot stay at the keyboard all day but still need work to keep moving. Prepare the task ahead of time, dispatch it from wherever you are, and come back to reviewable proof from Claude, Codex, or Gemini instead of another half-finished AI session.",
    preqTagline: "Queue the task. Agents take it.",
    prepTagline: "Review the result. Then ship.",
    cta: "See the workflow",
    guideCta: "Start Setup",
    github: "View on GitHub",
    socialProof: "Open Source \u00b7 Self-hosted \u00b7 Multi-engine execution queue",
    tickets: [
      { number: "#3953", task: "Rate Limit API", status: "Working", statusEmoji: "\ud83d\udee0\ufe0f", dotColor: "bg-warm-yellow" },
      { number: "#3954", task: "Auth Refactor", status: "Queued", statusEmoji: "\u23f3", dotColor: "bg-steel" },
      { number: "#3955", task: "Deploy Script", status: "Ready", statusEmoji: "\ud83d\udc40", dotColor: "bg-review-blue" },
    ],
  },
  problem: {
    title: "The missing part is execution discipline",
    subtitle: "AI can write code. Shipping still breaks down between the idea and the verified result.",
    proof: {
      eyebrow: "Execution gap",
      title: "Why teams stall between assignment and ship",
      columns: [
        {
          label: "Backlog",
          items: ["Scoped in tracker", "Agent run started", "Review proof missing"],
        },
        {
          label: "Session",
          items: ["codex/PQSL-11", "run_state: working", "branch opened"],
        },
        {
          label: "Risk",
          items: ["No audit trail", "No review gate", "No verified result"],
        },
      ],
      footerLabel: "Breakdown",
      footerValue: "Execution is happening, but the evidence is fragmented.",
    },
    painPoints: [
      {
        icon: "\ud83d\udcf1",
        title: "You cannot sit at the computer all day",
        desc: "Useful work appears while you are commuting, in meetings, or away from the desk. You need a way to prepare and dispatch it without losing the thread.",
      },
      {
        icon: "\ud83e\uddd1\u200d\ud83d\udcbb",
        title: "Most trackers assume larger human teams",
        desc: "Heavy process is fine for bigger orgs, but solo developers and small teams need lightweight execution discipline instead of another planning layer.",
      },
      {
        icon: "\ud83d\udea7",
        title: "MVP output is easy; production follow-through is hard",
        desc: "The hard part is turning promising AI output into isolated changes, visible proof, and a result you can safely review and ship.",
      },
    ],
    stats: [
      { value: "80-95%", label: "MVP achievable", color: "text-mint" },
      { value: "10-40%", label: "Production reuse rate", color: "text-coral" },
      { value: "60-80%", label: "Needs rewrite", color: "text-warm-yellow" },
    ],
  },
  solution: {
    title: "Work like a kitchen.",
    highlight: "You are the chef.",
    proof: {
      eyebrow: "Scoped task record",
      title: "One PREQ task keeps the chef in control",
      taskNumberLabel: "Task",
      taskNumber: "PQSL-11",
      taskTitle: "Replace landing concept placeholders with product-proof visuals",
      taskSummary: "The task stays scoped, assigned, and reviewable instead of disappearing into a chat log.",
      criteriaLabel: "Acceptance criteria",
      criteria: [
        "Replace four placeholder panels with product-proof modules",
        "Keep English and Korean panel structure aligned",
        "Ship proof content without waiting on artwork",
      ],
      meta: [
        { label: "Assigned engine", value: "Codex" },
        { label: "Run state", value: "working" },
        { label: "Review gate", value: "build + route check" },
      ],
      evidenceTitle: "Review evidence",
      evidence: [
        { label: "Branch", value: "task/pqsl-11/..." },
        { label: "Output", value: "Code and localization moved together" },
        { label: "Next", value: "Review notes decide merge or follow-up" },
      ],
    },
    chefHeader: "\ud83e\uddd1\u200d\ud83c\udf73 Chef's Role",
    chefItems: [
      { title: "Define scope", desc: "Write the task and acceptance criteria" },
      { title: "Review results", desc: "Check what the agent produced" },
      { title: "Approve completion", desc: "Decide merge, deploy, or follow-up" },
    ],
    aiHeader: "\ud83e\udd16 AI Line Cook's Role",
    aiItems: [
      { title: "Pick up scoped work", desc: "Plan inbox tasks or claim todo and hold tasks with run_state" },
      { title: "Implement safely", desc: "Use isolated worktrees, follow deploy strategy, and report exactly what changed" },
      { title: "Return proof", desc: "Submit notes, tests, and branch or PR info so review is based on evidence" },
    ],
    bottomMessage: "You stay in control.",
  },
  whyPreq: {
    title: "PREQSTATION — Why this layer matters",
    intro: "PREQSTATION is not trying to replace your whole project stack. It is the execution layer for developers who already know the work they want done and need a clean handoff to AI agents.",
    problemLabel: "Problem",
    solutionLabel: "Solution",
    sections: [
      {
        id: "dispatch",
        title: "1. Dispatch anywhere — built for work that appears away from the desk",
        problem: [
          "Good software tasks rarely arrive when you are already sitting in a perfect implementation context. Ideas show up on the move, between meetings, or while juggling several repos.",
          "Raw AI sessions are fragile for that moment. The context vanishes, the task gets buried in chat, and the handoff has to be rebuilt from memory later.",
        ],
        solution: [
          "PREQ lets you capture the task when it appears, leave enough context behind, and trigger the run when you are ready.",
          "The result is a durable execution record instead of another disposable conversation.",
        ],
      },
      {
        id: "small-teams",
        title: "2. Built for solo developers and small teams",
        problem: [
          "Most teams already have a place for roadmap debate, backlog grooming, and planning. Adding another heavyweight process layer does not help smaller teams ship faster.",
          "What they need is a focused place where ready-to-run work can move through execution and review without pretending to be enterprise program management.",
        ],
        solution: [
          "PREQ stays narrow on purpose: scoped execution work, light coordination, and visible review signals.",
          "Planning can stay in GitHub Issues, Linear, or Jira while PREQ takes over only when the task is ready for an agent to act on it.",
        ],
      },
      {
        id: "production",
        title: "3. From MVP to production",
        problem: [
          "The hard part is not getting a first draft anymore. The expensive part is turning rough AI output into something safe enough to review, verify, and ship.",
          "Without isolated worktrees, explicit review checkpoints, and evidence attached to the task, teams still pay that cost manually every time.",
        ],
        solution: [
          "PREQ adds the missing follow-through: controlled execution environments, real workflow states, and proof that stays attached to the task.",
          "That is what helps a quick prototype become production-ready work instead of a one-off demo.",
        ],
      },
    ],
  },
  features: {
    title: "Three product stories",
    subtitle: "These are the real reasons developers reach for PREQSTATION when they need more than a clever prompt and less than a heavyweight process stack.",
    items: [
      {
        id: "dispatch-anywhere",
        eyebrow: "Dispatch Anywhere",
        title: "Prepare the task now. Fire it when the moment is right.",
        summary: "PREQSTATION is designed for developers whose best ideas arrive away from the desk. Capture the work, leave the right context, and dispatch it when you have a window instead of restarting the whole thought later.",
        imageAlt: "PREQSTATION task capture and dispatch workflow.",
        bullets: [
          "Capture scope before context disappears.",
          "Hand the same prepared task to Claude, Codex, or Gemini.",
          "Return to a task record with notes and proof instead of a lost chat session.",
        ],
      },
      {
        id: "solo-small-teams",
        eyebrow: "Built for Solo & Small Teams",
        title: "Execution discipline without the overhead of enterprise process.",
        summary: "PREQSTATION gives smaller teams a focused execution system instead of another place to debate roadmap items. Keep planning wherever you already do it, then move the ready-to-run work into PREQ.",
        imageAlt: "PREQSTATION workflow for solo developers and small teams.",
        bullets: [
          "Keep backlog planning in GitHub Issues, Linear, or Jira.",
          "Use PREQ when a task is ready for an agent to execute.",
          "See queued, working, and reviewed progress without pretending you need a giant org chart.",
        ],
      },
      {
        id: "mvp-to-production",
        eyebrow: "From MVP to Production",
        title: "Turn promising AI output into work you can actually ship.",
        summary: "The first draft is not the hard part anymore. PREQSTATION adds the isolation, review signals, and verification trail that help you move from quick prototype energy to production follow-through.",
        imageAlt: "PREQSTATION moving AI output from MVP toward production review.",
        bullets: [
          "Use isolated worktrees instead of risky edits on the main branch.",
          "Keep the real workflow states intact: inbox, todo, hold, ready, done.",
          "Treat queued, working, and done as the fast mental model while review still depends on concrete evidence.",
        ],
      },
    ],
  },
  pipeline: {
    title: "Execution Workflow",
    subtitle: "Happy path goes inbox \u2192 todo \u2192 ready \u2192 done. Hold branches off when work is blocked.",
    targetBadge: "TARGET: DIRECT EXECUTIONS",
    steps: [
      { id: "inbox", label: "Inbox", icon: "\ud83d\udce5", title: "Scope defined", desc: "Task scope is clear and intake is complete." },
      { id: "todo", label: "Todo", icon: "\ud83d\uddc2\ufe0f", title: "Claimed", desc: "An agent opens the worktree and starts execution." },
      { id: "hold", label: "Hold", icon: "\u23f8\ufe0f", title: "Blocked", desc: "Execution is blocked and waiting on review or more input." },
      { id: "ready", label: "Ready", icon: "\ud83d\udc40", title: "Review", desc: "Check notes, verification, and branch output before merge." },
      { id: "done", label: "Done", icon: "\u2705", title: "Verified", desc: "Build passed and the reviewed result is shipped." },
    ],
    blocked: "Run-state overlay",
    blockedTooltip: "Use queued when dispatch is requested and working once an agent claims the task. They sit on top of status instead of creating fake workflow columns.",
    notTrackerTitle: "Not an issue tracker",
    notTrackerDescription: "Use GitHub Issues, Linear, or Jira to discover and triage work. PREQ starts once the task is scoped enough to execute safely.",
  },
  multiEngine: {
    title: "Choose the right AI for the task",
    subtitle: "Use Claude for direct dispatch, or keep Codex and Gemini on the worker path",
    engines: [
      {
        accent: "bg-[#C15F3C]", logo: "C", logoBg: "bg-[#C15F3C]",
        name: "Claude Code", company: "Anthropic",
        desc: "Best when you want a strong general-purpose engine and an optional direct local dispatch path.",
        bestFor: ["Direct dispatch", "General tasks", "Complex refactoring"],
      },
      {
        accent: "bg-[#00A67E]", logo: "Cx", logoBg: "bg-[#00A67E]",
        name: "Codex CLI", company: "OpenAI",
        desc: "Stays on the PREQ worker path and is great for implementation, review, and repeatable task execution.",
        bestFor: ["Worker path", "Implementation", "Code review"],
      },
      {
        accent: "bg-[#078EFA]", logo: "G", logoBg: "bg-[#078EFA]",
        name: "Gemini CLI", company: "Google",
        desc: "Also stays on the worker path and is useful for UI, docs, and larger-context tasks.",
        bestFor: ["Worker path", "UI/UX design", "Documentation"],
      },
    ],
  },
  whoIsItFor: {
    title: "Who is it for?",
    forYou: {
      title: "Perfect for you if...",
      items: [
        { icon: "📱", title: "Ideas on the go", desc: "Fire AI tasks from anywhere, anytime on mobile" },
        { icon: "⚡", title: "Multi-project juggler", desc: "Vibe code across projects without context loss" },
        { icon: "🧠", title: "Context switcher", desc: "Freelancing? No more 'What did I do here?'" },
        { icon: "🤖", title: "Multi-engine strategist", desc: "Pick Claude, Codex, or Gemini per task" },
        { icon: "✅", title: "Quality-focused dev", desc: "Systematically review and verify AI output" },
      ],
    },
    notForYou: {
      title: "PREQ works best when...",
      items: [
        { icon: "📋", title: "Your backlog is already elsewhere", desc: "Keep discovery and roadmap work in GitHub Issues, Linear, or Jira, then send scoped execution work into PREQ." },
        { icon: "👥", title: "You want execution, not general collaboration", desc: "Use Notion, Slack, or Asana for broad team coordination. PREQ is the handoff point once a task is ready to run." },
        { icon: "🤖", title: "You use AI agents as workers", desc: "PREQ is strongest when Claude, Codex, or Gemini are doing implementation and a human is reviewing the result." },
        { icon: "🔁", title: "You have repeatable delivery flow", desc: "The queue is most useful when tasks regularly move through intake, execution, review, and follow-up." },
        { icon: "📅", title: "You separate planning from execution", desc: "PREQ handles execution state and evidence. It does not replace sprint planning, roadmap ownership, or portfolio tracking." },
      ],
    },
  },
  pricing: {
    title: "Free. Open Source. Forever.",
    subtitle: "Your code, your data, your server",
    price: "$0",
    priceLabel: "forever free",
    features: [
      "Full source code on GitHub",
      "Deploy on your own server",
      "Community-driven standards",
      "Your data stays yours",
      "No vendor lock-in",
    ],
    cta: "View on GitHub",
  },
  faq: {
    title: "Frequently Asked Questions",
    items: [
      {
        question: "Can I trust AI results?",
        answer: "You still review before merge or deploy. work_logs show what ran and what changed.",
      },
      {
        question: "Where is data stored?",
        answer: "On your server if you self-host it. The data stays in your environment.",
      },
      {
        question: "Why are there no due dates?",
        answer: "It tracks execution state, not calendar dates. Queue work when it is ready.",
      },
      {
        question: "Which AI does it use?",
        answer: "Choose Claude Code, Codex CLI, or Gemini CLI. Claude can direct-dispatch; Codex and Gemini stay on the worker path.",
      },
      {
        question: "Isn't open source less secure?",
        answer: "Open code is inspectable. PREQ still uses Row Level Security, encryption, and isolated worktrees.",
      },
    ],
  },
  cta: {
    title: "Open your kitchen today",
    subtitle: "Start with the execution proof, then use the guide to wire PREQ into your own workflow.",
    proof: {
      eyebrow: "Start here",
      title: "Open the proof path, guide, and repo together",
      checklistLabel: "Launch checklist",
      checklist: [
        "Review the execution proof first",
        "Use the guide to wire your workflow",
        "Open GitHub and run the first task",
      ],
      linksLabel: "Command center",
      links: [
        { label: "Execution proof", value: "#execution-proof" },
        { label: "Guide", value: "/guide/getting-started/overview" },
        { label: "GitHub", value: "github.com/sonim1/preqstation" },
      ],
      summaryLabel: "Outcome",
      summaryValue: "The next step is concrete: inspect proof, install PREQ, then ship the first reviewed task.",
    },
    primary: "See the workflow",
    guide: "Start Setup",
    secondary: "View on GitHub",
  },
  footer: {
    tagline: "The Developer's Kitchen",
    madeWith: "Built with kitchen love \ud83c\udf73",
    copyright: "\u00a9 2026 PREQSTATION. Open Source.",
    privacy: "Privacy Policy",
    terms: "Terms of Service",
  },
  legal: {
    privacy: {
      title: "Privacy Policy",
      lastUpdated: "Last updated: March 5, 2026",
      sections: [
        {
          heading: "1. Introduction",
          content: "Preq Station (\"we,\" \"us,\" or \"our\") is an open-source, self-hosted AI agent execution platform. This Privacy Policy explains how we collect, use, disclose, and safeguard your information when you visit our website (preqstation.com) or use our open-source software. Please read this policy carefully. By accessing our website or using the software, you consent to the practices described herein.",
        },
        {
          heading: "2. Information We Collect",
          content: "Website Analytics: We use Cloudflare Web Analytics to collect anonymous, aggregated data such as page views, referral sources, approximate geographic location (country level), browser type, and device type. This data does not identify individual users and no cookies are used for tracking.\n\nVoluntarily Provided Information: If you interact with us through GitHub issues, pull requests, discussions, or email, we may receive your GitHub username, email address, and any information you choose to share.\n\nWe do NOT collect passwords, payment information, or sensitive personal data through the website.",
        },
        {
          heading: "3. Self-Hosted Instances",
          content: "Preq Station is designed to run entirely on your own infrastructure. When you deploy a self-hosted instance:\n\n\u2022 All data (source code, tasks, AI execution logs, work logs, configuration) remains on YOUR server.\n\u2022 We have zero access to your instance, your data, or your usage patterns.\n\u2022 You are the sole data controller and processor under applicable data protection laws.\n\u2022 Data flows between your instance and third-party AI providers (Anthropic, OpenAI, Google) are governed by your configuration and the respective provider's terms.\n\u2022 We do not receive telemetry, crash reports, or usage statistics from self-hosted instances.",
        },
        {
          heading: "4. How We Use Your Information",
          content: "We use the information we collect for the following purposes:\n\n\u2022 To operate and maintain the website\n\u2022 To understand website usage patterns and improve content\n\u2022 To respond to your inquiries, comments, or issues on GitHub\n\u2022 To send important updates about the project (only if you opt in, e.g., by watching the repository)\n\u2022 To detect and prevent abuse or security incidents on the website\n\nWe do NOT sell, rent, or trade your personal information to third parties.",
        },
        {
          heading: "5. Cookies and Tracking Technologies",
          content: "The Preq Station website does NOT use cookies for tracking or advertising purposes. Cloudflare Web Analytics is a privacy-first analytics solution that does not use cookies or collect personally identifiable information. Cloudflare may set strictly necessary cookies for security and performance purposes (e.g., DDoS protection, bot management). These cookies do not track your browsing activity across other websites.",
        },
        {
          heading: "6. Third-Party Services",
          content: "Our website and software interact with the following third-party services:\n\n\u2022 Cloudflare: Website hosting, CDN, DDoS protection, and web analytics. Privacy policy: cloudflare.com/privacypolicy\n\u2022 Google Fonts: Web typography delivery. Privacy policy: policies.google.com/privacy\n\u2022 GitHub: Source code hosting, issue tracking, and community collaboration. Privacy policy: docs.github.com/en/site-policy/privacy-policies\n\nFor self-hosted instances, you may configure connections to:\n\u2022 Anthropic (Claude): anthropic.com/privacy\n\u2022 OpenAI (Codex): openai.com/privacy\n\u2022 Google (Gemini): ai.google.dev/terms\n\u2022 Telegram Bot API (for task submission): telegram.org/privacy\n\u2022 Supabase (database): supabase.com/privacy\n\nEach third-party service operates under its own privacy policy and terms. We encourage you to review them.",
        },
        {
          heading: "7. Data Security",
          content: "We implement reasonable technical and organizational measures to protect your information:\n\nWebsite:\n\u2022 All traffic is served over HTTPS/TLS via Cloudflare\n\u2022 No sensitive user data is stored on the website\n\nSelf-Hosted Instances (built-in security features):\n\u2022 Row Level Security (RLS) for database access control\n\u2022 AES-256-GCM encryption for sensitive data at rest\n\u2022 Isolated git worktree execution for AI agent sandboxing\n\u2022 API key encryption and secure credential storage\n\nWhile we strive to use commercially acceptable means to protect your data, no method of electronic storage or transmission is 100% secure. You are responsible for securing your self-hosted deployment.",
        },
        {
          heading: "8. Data Retention",
          content: "Website Analytics: Cloudflare Web Analytics retains anonymous data for up to 6 months.\n\nGitHub Interactions: Your contributions to the GitHub repository (issues, pull requests, comments) are retained as part of the public repository history.\n\nSelf-Hosted Data: Data retention for self-hosted instances is entirely under your control. You can delete data at any time from your own infrastructure.",
        },
        {
          heading: "9. International Data Transfers",
          content: "The Preq Station website is hosted on Cloudflare's global network. If you access the website from outside the region where our servers are located, your information may be transferred across international borders. Cloudflare participates in the EU-U.S. Data Privacy Framework.\n\nFor self-hosted instances, data resides wherever you choose to deploy. You are responsible for ensuring compliance with applicable data transfer regulations.",
        },
        {
          heading: "10. Children's Privacy",
          content: "Our website and software are not directed to individuals under the age of 16. We do not knowingly collect personal information from children. If you are a parent or guardian and believe your child has provided us with personal information, please contact us through GitHub, and we will take steps to delete such information.",
        },
        {
          heading: "11. Your Rights Under GDPR and CCPA",
          content: "If you are located in the European Economic Area (EEA), United Kingdom, or California, you have certain rights regarding your personal data:\n\n\u2022 Right to Access: Request a copy of your personal data\n\u2022 Right to Rectification: Request correction of inaccurate data\n\u2022 Right to Erasure: Request deletion of your personal data\n\u2022 Right to Restrict Processing: Request limitation of data processing\n\u2022 Right to Data Portability: Receive your data in a structured format\n\u2022 Right to Object: Object to processing based on legitimate interests\n\u2022 Right to Opt-Out of Sale (CCPA): We do not sell personal information\n\nSince we collect minimal data on the website and zero data from self-hosted instances, most of these rights are automatically satisfied. For any requests, please open an issue on our GitHub repository or contact us via email.",
        },
        {
          heading: "12. Contact Information",
          content: "For privacy-related inquiries, you can reach us through:\n\n\u2022 GitHub: Open an issue on the Preq Station repository\n\u2022 Email: privacy@preqstation.com\n\nWe will respond to your inquiry within 30 days.",
        },
        {
          heading: "13. Changes to This Policy",
          content: "We may update this Privacy Policy from time to time to reflect changes in our practices, technology, or legal requirements. When we make changes:\n\n\u2022 The \"Last updated\" date at the top of this page will be revised\n\u2022 For material changes, we will post a notice on the website or in the GitHub repository\n\u2022 Continued use of the website or software after changes constitutes acceptance of the updated policy\n\nWe encourage you to review this page periodically for the latest information.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      lastUpdated: "Last updated: March 5, 2026",
      sections: [
        {
          heading: "1. Acceptance of Terms",
          content: "By accessing the Preq Station website (preqstation.com), downloading, installing, or using the Preq Station software (\"Software\"), you agree to be bound by these Terms of Service (\"Terms\"). If you do not agree to all of these Terms, do not use the website or the Software. These Terms constitute a legally binding agreement between you and the Preq Station project maintainers (\"we,\" \"us,\" or \"our\").",
        },
        {
          heading: "2. Description of Service",
          content: "Preq Station is an open-source, self-hosted AI agent execution platform that enables developers to:\n\n\u2022 Submit development tasks via messaging platforms (e.g., Telegram)\n\u2022 Automatically execute tasks using AI coding agents (Claude Code, Codex CLI, Gemini CLI)\n\u2022 Manage task pipelines, code generation, testing, and pull request creation\n\u2022 Track work across multiple projects from a single interface\n\nThe Software is provided as a self-hosted solution. We do not provide hosting, managed services, or SaaS offerings.",
        },
        {
          heading: "3. Open Source License",
          content: "The Preq Station Software is released under the MIT License. Subject to the terms of that license, you are free to:\n\n\u2022 Use the Software for any purpose, including commercial use\n\u2022 Modify the source code to suit your needs\n\u2022 Distribute copies of the original or modified Software\n\u2022 Include the Software in proprietary projects\n\nThe full MIT License text is available in the LICENSE file in the GitHub repository. In the event of any conflict between these Terms and the MIT License regarding the Software itself, the MIT License shall prevail.",
        },
        {
          heading: "4. User Responsibilities",
          content: "When using Preq Station, you agree to:\n\n\u2022 Comply with all applicable local, national, and international laws and regulations\n\u2022 Not use the Software or website for any unlawful or prohibited purpose\n\u2022 Maintain the security of your deployment, including API keys, credentials, and access controls\n\u2022 Not attempt to gain unauthorized access to any systems or networks connected to the Software\n\u2022 Not use the Software to generate malicious code, malware, or content that violates third-party rights\n\u2022 Take responsibility for all code generated by AI agents within your instance\n\u2022 Review AI-generated code before deploying to production environments",
        },
        {
          heading: "5. Self-Hosted Deployment",
          content: "Preq Station is designed to run on your own infrastructure. By deploying the Software, you acknowledge and agree that:\n\n\u2022 You are solely responsible for provisioning, configuring, securing, and maintaining your server environment\n\u2022 You are responsible for backing up your data and ensuring business continuity\n\u2022 You are responsible for ensuring compliance with all applicable data protection regulations (including GDPR, CCPA, and others) in your jurisdiction\n\u2022 We have no access to, control over, or responsibility for your self-hosted instance or the data it processes\n\u2022 You are responsible for monitoring resource usage and associated infrastructure costs",
        },
        {
          heading: "6. Third-Party AI Services",
          content: "Preq Station integrates with third-party AI services, including but not limited to:\n\n\u2022 Anthropic (Claude Code)\n\u2022 OpenAI (Codex CLI)\n\u2022 Google (Gemini CLI)\n\nYour use of these services is subject to their respective terms of service and privacy policies. You acknowledge that:\n\n\u2022 You are responsible for obtaining and managing your own API keys for these services\n\u2022 You are responsible for all costs incurred through your use of these AI provider APIs\n\u2022 AI-generated code may contain errors, security vulnerabilities, or inaccuracies\n\u2022 We are not responsible for the output, availability, or performance of third-party AI services\n\u2022 Changes to third-party API pricing, terms, or availability may affect the functionality of the Software",
        },
        {
          heading: "7. AI-Generated Content",
          content: "The Software facilitates AI-generated code and content. You acknowledge and agree that:\n\n\u2022 AI-generated code should always be reviewed by a qualified developer before use in production\n\u2022 We make no guarantees about the quality, correctness, security, or fitness of AI-generated code\n\u2022 You are solely responsible for any consequences arising from the use of AI-generated code\n\u2022 AI-generated code may inadvertently reproduce copyrighted or licensed material; you are responsible for verifying compliance\n\u2022 The intellectual property rights of AI-generated content are subject to the terms of the respective AI provider and applicable law",
        },
        {
          heading: "8. Intellectual Property",
          content: "The Preq Station name, logo, and branding are trademarks of the project maintainers. The Software source code is licensed under the MIT License.\n\n\u2022 You may not use the Preq Station name or branding to imply official endorsement without written permission\n\u2022 Contributions to the project via pull requests are subject to the project's Contributor License Agreement (if applicable) and the MIT License\n\u2022 Your own code, data, and configurations within your self-hosted instance remain your intellectual property",
        },
        {
          heading: "9. Disclaimer of Warranties",
          content: "THE SOFTWARE AND WEBSITE ARE PROVIDED \"AS IS\" AND \"AS AVAILABLE\" WITHOUT WARRANTIES OF ANY KIND, EITHER EXPRESS OR IMPLIED, INCLUDING BUT NOT LIMITED TO:\n\n\u2022 IMPLIED WARRANTIES OF MERCHANTABILITY\n\u2022 FITNESS FOR A PARTICULAR PURPOSE\n\u2022 NON-INFRINGEMENT\n\u2022 ACCURACY OR RELIABILITY OF AI-GENERATED OUTPUT\n\u2022 UNINTERRUPTED OR ERROR-FREE OPERATION\n\nWE DO NOT WARRANT THAT THE SOFTWARE WILL MEET YOUR REQUIREMENTS, THAT IT WILL BE COMPATIBLE WITH YOUR INFRASTRUCTURE, OR THAT ANY ERRORS WILL BE CORRECTED.",
        },
        {
          heading: "10. Limitation of Liability",
          content: "TO THE MAXIMUM EXTENT PERMITTED BY APPLICABLE LAW, IN NO EVENT SHALL THE PROJECT MAINTAINERS, CONTRIBUTORS, OR AFFILIATES BE LIABLE FOR:\n\n\u2022 Any indirect, incidental, special, consequential, or punitive damages\n\u2022 Loss of profits, data, business opportunities, or goodwill\n\u2022 Cost of procurement of substitute goods or services\n\u2022 Any damages arising from AI-generated code or content\n\u2022 Any damages resulting from unauthorized access to or alteration of your data\n\u2022 Any damages arising from third-party service outages or changes\n\nThis limitation applies regardless of the legal theory (contract, tort, strict liability, or otherwise) and even if we have been advised of the possibility of such damages.",
        },
        {
          heading: "11. Indemnification",
          content: "You agree to indemnify, defend, and hold harmless the project maintainers and contributors from and against any claims, liabilities, damages, losses, and expenses (including reasonable legal fees) arising out of or related to:\n\n\u2022 Your use of the Software or website\n\u2022 Your violation of these Terms\n\u2022 Your deployment and operation of a self-hosted instance\n\u2022 Your use of AI-generated code in production environments\n\u2022 Any third-party claims related to your use of the Software",
        },
        {
          heading: "12. Termination",
          content: "These Terms are effective until terminated. Your rights under these Terms will terminate automatically if you fail to comply with any provision. Upon termination:\n\n\u2022 You must cease all use of the website\n\u2022 You may continue to use the Software under the MIT License, but these Terms of Service for the website and project services no longer apply\n\u2022 Sections 9 (Disclaimer), 10 (Limitation of Liability), and 11 (Indemnification) survive termination",
        },
        {
          heading: "13. Governing Law and Dispute Resolution",
          content: "These Terms shall be governed by and construed in accordance with the laws of the Republic of Korea, without regard to conflict of law principles. Any disputes arising from these Terms shall be resolved through good-faith negotiation. If negotiation fails, disputes shall be submitted to the exclusive jurisdiction of the courts located in Seoul, Republic of Korea.",
        },
        {
          heading: "14. Severability",
          content: "If any provision of these Terms is found to be unenforceable or invalid by a court of competent jurisdiction, that provision shall be limited or eliminated to the minimum extent necessary, and the remaining provisions shall continue in full force and effect.",
        },
        {
          heading: "15. Entire Agreement",
          content: "These Terms, together with the MIT License and the Privacy Policy, constitute the entire agreement between you and the project maintainers regarding the use of the website and Software. These Terms supersede any prior agreements or communications.",
        },
        {
          heading: "16. Contact Information",
          content: "For questions about these Terms of Service, please contact us through:\n\n\u2022 GitHub: Open an issue on the Preq Station repository\n\u2022 Email: legal@preqstation.com",
        },
        {
          heading: "17. Changes to These Terms",
          content: "We reserve the right to modify these Terms at any time. When we make changes:\n\n\u2022 The \"Last updated\" date at the top of this page will be revised\n\u2022 For material changes, we will post a notice on the website or in the GitHub repository\n\u2022 Continued use of the website or Software after changes constitutes acceptance of the updated Terms\n\nIf you disagree with the updated Terms, you must stop using the website. The Software itself remains available under the MIT License regardless of these Terms.",
        },
      ],
    },
    backToHome: "\u2190 Back to home",
  },
} as const;
