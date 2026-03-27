import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://preqstation.com',
  base: '/guide',
  integrations: [
    sitemap(),
    starlight({
      title: 'PREQSTATION Guide',
      customCss: ['./src/styles/custom.css'],
      defaultLocale: 'root',
      locales: {
        root: {
          label: 'English',
          lang: 'en',
        },
        ko: {
          label: '한국어',
          lang: 'ko',
        },
      },
      head: [
        {
          tag: 'script',
          content: `(function(){if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.setAttribute('data-theme','dark');}})();`,
        },
      ],
      social: {
        github: 'https://github.com/sonim1/preqstation',
      },
      sidebar: [
        {
          label: 'Getting Started',
          translations: {
            ko: '시작하기',
          },
          items: [
            {
              label: 'Overview',
              translations: {
                ko: '개요',
              },
              slug: 'getting-started/overview',
            },
            {
              label: 'Quick Start',
              translations: {
                ko: '빠른 시작',
              },
              slug: 'getting-started/quick-start',
            },
            {
              label: 'Concepts',
              translations: {
                ko: '핵심 개념',
              },
              slug: 'getting-started/concepts',
            },
          ],
        },
        {
          label: 'Web App',
          translations: {
            ko: '웹 앱',
          },
          items: [
            {
              label: 'Web App Setup',
              translations: {
                ko: '웹 앱 설정',
              },
              slug: 'web-app/setup',
            },
            {
              label: 'Kanban Board',
              translations: {
                ko: '칸반 보드',
              },
              slug: 'web-app/kanban',
            },
            {
              label: 'API Keys',
              translations: {
                ko: 'API 키',
              },
              slug: 'web-app/api-keys',
            },
            {
              label: 'Telegram',
              translations: {
                ko: '텔레그램',
              },
              slug: 'web-app/telegram',
            },
            {
              label: 'Security',
              translations: {
                ko: '보안',
              },
              slug: 'web-app/security',
            },
          ],
        },
        {
          label: 'Skill & MCP',
          translations: {
            ko: '스킬 및 MCP',
          },
          items: [
            {
              label: 'Installation',
              translations: {
                ko: '설치',
              },
              slug: 'skill/installation',
            },
            {
              label: 'MCP Tools',
              translations: {
                ko: 'MCP 도구',
              },
              slug: 'skill/mcp-tools',
            },
            {
              label: 'Shell Helpers',
              translations: {
                ko: '셸 헬퍼',
              },
              slug: 'skill/shell-helpers',
            },
            {
              label: 'Deploy Strategy',
              translations: {
                ko: '배포 전략',
              },
              slug: 'skill/deploy-strategy',
            },
          ],
        },
        {
          label: 'OpenClaw',
          translations: {
            ko: 'OpenClaw',
          },
          items: [
            {
              label: 'OpenClaw Setup',
              translations: {
                ko: 'OpenClaw 설정',
              },
              slug: 'openclaw/setup',
            },
            {
              label: 'Execution',
              translations: {
                ko: '실행',
              },
              slug: 'openclaw/execution',
            },
            {
              label: 'Progress Modes',
              translations: {
                ko: '진행 모드',
              },
              slug: 'openclaw/progress-modes',
            },
            {
              label: 'Examples',
              translations: {
                ko: '예시',
              },
              slug: 'openclaw/examples',
            },
          ],
        },
        {
          label: 'API Reference',
          translations: {
            ko: 'API 레퍼런스',
          },
          items: [
            {
              label: 'REST API',
              translations: {
                ko: 'REST API',
              },
              slug: 'api/rest-api',
            },
            {
              label: 'Task Lifecycle',
              translations: {
                ko: '작업 수명 주기',
              },
              slug: 'api/task-lifecycle',
            },
            {
              label: 'Authentication',
              translations: {
                ko: '인증',
              },
              slug: 'api/authentication',
            },
            {
              label: 'Events',
              translations: {
                ko: '이벤트',
              },
              slug: 'api/events',
            },
          ],
        },
        {
          label: 'Reference',
          translations: {
            ko: '참고 자료',
          },
          items: [
            {
              label: 'Environment Variables',
              translations: {
                ko: '환경 변수',
              },
              slug: 'reference/environment-variables',
            },
            {
              label: 'Database Schema',
              translations: {
                ko: '데이터베이스 스키마',
              },
              slug: 'reference/database-schema',
            },
            {
              label: 'Troubleshooting',
              translations: {
                ko: '문제 해결',
              },
              slug: 'reference/troubleshooting',
            },
          ],
        },
      ],
    }),
  ],
});
