(() => {
  'use strict';
  const data = window.portfolio || {};
  const element = (tag, className, text) => { const el = document.createElement(tag); if (className) el.className = className; if (text) el.textContent = text; return el; };
  const safeURL = value => { try { const url = new URL(value, document.baseURI); return ['https:', 'http:'].includes(url.protocol) ? url.href : null; } catch { return null; } };
  document.querySelector('#year').textContent = new Date().getFullYear();
  if (data.bio) document.querySelector('#bio').textContent = data.bio;
  if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
    const link = element('a', 'email-link', data.email); link.href = 'mailto:' + data.email;
    document.querySelector('#contact-details').replaceChildren(link);
  }
  if (data.resume && safeURL(data.resume)) { const link = document.querySelector('#resume'); link.href = safeURL(data.resume); link.hidden = false; }
  if (Array.isArray(data.projects) && data.projects.length) {
    const projects = data.projects.filter(p => p.title);
    if (projects.length) document.querySelector('#projects').replaceChildren(...projects.map((p, index) => {
      const card = element('article', 'project' + (index % 2 ? ' project-offset' : ''));
      if (p.image && safeURL(p.image)) { const img = element('img', 'project-image'); img.src = safeURL(p.image); img.alt = p.alt || ''; img.loading = 'lazy'; img.width = 1200; img.height = 845; card.append(img); }
      if (!p.image) { const art = element('div', 'art art-film'); art.setAttribute('aria-hidden', 'true'); const frame = element('div', 'frame'); frame.append(element('span', '', 'FC')); art.append(frame, element('span', 'art-note', 'Short film')); card.append(art); }
      const caption = element('div', 'project-caption'); const info = element('div');
      info.append(element('p', 'eyebrow', [p.category, p.role, p.year].filter(Boolean).join(' / ')), element('h3', '', p.title)); caption.append(info);
      if (p.url && safeURL(p.url)) { const link = element('a', 'text-link', 'View project ↗'); link.href = safeURL(p.url); link.setAttribute('aria-label', 'View ' + p.title); caption.append(link); }
      card.append(caption); if (p.description) card.append(element('p', 'project-description', p.description)); return card;
    }));
  }
  if (data.reelEmbed) {
    try {
      const url = new URL(data.reelEmbed);
      if (url.protocol === 'https:' && ((url.hostname === 'www.youtube-nocookie.com' && /^\/embed\/[\w-]+$/.test(url.pathname)) || (url.hostname === 'player.vimeo.com' && /^\/video\/\d+$/.test(url.pathname)))) {
        const section = document.querySelector('#reel'); const iframe = element('iframe'); iframe.src = url.href; iframe.title = 'Natalie Slaiman showreel'; iframe.loading = 'lazy'; iframe.allow = 'fullscreen; picture-in-picture'; iframe.allowFullscreen = true;
        section.append(element('h2', '', 'Showreel'), iframe); section.hidden = false;
        const link = document.querySelector('.hero-bottom .text-link'); link.href = '#reel'; link.textContent = 'Watch the reel ↗';
      }
    } catch { /* Leave the reel hidden until a supported URL is supplied. */ }
  }
})();
