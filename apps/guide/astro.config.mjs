import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';
import starlight from '@astrojs/starlight';

const posthogKey = process.env.PUBLIC_POSTHOG_KEY;
const posthogHost = process.env.PUBLIC_POSTHOG_HOST ?? 'https://t.preqstation.com';
const posthogConsent = () => ({
  name: 'preqstation-posthog-consent',
  hooks: {
    'astro:config:setup': ({ injectScript }) => {
      if (!posthogKey) return;

      injectScript('page', `
import * as CookieConsent from 'vanilla-cookieconsent';
import 'vanilla-cookieconsent/dist/cookieconsent.css';

const posthogKey = ${JSON.stringify(posthogKey)};
const posthogHost = ${JSON.stringify(posthogHost)};

function loadPostHog() {
  if (window.__posthog_initialized) return;
  window.__posthog_initialized = true;
  !function(t,e){var o,n,p,r;e.__SV||(window.posthog=e,e._i=[],e.init=function(i,s,a){function g(t,e){var o=e.split(".");2==o.length&&(t=t[o[0]],e=o[1]),t[e]=function(){t.push([e].concat(Array.prototype.slice.call(arguments,0)))}}(p=t.createElement("script")).type="text/javascript",p.crossOrigin="anonymous",p.async=!0,p.src=s.api_host.replace(".i.posthog.com","-assets.i.posthog.com")+"/static/array.js",(r=t.getElementsByTagName("script")[0]).parentNode.insertBefore(p,r);var u=e;for(void 0!==a?u=e[a]=[]:a="posthog",u.people=u.people||[],u.toString=function(t){var e="posthog";return"posthog"!==a&&(e+="."+a),t||(e+=" (stub)"),e},u.people.toString=function(){return u.toString(1)+".people (stub)"},o="init capture register register_once register_for_session unregister unregister_for_session getFeatureFlag getFeatureFlagPayload isFeatureEnabled reloadFeatureFlags updateEarlyAccessFeatureEnrollment getEarlyAccessFeatures on onFeatureFlags onSessionId getSurveys getActiveMatchingSurveys renderSurvey canRenderSurvey getNextSurveyStep identify setPersonProperties group resetGroups setPersonPropertiesForFlags resetPersonPropertiesForFlags reset get_distinct_id getGroups get_session_id get_session_replay_url alias set_config startSessionRecording stopSessionRecording sessionRecordingStarted captureException loadToolbar get_property getSessionProperty createPersonProfile opt_in_capturing opt_out_capturing has_opted_in_capturing has_opted_out_capturing clear_opt_in_out_capturing debug".split(" "),n=0;n<o.length;n++)g(u,o[n]);e._i.push([i,s,a])},e.__SV=1)}(document,window.posthog||[]);
  posthog.init(posthogKey, {
    api_host: posthogHost,
    ui_host: 'https://us.posthog.com',
    defaults: '2026-01-30',
    capture_pageview: 'history_change',
    disable_session_recording: true,
    persistence: 'memory'
  });
}

function syncAnalyticsConsent() {
  if (CookieConsent.acceptedCategory('analytics')) {
    loadPostHog();
    window.posthog?.opt_in_capturing?.();
  } else {
    window.posthog?.opt_out_capturing?.();
  }
}

window.preqstationShowCookiePreferences = () => CookieConsent.showPreferences();

CookieConsent.run({
  mode: 'opt-in',
  cookie: {
    name: 'preqstation_cookie_consent',
    expiresAfterDays: 180
  },
  guiOptions: {
    consentModal: {
      layout: 'box',
      position: 'bottom right',
      equalWeightButtons: true
    },
    preferencesModal: {
      layout: 'box',
      equalWeightButtons: true
    }
  },
  categories: {
    necessary: {
      enabled: true,
      readOnly: true
    },
    analytics: {}
  },
  onConsent: syncAnalyticsConsent,
  onChange: syncAnalyticsConsent,
  language: {
    default: 'en',
    translations: {
      en: {
        consentModal: {
          title: 'Analytics preferences',
          description: 'We use privacy-minded analytics to learn what helps visitors. No session recording. You can accept or reject analytics.',
          acceptAllBtn: 'Accept analytics',
          acceptNecessaryBtn: 'Reject',
          showPreferencesBtn: 'Manage preferences',
          footer: '<a href="/privacy/">Privacy Policy</a>'
        },
        preferencesModal: {
          title: 'Cookie preferences',
          acceptAllBtn: 'Accept analytics',
          acceptNecessaryBtn: 'Reject analytics',
          savePreferencesBtn: 'Save preferences',
          closeIconLabel: 'Close',
          sections: [
            {
              title: 'Strictly necessary',
              description: 'Required to remember your consent choice.',
              linkedCategory: 'necessary'
            },
            {
              title: 'Analytics',
              description: 'Helps us understand page visits through PostHog. Session recording is disabled.',
              linkedCategory: 'analytics'
            }
          ]
        }
      }
    }
  }
});
`);
    },
  },
});

export default defineConfig({
  site: 'https://preqstation.com',
  base: '/guide',
  trailingSlash: 'always',
  integrations: [
    sitemap(),
    posthogConsent(),
    starlight({
      title: 'PreqStation Guide',
      favicon: '/favicon.png',
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
          tag: 'link',
          attrs: {
            rel: 'icon',
            type: 'image/webp',
            href: '/guide/favicon.webp',
          },
        },
        {
          tag: 'script',
          content: `(function(){if(!localStorage.getItem('starlight-theme')){localStorage.setItem('starlight-theme','dark');document.documentElement.setAttribute('data-theme','dark');}})();`,
        },
        {
          tag: 'script',
          content: `(function(){if('scrollRestoration'in history){history.scrollRestoration='manual';}function resetGuideScroll(){if(window.location.hash)return;window.requestAnimationFrame(function(){window.scrollTo(0,0);});}window.addEventListener('pageshow',resetGuideScroll);document.addEventListener('astro:page-load',resetGuideScroll);})();`,
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
              label: 'Philosophy',
              translations: {
                ko: '철학',
              },
              slug: 'getting-started/philosophy',
            },
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
              label: 'PREQ CLI',
              translations: {
                ko: 'PREQ CLI',
              },
              slug: 'getting-started/preq-cli',
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
              label: 'Database Migration',
              translations: {
                ko: '데이터베이스 마이그레이션',
              },
              slug: 'web-app/database-migration',
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
              label: 'Worker Installation',
              translations: {
                ko: '워커 설치',
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
          label: 'Advanced',
          translations: {
            ko: '고급',
          },
          items: [
            {
              label: 'Fast.io Review Artifacts',
              translations: {
                ko: 'Fast.io 리뷰 아티팩트',
              },
              slug: 'advanced/fastio',
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
