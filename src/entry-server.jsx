import { StrictMode } from 'react';
import { renderToString } from 'react-dom/server';
import { StaticRouter } from 'react-router-dom';
import App from './App.jsx';

globalThis.__AUVRA_HTML__ = import.meta.glob('./content/html/*.html', { query: '?raw', import: 'default', eager: true });
for (const k of Object.keys(globalThis.__AUVRA_HTML__)) globalThis.__AUVRA_HTML__[k.replace('./', '../')] = globalThis.__AUVRA_HTML__[k];
export { routes, notFound, metaFor, SITE } from './routes.jsx';

export function render(url) {
  return renderToString(
    <StrictMode>
      <StaticRouter location={url}><App /></StaticRouter>
    </StrictMode>
  );
}
