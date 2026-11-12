// Usage: node scripts/shots.cjs <baseUrl> <outDir> [path]
const { chromium, devices } = require('playwright');
const [,, base = 'http://localhost:4321', out = 'shots', path = '/'] = process.argv;
(async () => {
  const b = await chromium.launch();
  const vps = [
    { name: 'desktop', opts: { viewport: { width: 1440, height: 900 }, deviceScaleFactor: 1 } },
    { name: 'phone-390', opts: { viewport: { width: 390, height: 844 }, deviceScaleFactor: 1, isMobile: true, hasTouch: true } },
  ];
  for (const v of vps) {
    const ctx = await b.newContext(v.opts);
    const p = await ctx.newPage();
    const errs = [];
    p.on('console', (m) => m.type() === 'error' && errs.push(m.text()));
    p.on('pageerror', (e) => errs.push(e.message));
    p.on('response', (r) => r.status() >= 400 && errs.push(r.status() + ' ' + r.url()));
    await p.goto(base + path, { waitUntil: 'networkidle' });
    const h = await p.evaluate(() => document.documentElement.scrollHeight);
    for (let y = 0; y < h; y += 500) { await p.evaluate((y) => scrollTo(0, y), y); await p.waitForTimeout(120); }
    await p.evaluate(() => scrollTo(0, 0)); await p.waitForTimeout(600);
    const ov = await p.evaluate(() => ({ sw: document.documentElement.scrollWidth, iw: innerWidth }));
    await p.screenshot({ path: `${out}/${v.name}.png`, fullPage: true });
    console.log(v.name, JSON.stringify(ov), 'height', h, 'errors', JSON.stringify(errs.slice(0, 8)));
    await ctx.close();
  }
  await b.close();
})();
