import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

export default defineConfig({
  site: 'https://preqstation.com',
  base: '/guide',
  legacy: { collections: true },
  integrations: [
    sitemap(),
    starlight({
      title: 'PREQSTATION Guide',
      customCss: ['./src/styles/custom.css'],
      head: [
        {
          tag: 'script',
          content: `(function(){if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.setAttribute('data-theme','dark');}})();`,
        },
      ],
      social: {
        github: 'https://github.com/preq',
      },
      sidebar: [
        {
          label: 'Getting Started',
          items: [
            { label: 'Overview', slug: 'getting-started/overview' },
            { label: 'Quick Start', slug: 'getting-started/quick-start' },
            { label: 'Concepts', slug: 'getting-started/concepts' },
          ],
        },
        {
          label: 'Web App',
          items: [
            { label: 'Setup', slug: 'web-app/setup' },
            { label: 'Kanban Board', slug: 'web-app/kanban' },
            { label: 'API Keys', slug: 'web-app/api-keys' },
            { label: 'Telegram', slug: 'web-app/telegram' },
            { label: 'Security', slug: 'web-app/security' },
          ],
        },
        {
          label: 'Skill & MCP',
          items: [
            { label: 'Installation', slug: 'skill/installation' },
            { label: 'MCP Tools', slug: 'skill/mcp-tools' },
            { label: 'Shell Helpers', slug: 'skill/shell-helpers' },
            { label: 'Deploy Strategy', slug: 'skill/deploy-strategy' },
          ],
        },
        {
          label: 'OpenClaw',
          items: [
            { label: 'Setup', slug: 'openclaw/setup' },
            { label: 'Execution', slug: 'openclaw/execution' },
            { label: 'Progress Modes', slug: 'openclaw/progress-modes' },
            { label: 'Examples', slug: 'openclaw/examples' },
          ],
        },
        {
          label: 'API Reference',
          items: [
            { label: 'REST API', slug: 'api/rest-api' },
            { label: 'Task Lifecycle', slug: 'api/task-lifecycle' },
            { label: 'Authentication', slug: 'api/authentication' },
            { label: 'Events', slug: 'api/events' },
          ],
        },
        {
          label: 'Reference',
          items: [
            { label: 'Environment Variables', slug: 'reference/environment-variables' },
            { label: 'Database Schema', slug: 'reference/database-schema' },
            { label: 'Troubleshooting', slug: 'reference/troubleshooting' },
          ],
        },
      ],
    }),
  ],
});
