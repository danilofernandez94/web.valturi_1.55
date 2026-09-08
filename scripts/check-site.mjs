import assert from 'node:assert/strict';
import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { fileURLToPath } from 'node:url';
import path from 'node:path';

const root = fileURLToPath(new URL('../dist/', import.meta.url));
const base = 'https://web-valturi-1-55.vercel.app/';
const walk = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => entry.isDirectory() ? walk(path.join(dir, entry.name)) : [path.join(dir, entry.name)]);
const attrs = (tag) => Object.fromEntries([...tag.matchAll(/([\w:-]+)\s*=\s*(["'])(.*?)\2/g)].map((match) => [match[1], match[3]]));
const sitemap = readFileSync(path.join(root, 'sitemap.xml'), 'utf8');
const urls = [...sitemap.matchAll(/<loc>(.*?)<\/loc>/g)].map((match) => match[1]);
assert.equal(urls.length, 32);
assert.equal(new Set(urls).size, urls.length);
let checkedLinks = 0;
const titles = new Set();

for (const file of walk(root).filter((file) => file.endsWith('.html'))) {
  const html = readFileSync(file, 'utf8');
  const relative = path.relative(root, file).split(path.sep).join('/');
  const expectedUrl = new URL(relative === 'index.html' ? '' : relative, base).href;
  const metas = [...html.matchAll(/<meta\b[^>]*>/g)].map((match) => attrs(match[0]));
  const robots = metas.filter((meta) => meta.name === 'robots');
  assert.equal(robots.length, 1, `${relative}: one robots directive`);
  const indexed = !robots[0].content.includes('noindex');
  assert.equal(urls.includes(expectedUrl), indexed, `${relative}: sitemap agrees with indexing`);
  const canonical = [...html.matchAll(/<link\b[^>]*>/g)].map((match) => attrs(match[0])).filter((link) => link.rel === 'canonical');
  assert.equal(canonical.length, 1, `${relative}: one canonical`);
  assert.equal(canonical[0].href, expectedUrl);
  assert.equal(metas.filter((meta) => meta.name === 'description').length, 1);
  const title = html.match(/<title>(.*?)<\/title>/)?.[1];
  assert.ok(title && !titles.has(title), `${relative}: unique title`);
  titles.add(title);
  if (indexed) {
    assert.equal((html.match(/<h1\b/g) || []).length, 1, `${relative}: H1 available without JavaScript`);
    assert.ok(html.includes('analytics.js'), `${relative}: analytics present`);
    const blocks = [...html.matchAll(/<script\b[^>]*type="application\/ld\+json"[^>]*>([\s\S]*?)<\/script>/g)];
    assert.equal(blocks.length, 1, `${relative}: one structured-data graph`);
    const graph = JSON.parse(blocks[0][1])['@graph'];
    assert.ok(graph.some((node) => node['@type'] === 'LocalBusiness'));
    assert.ok(graph.some((node) => node.url === expectedUrl));
    assert.ok(!blocks[0][1].includes('InStock'), 'No unverified stock claim');
  }
  for (const match of html.matchAll(/<(?:a|link|img|script|source|base)\b[^>]*>/g)) {
    const tag = attrs(match[0]);
    const refs = [tag.href, tag.src, ...(tag.srcset || '').split(',').map((part) => part.trim().split(/\s+/)[0])].filter(Boolean);
    for (const ref of refs) {
      const url = new URL(ref.replaceAll('&amp;', '&'), base);
      if (url.origin !== new URL(base).origin || !['http:', 'https:'].includes(url.protocol)) continue;
      const target = path.join(root, decodeURIComponent(url.pathname === '/' ? '/index.html' : url.pathname));
      assert.ok(existsSync(target), `${relative}: missing ${ref}`);
      checkedLinks++;
    }
  }
}
assert.ok(readFileSync(path.join(root, 'materiales.html'), 'utf8').includes('/materiales/pana-panne.html'));
assert.ok(readFileSync(path.join(root, 'productos.html'), 'utf8').includes('/productos/silla-nordica-lino.html'));
const robots = readFileSync(path.join(root, 'robots.txt'), 'utf8');
assert.match(robots, /User-agent: \*\s+Allow: \//);
console.log(`Validated ${urls.length} indexable pages, canonical URLs, JSON-LD and ${checkedLinks} local references.`);
