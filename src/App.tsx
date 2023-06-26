import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import routes from './routes';
import { useStore } from './lib/store/store';

const router = createBrowserRouter(routes);

export default function App() {
  const { count, increase, decrease } = useStore;

  return (
    <>
      <RouterProvider router={router} />
      <button type="button" onClick={increase}>
        +
      </button>
      <div>count : {count}</div>
      <button type="button" onClick={decrease}>
        -
      </button>
    </>
  );
}
