import { Routes, Route } from 'react-router-dom';
import Layout from './components/Layout.jsx';
import { routes, notFound } from './routes.jsx';
import './styles/global.css';
import './styles/pages.css';

export default function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        {routes.map(({ path, Component }) => <Route key={path} path={path} element={<Component />} />)}
        <Route path="*" element={<notFound.Component />} />
      </Route>
    </Routes>
  );
}
