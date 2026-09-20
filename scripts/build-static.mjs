import { cp, mkdir, writeFile, access } from 'node:fs/promises';
const root = new URL('../', import.meta.url);
const source = new URL('portfolio-brand/dist/', root);
await access(new URL('index.html', source));
await access(new URL('projects/bbss/index.html', source));
await access(new URL('projects/cosmetics-product-launch/index.html', source));
await mkdir(new URL('dist/server/', root), { recursive: true });
await cp(source, new URL('dist/client/', root), { recursive: true });
await writeFile(new URL('dist/server/wrangler.json', root), JSON.stringify({
  name: 'portfolio',
  compatibility_date: '2026-09-20',
  assets: { directory: '../client', html_handling: 'auto-trailing-slash', not_found_handling: '404-page' }
}, null, 2) + '\n');
console.log('Static portfolio ready: portfolio-brand/dist (legacy deploy path also supported).');
