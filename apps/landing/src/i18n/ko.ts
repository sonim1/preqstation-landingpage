import type en from "./en";

const ko: typeof en = {
  meta: {
    title: "Preq Station \u2014 AI \uc5d0\uc774\uc804\ud2b8 \uc2e4\ud589 \ud50c\ub7ab\ud3fc",
    description: "\ud0dc\uc2a4\ud06c\ub97c \ud050\uc5d0 \ub123\uace0, \uc5d0\uc774\uc804\ud2b8\uac00 \uacc4\ud68d\uacfc \uad6c\ud604\uc744 \uc218\ud589\ud55c \ub4a4, \uacb0\uacfc\ub97c \uac80\uc99d\ud558\uc138\uc694. \uc624\ud508\uc18c\uc2a4\uc774\uc790 self-hosted\uc778 AI \uc5d0\uc774\uc804\ud2b8 \uc2e4\ud589 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.",
  },
  nav: {
    github: "GitHub",
    cta: "\uac00\uc774\ub4dc \ubcf4\uae30",
  },
  hero: {
    badge: "\uac1c\ubc1c\uc790\uc758 \uc8fc\ubc29",
    title: "\ud0dc\uc2a4\ud06c\ub97c \ud050\uc5d0 \ub123\uc73c\uc138\uc694.\n\uc5d0\uc774\uc804\ud2b8\uac00 \uc2e4\ud589\ud569\ub2c8\ub2e4.",
    description: "PREQSTATION\uc740 Claude, Codex, Gemini\ub97c \uc704\ud55c self-hosted \uc2e4\ud589 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4. \ud0dc\uc2a4\ud06c\ub294 inbox, todo, hold, ready, done\uc73c\ub85c \uc6c0\uc9c1\uc774\uace0, queued\uc640 working\uc740 \ubcc4\ub3c4 run_state \uc624\ubc84\ub808\uc774\ub85c \ucd94\uc801\ub429\ub2c8\ub2e4.",
    preqTagline: "\ud0dc\uc2a4\ud06c\ub97c \ud050\uc5d0 \ub123\uc73c\uc138\uc694. \uc5d0\uc774\uc804\ud2b8\uac00 \uac00\uc838\uac11\ub2c8\ub2e4.",
    prepTagline: "\uacb0\uacfc\ub97c \uac80\ud1a0\ud558\uace0 \ubc30\ud3ec\ud558\uc138\uc694.",
    cta: "\uac00\uc774\ub4dc \ubcf4\uae30",
    github: "View on GitHub",
    socialProof: "\uc624\ud508\uc18c\uc2a4 \u00b7 Self-hosted \u00b7 \uba40\ud2f0 AI \uc5d0\uc774\uc804\ud2b8",
    tickets: [
      { number: "#3953", task: "Rate Limit API", status: "\uc791\uc5c5 \uc911", statusEmoji: "\ud83d\udee0\ufe0f", dotColor: "bg-warm-yellow" },
      { number: "#3954", task: "Auth Refactor", status: "\ub300\uae30 \uc911", statusEmoji: "\u23f3", dotColor: "bg-steel" },
      { number: "#3955", task: "Deploy Script", status: "\uac80\uc99d \ub300\uae30", statusEmoji: "\ud83d\udc40", dotColor: "bg-review-blue" },
    ],
  },
  problem: {
    title: "\ubc14\uc774\ube0c\ucf54\ub529\uc758 \ub9c8\uc9c0\ub9c9 \ud37c\uc990\uc774 \ube60\uc838\uc788\uc2b5\ub2c8\ub2e4",
    subtitle: "AI\ub294 \ucf54\ub4dc\ub97c \uc798 \ub9cc\ub4ed\ub2c8\ub2e4. \ud558\uc9c0\ub9cc...",
    painPoints: [
      { icon: "\ud83d\udccb", title: "Task \uad00\ub9ac \ub3c4\uad6c\ub294 \uc788\uc9c0\ub9cc, \uc790\ub3d9\ud654\ub294 \uc5c6\ub2e4", desc: "\ucee8\ud14d\uc2a4\ud2b8 \uc2a4\uc704\uce6d, \uc791\uc5c5 \ub204\ub77d" },
      { icon: "\ud83e\udd16", title: "AI\ub294 \uc788\uc9c0\ub9cc, \uc2e4\ud589 \ud658\uacbd\uc774 \uc5c6\ub2e4", desc: "\ubcd1\ub82c \ucc98\ub9ac \ubd88\uac00, \ube44\ud6a8\uc728" },
      { icon: "\u2699\ufe0f", title: "\ub2e8\uc21c\ud55c \uc791\uc5c5\ub3c4 \uc218\ub3d9\uc73c\ub85c \uc9c4\ud589\ud55c\ub2e4", desc: "3\uc2dc\uac04 \ube4c\ub4dc, 4\uc77c \ubc30\ud3ec" },
      { icon: "\u23f0", title: "\uadf8 \uc0ac\uc774\uc5d0 \uadc0\uc911\ud55c \uc2dc\uac04\uc774 \ub0ad\ube44\ub41c\ub2e4", desc: "\ud504\ub85c\ud1a0\ud0c0\uc785 \u2192 \ud504\ub85c\ub355\uc158 10-30\ubc30" },
    ],
    stats: [
      { value: "80-95%", label: "MVP \uad6c\ud604 \uac00\ub2a5", color: "text-mint" },
      { value: "10-40%", label: "\ud504\ub85c\ub355\uc158 \uc7ac\uc0ac\uc6a9\ub960", color: "text-coral" },
      { value: "60-80%", label: "\uc7ac\uc791\uc131 \ud544\uc694", color: "text-warm-yellow" },
    ],
  },
  solution: {
    title: "\uc8fc\ubc29\ucc98\ub7fc \uc77c\ud558\uc138\uc694.",
    highlight: "\ub2f9\uc2e0\uc740 \uc178\ud504\uc785\ub2c8\ub2e4.",
    chefHeader: "\ud83e\uddd1\u200d\ud83c\udf73 \uc178\ud504\uc758 \uc5ed\ud560",
    chefItems: [
      { title: "\ubc94\uc704 \uc815\uc758", desc: "\ud0dc\uc2a4\ud06c\uc640 acceptance criteria \uc791\uc131" },
      { title: "\uacb0\uacfc \uac80\ud1a0", desc: "\uc5d0\uc774\uc804\ud2b8\uac00 \ub9cc\ub4e0 \uacb0\uacfc \ud655\uc778" },
      { title: "\uc644\ub8cc \uc2b9\uc778", desc: "\uba38\uc9c0, \ubc30\ud3ec, \ud6c4\uc18d \uc791\uc5c5 \uc5ec\ubd80 \uacb0\uc815" },
    ],
    aiHeader: "\ud83e\udd16 AI \uc694\ub9ac\uc0ac\uc758 \uc5ed\ud560",
    aiItems: [
      { title: "\ud0dc\uc2a4\ud06c \uacc4\ud68d", desc: "inbox\ub97c todo\ub85c \uc774\ub3d9" },
      { title: "\uc548\uc804\ud558\uac8c \uad6c\ud604", desc: "\uaca9\ub9ac\ub41c worktree\uc5d0\uc11c \uc791\uc5c5" },
      { title: "\uacb0\uacfc \ubcf4\uace0", desc: "\ub178\ud2b8, \ud14c\uc2a4\ud2b8, \ube0c\ub79c\uce58/PR \uc815\ubcf4 \uc81c\ucd9c" },
    ],
    bottomMessage: "\ud1b5\uc81c\uad8c\uc740 \ub2f9\uc2e0\uc5d0\uac8c \uc788\uc2b5\ub2c8\ub2e4.",
  },
  whyPreq: {
    title: "\uc2e4\ud589\ud558\ub294 \uac1c\ubc1c\uc790\ub97c \uc704\ud574 \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4",
    subtitle: "\ub610 \ud558\ub098\uc758 \ud504\ub85c\uc81d\ud2b8 \uad00\ub9ac \ub3c4\uad6c\uac00 \uc544\ub2d9\ub2c8\ub2e4. \uc9c4\uc9dc \uc2e4\ud589 \ud50c\ub7ab\ud3fc\uc785\ub2c8\ub2e4.",
    items: [
      {
        icon: "\ud83c\udf10",
        title: "\uc5b4\ub514\uc11c\ub4e0 \uc791\uc5c5 \uac00\ub2a5",
        desc: "Telegram\uc73c\ub85c \uc5b4\ub514\uc11c\ub4e0 Task\ub97c \ubcf4\ub0b4\uc138\uc694. \ub0b4 AI \uad6c\ub3c5 \ud1a0\ud070\uc744 \uc0ac\uc6a9\ud558\ub2c8 \ubcc4\ub3c4 \ud50c\ub7ab\ud3fc \ube44\uc6a9\uc774 \uc5c6\uc2b5\ub2c8\ub2e4.",
      },
      {
        icon: "\ud83e\udde0",
        title: "Task\ubcc4 AI \uc120\ud0dd",
        desc: "Claude, Codex, Gemini\ub97c Task\ub9c8\ub2e4 \uc9c0\uc815\ud558\uc138\uc694. \uc791\uc5c5\uc5d0 \ub9de\ub294 AI\ub97c \uace8\ub77c \uc4f0\uace0, \uc5b8\uc81c\ub4e0 \ubcc0\uacbd \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      },
      {
        icon: "\ud83d\udcda",
        title: "\uba40\ud2f0 \ud504\ub85c\uc81d\ud2b8, \ud558\ub098\uc758 \ub300\uc2dc\ubcf4\ub4dc",
        desc: "\ubaa8\ub4e0 \ud504\ub85c\uc81d\ud2b8\ub97c \ud55c \uacf3\uc5d0\uc11c \uad00\ub9ac\ud558\uc138\uc694. Linear\ub098 Clickup\uacfc \ub2ec\ub9ac AI \uac1c\ubc1c \uc6cc\ud06c\ud50c\ub85c\uc6b0\uc5d0 \ud2b9\ud654\ub418\uc5c8\uc2b5\ub2c8\ub2e4.",
      },
      {
        icon: "\ud83d\udcca",
        title: "\ud504\ub85c\uc81d\ud2b8\ubcc4 \uc644\ubcbd\ud55c \ud2b8\ub798\ud0b9",
        desc: "\ud504\ub85c\uc81d\ud2b8\ubcc4 AI \uc0ac\uc6a9 \uc2dc\uac04, \uc644\ub8cc\ub41c \ud0dc\uc2a4\ud06c, \uc2e4\ud589 \ub85c\uadf8\ub97c \ud55c\ub208\uc5d0 \ud655\uc778\ud558\uc138\uc694. \uac00\uc2dc\uc131\uc744 \ud655\ubcf4\ud569\ub2c8\ub2e4.",
      },
    ],
  },
  features: {
    title: "\ud575\uc2ec \uc6cc\ud06c\ud50c\ub85c\uc6b0 \ub3c4\uad6c",
    subtitle: "\ub4f1\ub85d\ud558\uace0, \uc2e4\ud589\ud558\uace0, \uac80\uc99d\ud558\uc138\uc694",
    items: [
      {
        number: "01",
        icon: "\ud83d\udccb",
        title: "\ud0dc\uc2a4\ud06c \ub4f1\ub85d",
        desc: "\uc6f9 \uc571\uc5d0\uc11c inbox \ud0dc\uc2a4\ud06c\ub97c \ub9cc\ub4e4\uac70\ub098, \uc790\ub9ac\ub97c \ube44\uc6b4 \uc0c1\ud0dc\uc5d0\uc11c\ub294 Telegram\uc73c\ub85c \uc804\ub2ec\ud558\uc138\uc694.",
      },
      {
        number: "02",
        icon: "\ud83d\udd25",
        title: "Claim\ud558\uace0 \uc2e4\ud589",
        desc: "\uc5d0\uc774\uc804\ud2b8\uac00 run_state\ub85c \uc791\uc5c5\uc744 claim\ud558\uace0, \uaca9\ub9ac\ub41c worktree\uc5d0\uc11c \uad6c\ud604\ud55c \ub4a4 \uc644\ub8cc \uc2dc ready\ub85c \uc62c\ub9bd\ub2c8\ub2e4.",
      },
      {
        number: "03",
        icon: "\u2705",
        title: "Done \uc804 \uac80\uc99d",
        desc: "ready \ud0dc\uc2a4\ud06c\ub97c \uac80\ud1a0\ud558\uace0 \uccb4\ud06c\ub97c \ud1b5\uacfc\ud55c \ub4a4\uc5d0\ub9cc done\uc73c\ub85c \uc774\ub3d9\ud558\uc138\uc694.",
      },
    ],
  },
  pipeline: {
    title: "\ud604\uc7ac \uc6cc\ud06c\ud50c\ub85c\uc6b0",
    subtitle: "\ud65c\uc131 \uceec\ub7fc\uc740 5\uac1c\uc774\uace0, queued\uc640 working\uc740 \ubcc4\ub3c4\ub85c \ucd94\uc801\ud569\ub2c8\ub2e4",
    steps: [
      { id: "inbox", label: "Inbox", icon: "\ud83d\udce5" },
      { id: "todo", label: "Todo", icon: "\ud83d\uddc2\ufe0f" },
      { id: "hold", label: "Hold", icon: "\u23f8\ufe0f" },
      { id: "ready", label: "Ready", icon: "\ud83d\udc40" },
      { id: "done", label: "Done", icon: "\u2705" },
    ],
    blocked: "Run-state \uc624\ubc84\ub808\uc774",
    blockedTooltip: "queued\uc640 working\uc740 \ud0dc\uc2a4\ud06c \uc0c1\ud0dc \uc704\uc5d0 \uacb9\uccd0 \ud45c\uc2dc\ub429\ub2c8\ub2e4. \ubcc4\ub3c4 \uc6cc\ud06c\ud50c\ub85c\uc6b0 \uceec\ub7fc\uc774 \uc544\ub2d9\ub2c8\ub2e4.",
  },
  multiEngine: {
    title: "\ud0dc\uc2a4\ud06c\uc5d0 \ub9de\ub294 AI\ub97c \uc120\ud0dd\ud558\uc138\uc694",
    subtitle: "\ubca4\ub354 \ub77d\uc778 \uc5c6\uc774, \ucd5c\uc801\uc758 \ub3c4\uad6c\ub97c \uc120\ud0dd\ud558\uc138\uc694",
    engines: [
      {
        accent: "bg-charcoal", logo: "C", logoBg: "bg-charcoal",
        name: "Claude Code", company: "Anthropic",
        desc: "\ubcf5\uc7a1\ud55c \ub9ac\ud329\ud130\ub9c1, \uc544\ud0a4\ud14d\ucc98 \ubcc0\uacbd, \ubc94\uc6a9 \uc791\uc5c5\uc5d0 \uac15\ud568",
        bestFor: ["\ubc94\uc6a9 \ud0dc\uc2a4\ud06c", "\ubcf5\uc7a1\ud55c \ub9ac\ud329\ud130\ub9c1", "\uc544\ud0a4\ud14d\ucc98 \ubcc0\uacbd"],
      },
      {
        accent: "bg-mint", logo: "Cx", logoBg: "bg-mint",
        name: "Codex CLI", company: "OpenAI",
        desc: "\ucf54\ub4dc \ub9ac\ubdf0, \ubcf4\uc548 \ubd84\uc11d, \uc544\ud0a4\ud14d\ucc98 \uac80\ud1a0\uc5d0 \uac15\ud568",
        bestFor: ["\ucf54\ub4dc \ub9ac\ubdf0", "\ubcf4\uc548 \ubd84\uc11d", "\uc544\ud0a4\ud14d\ucc98 \uac80\ud1a0"],
      },
      {
        accent: "bg-review-blue", logo: "G", logoBg: "bg-review-blue",
        name: "Gemini CLI", company: "Google",
        desc: "UI/UX \ub514\uc790\uc778, \ubb38\uc11c \uc791\uc5c5, \ub300\uaddc\ubaa8 \ucee8\ud14d\uc2a4\ud2b8 \ucc98\ub9ac\uc5d0 \uac15\ud568",
        bestFor: ["UI/UX \ub514\uc790\uc778", "\ubb38\uc11c \uc791\uc5c5", "\ub300\uaddc\ubaa8 \ucee8\ud14d\uc2a4\ud2b8"],
      },
    ],
  },
  whoIsItFor: {
    title: "누가 쓸까요?",
    forYou: {
      title: "이런 분께 필요합니다",
      items: [
        { icon: "📱", title: "이동 중 아이디어", desc: "언제 어디서든 AI에 태스크를 던져요" },
        { icon: "⚡", title: "멀티 프로젝트 진행", desc: "프로젝트마다 컨텍스트 잃지 않고 코딩" },
        { icon: "🧠", title: "컨텍스트 스위칭", desc: "프리랜서라면? '여기서 뭘 했더라?' 끝" },
        { icon: "🤖", title: "엔진별 전략 운영", desc: "태스크마다 Claude, Codex, Gemini 선택" },
        { icon: "✅", title: "품질 중심 개발자", desc: "AI 결과물을 체계적으로 검수하는 개발자" },
      ],
    },
    notForYou: {
      title: "이런 분은 안 필요합니다",
      items: [
        { icon: "📋", title: "단순 이슈 트래커", desc: "Linear나 Jira를 추천합니다" },
        { icon: "👥", title: "팀 협업 도구", desc: "Notion이나 Asana를 추천합니다" },
        { icon: "🚫", title: "AI 코딩을 안 함", desc: "Preq는 AI 기반 워크플로우용이에요" },
        { icon: "🐢", title: "프로젝트 하나만", desc: "여러 프로젝트를 동적으로 운영할 때 최적" },
        { icon: "📅", title: "스프린트 관리", desc: "Jira나 Todoist를 추천합니다" },
      ],
    },
  },
  pricing: {
    title: "\ubb34\ub8cc. \uc624\ud508\uc18c\uc2a4. \uc601\uc6d0\ud788.",
    subtitle: "\ub2f9\uc2e0\uc758 \ucf54\ub4dc, \ub2f9\uc2e0\uc758 \ub370\uc774\ud130, \ub2f9\uc2e0\uc758 \uc11c\ubc84",
    price: "$0",
    priceLabel: "forever free",
    features: [
      "GitHub\uc5d0\uc11c \ucf54\ub4dc \uc804\ubd80 \uacf5\uac1c",
      "\uc790\uc2e0\uc758 \uc11c\ubc84\uc5d0 \ubc30\ud3ec \uac00\ub2a5",
      "\ucee4\ubba4\ub2c8\ud2f0\uac00 \ud568\uaed8 \ub9cc\ub4dc\ub294 \ud45c\uc900",
      "\ub370\uc774\ud130\ub294 \ub2f9\uc2e0\uc758 \uac83",
      "\ubca4\ub354 \ub77d\uc778 \uc5c6\uc74c",
    ],
    cta: "View on GitHub",
  },
  faq: {
    title: "\uc790\uc8fc \ubb3b\ub294 \uc9c8\ubb38",
    items: [
      {
        question: "AI \uacb0\uacfc\ub97c \uc2e0\ub8b0\ud560 \uc218 \uc788\ub098\uc694?",
        answer: "\ud56d\uc0c1 \ub2f9\uc2e0\uc774 \uac80\ud1a0\ud569\ub2c8\ub2e4. \uba38\uc9c0, \ubc30\ud3ec, \uc7ac\uc624\ud508 \uc5ec\ubd80\ub3c4 \uc9c1\uc811 \uacb0\uc815\ud569\ub2c8\ub2e4. work_logs\uc5d0 \ubaa8\ub4e0 \uc2e4\ud589 \uae30\ub85d\uc774 \ub0a8\uc544 \uc5b4\ub5a4 AI\uac00, \uc5b4\ub5a4 \ucf54\ub4dc\ub97c, \uc5b8\uc81c, \uc65c \uc791\uc131\ud588\ub294\uc9c0 100% \ucd94\uc801\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",
      },
      {
        question: "\ub370\uc774\ud130\ub294 \uc5b4\ub514\uc5d0 \uc800\uc7a5\ub418\ub098\uc694?",
        answer: "\ub2f9\uc2e0\uc758 \uc11c\ubc84\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. Self-hosted\ub85c \uc644\uc804\ud55c \ub370\uc774\ud130 \uc8fc\uad8c\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4. Row Level Security\uc640 AES-GCM \uc554\ud638\ud654\ub85c \ubcf4\uc548\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4.",
      },
      {
        question: "\uc5b4\ub5a4 AI\ub97c \uc0ac\uc6a9\ud558\ub098\uc694?",
        answer: "Claude Code, Codex CLI, Gemini CLI \uc911 \uc120\ud0dd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud504\ub85c\uc81d\ud2b8\ub9c8\ub2e4 \ub2e4\ub978 AI\ub97c \uc9c0\uc815\ud560 \uc218 \uc788\uc73c\uba70, \uc5b8\uc81c\ub4e0 \ubcc0\uacbd \uac00\ub2a5\ud569\ub2c8\ub2e4.",
      },
      {
        question: "\uc624\ud508\uc18c\uc2a4\ub77c\uc11c \ubcf4\uc548\uc774 \ub0ae\uc9c0 \uc54a\ub098\uc694?",
        answer: "\ubc18\ub300\uc785\ub2c8\ub2e4. \ucf54\ub4dc\uac00 \uacf5\uac1c\ub418\uc5b4 \uc788\uc5b4 \ucee4\ubba4\ub2c8\ud2f0\uac00 \uc9c1\uc811 \uac80\uc99d\ud569\ub2c8\ub2e4. Row Level Security, AES-GCM \uc554\ud638\ud654, \uaca9\ub9ac\ub41c \uc6cc\ud06c\ud2b8\ub9ac \uc2e4\ud589\uc73c\ub85c \ubcf4\uc548\uc744 \ubcf4\uc7a5\ud569\ub2c8\ub2e4.",
      },
    ],
  },
  cta: {
    title: "\uc9c0\uae08 \ub2f9\uc2e0\uc758 \uc8fc\ubc29\uc744 \uc5f4\uc5b4\ubcf4\uc138\uc694",
    subtitle: "\uac00\uc774\ub4dc\ub97c \uc77d\uace0 \uc5d0\uc774\uc804\ud2b8\ub97c \uc5f0\uacb0\ud55c \ub4a4, \uac80\uc99d\uc744 \ud1b5\uacfc\ud55c \uc791\uc5c5\ub9cc done\uc73c\ub85c \ubcf4\ub0b4\uc138\uc694.",
    primary: "\uac00\uc774\ub4dc \ubcf4\uae30",
    secondary: "View on GitHub",
  },
  footer: {
    tagline: "\uac1c\ubc1c\uc790\uc758 \uc8fc\ubc29",
    madeWith: "Built with kitchen love \ud83c\udf73",
    copyright: "\u00a9 2026 Preq Station. Open Source.",
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

export default ko;
