export default {
  meta: {
    title: "PREQSTATION — AI Agent Execution Platform",
    description: "Queue a task, let agents plan and execute it, then verify the result. An open-source, self-hosted AI agent execution platform.",
  },
  nav: {
    github: "GitHub",
    cta: "Read the Guide",
    localeLabel: "Language",
    openMenu: "Open menu",
    closeMenu: "Close menu",
  },
  hero: {
    badge: "The Developer's Kitchen",
    title: "Queue the task.\nAgents do the work.",
    description: "PREQSTATION is a self-hosted execution queue for developers using AI coding engines. It takes a scoped software task from intake to reviewed result. Claude Code can take direct dispatch, while Codex and Gemini stay on the worker path. It does not replace GitHub Issues, Linear, or Jira for backlog planning.",
    preqTagline: "Queue the task. Agents take it.",
    prepTagline: "Review the result. Then ship.",
    snapshotTitle: "Execution proof",
    snapshotDescription: "A representative task record shows the queue status, assigned engine, review gate, and shipped result in one place.",
    snapshotTaskLabel: "Task",
    snapshotEngineLabel: "Engine",
    snapshotSessionLabel: "Agent session",
    snapshotBranchLabel: "Branch",
    snapshotTaskNumber: "LP-241",
    snapshotTaskTitle: "Clarify landing positioning and proof path",
    snapshotTaskSummary: "Queue the landing copy update, execute it with Codex, then move it to review with concrete evidence attached.",
    snapshotEngineValue: "Codex",
    snapshotSessionValue: "codex/landing-positioning-proof",
    snapshotBranchValue: "codex/landing-proof-pass",
    snapshotHoldLabel: "hold branch",
    snapshotHoldDescription: "If review or implementation is blocked, the task branches to hold instead of sitting in a vague in-progress state.",
    snapshotStages: [
      {
        id: "inbox",
        status: "09:10 scoped",
        detail: "Acceptance criteria and ownership were added before dispatch.",
      },
      {
        id: "todo",
        status: "09:18 claimed",
        detail: "Codex claimed the task and opened an isolated worktree.",
      },
      {
        id: "ready",
        status: "10:02 review ready",
        detail: "Copy, proof section, and Korean localization were submitted together.",
      },
      {
        id: "done",
        status: "10:14 verified",
        detail: "Build passed, the hero was spot-checked, and the result was committed.",
      },
      {
        id: "hold",
        status: "hold",
        detail: "Use hold only when review or implementation is blocked and the task needs a real branch out of the happy path.",
      },
    ],
    snapshotEvidenceTitle: "Review evidence",
    snapshotEvidenceItems: [
      {
        label: "Verification",
        value: "pnpm --filter @preqstation/landing build passed.",
      },
      {
        label: "Review note",
        value: "Terminology unified around agent, engine, queue, and review-ready.",
      },
      {
        label: "Result",
        value: "Execution proof shipped with guide and GitHub follow-through links.",
      },
    ],
    cta: "See execution proof",
    guideCta: "Read the Guide",
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
    poster: {
      eyebrow: "Backlog chaos",
      title: "Before PREQ: the handoff mess",
      prompt: "A visual about backlog noise, chat pings, terminal tabs, and half-finished AI runs.",
      replaceNote: "Final artwork placeholder.",
    },
    painPoints: [
      { icon: "\ud83d\udccb", title: "Issue trackers stop at assignment", desc: "They hold backlog and discussion, but they do not execute the task." },
      { icon: "\ud83e\udd16", title: "Raw AI sessions lack workflow guardrails", desc: "No queue, no branch policy, no review state, no audit trail." },
      { icon: "\u2699\ufe0f", title: "Simple work still needs a safe workspace", desc: "Agents need isolated worktrees, repeatable steps, and reporting back." },
      { icon: "\u23f0", title: "The handoff gap burns the schedule", desc: "The delay is not writing code. It is routing, checking, and deciding what can ship." },
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
    poster: {
      eyebrow: "Kitchen model",
      title: "Show the chef directing AI line cooks",
      prompt: "A calm scene of one lead developer directing several AI workers through parallel execution.",
      replaceNote: "Final artwork placeholder.",
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
    title: "Built for developers who ship",
    subtitle: "PREQ is for developers who already know what to build and need a controlled way to hand that task to an AI agent, review the result, and decide what ships.",
    items: [
      {
        icon: "\ud83d\udee0\ufe0f",
        title: "Execution, not backlog triage",
        desc: "Keep discovery and planning in GitHub Issues, Linear, or Jira. PREQ starts when a scoped task is ready for an agent to execute.",
      },
      {
        icon: "\ud83e\udde0",
        title: "One queue, multiple engines",
        desc: "Assign Claude, Codex, or Gemini per task while keeping the same queue, review gate, and audit trail.",
      },
      {
        icon: "\ud83d\udee1\ufe0f",
        title: "Agents work in controlled sandboxes",
        desc: "Each agent session runs in an isolated worktree and reports back with notes, checks, and branch output instead of editing your main branch directly.",
      },
      {
        icon: "\ud83d\udcca",
        title: "Review with visible proof",
        desc: "Status changes, work logs, verification, and branch details stay attached to the task so done means reviewed, not guessed.",
      },
    ],
  },
  features: {
    title: "Why engineers actually use it",
    subtitle: "PREQ turns a scoped task into a repeatable execution loop with clear ownership and proof.",
    poster: {
      eyebrow: "Execution proof",
      title: "Show evidence-first execution",
      prompt: "A command-center scene with queue cards, review notes, branch outputs, and visible verification proof.",
      replaceNote: "Final artwork placeholder.",
    },
    items: [
      {
        number: "01",
        icon: "\ud83d\udccb",
        title: "Intake only the work that is ready",
        desc: "Create a task once the scope, acceptance criteria, and owner are clear enough for an agent to execute without guesswork.",
      },
      {
        number: "02",
        icon: "\ud83d\udd25",
        title: "Dispatch the right engine",
        desc: "Send Claude Code through direct dispatch when it fits, keep Codex or Gemini on the worker path, and track queued or working as run-state overlays instead of fake workflow columns.",
      },
      {
        number: "03",
        icon: "\u23f8\ufe0f",
        title: "Branch blocked work into hold",
        desc: "Use hold as a real branch for blocked execution so review-ready work stays separate from tasks that still need input.",
      },
      {
        number: "04",
        icon: "\u2705",
        title: "Require proof before done",
        desc: "Ready means the agent returned notes, checks, and branch output. You review the evidence before the task moves to done.",
      },
    ],
  },
  pipeline: {
    title: "Execution Workflow",
    subtitle: "Happy path goes inbox \u2192 todo \u2192 ready \u2192 done. Hold branches off when work is blocked.",
    steps: [
      { id: "inbox", label: "Inbox", icon: "\ud83d\udce5" },
      { id: "todo", label: "Todo", icon: "\ud83d\uddc2\ufe0f" },
      { id: "hold", label: "Hold", icon: "\u23f8\ufe0f" },
      { id: "ready", label: "Ready", icon: "\ud83d\udc40" },
      { id: "done", label: "Done", icon: "\u2705" },
    ],
    blocked: "Run-state overlay",
    blockedTooltip: "Use queued when dispatch is requested and working once an agent claims the task. They sit on top of status instead of creating fake workflow columns.",
    holdLabel: "hold branch",
    holdDescription: "Tasks move here when implementation or verification is blocked. They rejoin the happy path only after the blocker is cleared.",
    notTrackerTitle: "Not an issue tracker",
    notTrackerDescription: "Use GitHub Issues, Linear, or Jira to discover and triage work. PREQ starts once the task is scoped enough to execute safely.",
  },
  multiEngine: {
    title: "Choose the right AI for the task",
    subtitle: "Use Claude for direct dispatch, or keep Codex and Gemini on the worker path",
    engines: [
      {
        accent: "bg-charcoal", logo: "C", logoBg: "bg-charcoal",
        name: "Claude Code", company: "Anthropic",
        desc: "Best when you want a strong general-purpose engine and an optional direct local dispatch path.",
        bestFor: ["Direct dispatch", "General tasks", "Complex refactoring"],
      },
      {
        accent: "bg-mint", logo: "Cx", logoBg: "bg-mint",
        name: "Codex CLI", company: "OpenAI",
        desc: "Stays on the PREQ worker path and is great for implementation, review, and repeatable task execution.",
        bestFor: ["Worker path", "Implementation", "Code review"],
      },
      {
        accent: "bg-review-blue", logo: "G", logoBg: "bg-review-blue",
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
        answer: "You always review. Merge, deploy, or reopen on your terms. work_logs track every execution \u2014 which AI wrote what code, when, and why \u2014 with 100% traceability.",
      },
      {
        question: "Where is data stored?",
        answer: "On your server. Self-hosted for complete data sovereignty. Secured with Row Level Security and AES-GCM encryption.",
      },
      {
        question: "Why are there no due dates?",
        answer: "PREQSTATION is not built around traditional task-manager deadlines. If work should start, you can tell an AI agent to start it now. The system is designed to track what is queued, working, held, or ready next, so execution state matters more than calendar promises.",
      },
      {
        question: "Which AI does it use?",
        answer: "Choose from Claude Code, Codex CLI, or Gemini CLI. Claude Code can also use direct dispatch, while Codex and Gemini stay on the worker path. You can still assign a different engine per project or task.",
      },
      {
        question: "Isn't open source less secure?",
        answer: "Quite the opposite. Open code means community verification. Protected by Row Level Security, AES-GCM encryption, and isolated worktree execution.",
      },
    ],
  },
  cta: {
    title: "Open your kitchen today",
    subtitle: "Start with the execution proof, then use the guide to wire PREQ into your own workflow.",
    poster: {
      eyebrow: "Launch moment",
      title: "Close with a calm execution-ready scene",
      prompt: "A clean prep station, a calm AI queue, and opening-day momentum.",
      replaceNote: "Final artwork placeholder.",
    },
    primary: "See execution proof",
    guide: "Read the Guide",
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
