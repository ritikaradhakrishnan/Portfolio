/** Lightweight static Worker for the portfolio's two HTML pages. */
import { CONTACT_BODY, HOME_BODY } from "./generated-pages";
import siteStyles from "../app/globals.css?inline";

interface Env {
  ASSETS: Fetcher;
}

interface PageMetadata {
  canonical: string;
  description: string;
}

const SOCIAL_TITLE = "Ritika Radhakrishnan — Co-Founder, Merit Labs";
const SOCIAL_IMAGE = "https://ritikaradhakrishnan.com/og.png";
const SAFE_STYLES = siteStyles.replace(/<\/style/gi, "<\\/style");

function escapeAttribute(value: string): string {
  return value
    .replaceAll("&", "&amp;")
    .replaceAll('"', "&quot;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;");
}

function renderDocument(body: string, metadata: PageMetadata): string {
  const description = escapeAttribute(metadata.description);
  const canonical = escapeAttribute(metadata.canonical);

  return `<!DOCTYPE html><html lang="en"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width, initial-scale=1"><title>ЯR</title><meta name="description" content="${description}"><link rel="canonical" href="${canonical}"><meta property="og:title" content="${SOCIAL_TITLE}"><meta property="og:description" content="${description}"><meta property="og:url" content="${canonical}"><meta property="og:type" content="website"><meta property="og:image" content="${SOCIAL_IMAGE}"><meta property="og:image:width" content="1200"><meta property="og:image:height" content="630"><meta property="og:image:alt" content="${SOCIAL_TITLE}"><meta name="twitter:card" content="summary_large_image"><meta name="twitter:title" content="${SOCIAL_TITLE}"><meta name="twitter:description" content="${description}"><meta name="twitter:image" content="${SOCIAL_IMAGE}"><link rel="shortcut icon" href="/favicon.svg"><link rel="icon" href="/favicon.svg"><style data-site-styles>${SAFE_STYLES}</style></head><body>${body}</body></html>`;
}

const HOME_HTML = renderDocument(HOME_BODY, {
  canonical: "https://ritikaradhakrishnan.com/",
  description:
    "Co-founder of Merit Labs and researcher in trustworthy AI, measurement-aware machine learning, sensor fusion, and cross-cohort explainability.",
});

const CONTACT_HTML = renderDocument(CONTACT_BODY, {
  canonical: "https://ritikaradhakrishnan.com/contact",
  description: "Connect with Ritika Radhakrishnan on LinkedIn, GitHub, or by email.",
});

function pageResponse(request: Request, html: string): Response {
  return new Response(request.method === "HEAD" ? null : html, {
    headers: {
      "Cache-Control": "public, max-age=300, stale-while-revalidate=86400",
      "Cloudflare-CDN-Cache-Control": "public, max-age=3600, stale-while-revalidate=86400",
      "Content-Type": "text/html; charset=utf-8",
    },
  });
}

const worker = {
  async fetch(request: Request, env?: Env): Promise<Response> {
    const url = new URL(request.url);
    const pathname = url.pathname.length > 1 ? url.pathname.replace(/\/+$/, "") : "/";

    if (request.method === "GET" || request.method === "HEAD") {
      if (pathname === "/") return pageResponse(request, HOME_HTML);
      if (pathname === "/contact") return pageResponse(request, CONTACT_HTML);
    }

    if (env?.ASSETS) return env.ASSETS.fetch(request);
    return new Response("Not found", { status: 404 });
  },
};

export default worker;
