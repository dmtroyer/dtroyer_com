/** Basic Cloudflare Worker for serving resume via Assets binding.
 * Deliberately minimal: root path maps to /index.html, all other paths
 * are fetched directly from the assets binding. No custom 404 or fallbacks.
 */
// Minimal typing for assets binding (avoids dependency on specific Fetcher type)
export interface Env { ASSETS: { fetch(input: RequestInfo, init?: RequestInit): Promise<Response> } }

export default {
  async fetch(request, env) {
    const url = new URL(request.url);
    const pathname = (url.pathname === '/' || url.pathname === '') ? '/index.html' : url.pathname;
    return env.ASSETS.fetch(new Request(new URL(pathname, request.url), request));
  },
};
