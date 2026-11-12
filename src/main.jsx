import { StrictMode } from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx';

const root = document.getElementById('root');
const app = (
  <StrictMode>
    <BrowserRouter><App /></BrowserRouter>
  </StrictMode>
);
// Pages are prerendered at build time, so hydrate when HTML is already there.
if (root.firstElementChild) hydrateRoot(root, app);
else createRoot(root).render(app);
