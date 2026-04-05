import { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

const SITE_URL = 'https://www.cheapflightradar.com';
const SITE_NAME = 'CheapFlightRadar';
const DEFAULT_IMAGE =
  'https://images.unsplash.com/photo-1436491865332-7a61a109cc05?w=1200&q=80&fm=jpg';
const DEFAULT_DESC =
  "Budget travel tips, destination guides, and flight deal alerts for curious travelers, wherever you're headed.";

function setMetaN(name, content) {
  let el = document.querySelector(`meta[name="${name}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('name', name);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setMetaP(property, content) {
  let el = document.querySelector(`meta[property="${property}"]`);
  if (!el) {
    el = document.createElement('meta');
    el.setAttribute('property', property);
    document.head.appendChild(el);
  }
  el.setAttribute('content', content);
}

function setCanonical(href) {
  let el = document.querySelector('link[rel="canonical"]');
  if (!el) {
    el = document.createElement('link');
    el.setAttribute('rel', 'canonical');
    document.head.appendChild(el);
  }
  el.setAttribute('href', href);
}

/**
 * SeoHead — dynamically updates <title>, meta description, OG tags,
 * Twitter Card, canonical URL, and optional JSON-LD structured data.
 *
 * Props:
 *   title       {string}  page title (site name appended automatically)
 *   description {string}  meta description (under 160 chars)
 *   image       {string}  absolute URL for OG/Twitter image
 *   type        {string}  og:type — "website" (default) or "article"
 *   jsonLd      {object}  schema.org structured data object (or null)
 */
export function SeoHead({
  title,
  description = DEFAULT_DESC,
  image = DEFAULT_IMAGE,
  type = 'website',
  jsonLd = null,
}) {
  const { pathname } = useLocation();
  const canonicalUrl = `${SITE_URL}${pathname}`;
  const fullTitle = `${title} — ${SITE_NAME}`;
  const ogImage = image.startsWith('http') ? image : `${SITE_URL}${image}`;
  // Stringify for stable dep comparison — prevents re-runs when same-value new
  // objects are passed on each render (no useMemo required at call sites).
  const ldString = jsonLd ? JSON.stringify(jsonLd) : null;

  useEffect(() => {
    // ── Title ────────────────────────────────────────────────────
    document.title = fullTitle;

    // ── Standard meta ────────────────────────────────────────────
    setMetaN('description', description);

    // ── Canonical ────────────────────────────────────────────────
    setCanonical(canonicalUrl);

    // ── Open Graph ───────────────────────────────────────────────
    setMetaP('og:title', fullTitle);
    setMetaP('og:description', description);
    setMetaP('og:url', canonicalUrl);
    setMetaP('og:image', ogImage);
    setMetaP('og:type', type);
    setMetaP('og:site_name', SITE_NAME);

    // ── Twitter Card ─────────────────────────────────────────────
    setMetaN('twitter:card', 'summary_large_image');
    setMetaN('twitter:title', fullTitle);
    setMetaN('twitter:description', description);
    setMetaN('twitter:image', ogImage);

    // ── JSON-LD structured data ──────────────────────────────────
    const ldId = '__cfr_ld__';
    let ldEl = document.getElementById(ldId);
    if (ldString) {
      if (!ldEl) {
        ldEl = document.createElement('script');
        ldEl.id = ldId;
        ldEl.type = 'application/ld+json';
        document.head.appendChild(ldEl);
      }
      ldEl.textContent = ldString;
    } else if (ldEl) {
      ldEl.remove();
    }
  }, [fullTitle, description, ogImage, canonicalUrl, type, ldString]);

  return null;
}
