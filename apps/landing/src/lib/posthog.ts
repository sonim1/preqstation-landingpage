/**
 * Thin wrapper around the posthog-js browser snippet loaded by PostHog.astro.
 * Silently no-ops when PostHog is not available (e.g. during SSR or if blocked).
 */
export function capture(event: string, properties?: Record<string, unknown>): void {
  if (typeof window === "undefined") return;
  const ph = (window as unknown as { posthog?: { capture: (e: string, p?: Record<string, unknown>) => void } }).posthog;
  ph?.capture(event, properties);
}
