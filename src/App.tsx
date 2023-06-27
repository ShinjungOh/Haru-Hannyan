import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import './App.css';
import routes from './routes';
import { counterStore } from './lib/store/counterStore';

const router = createBrowserRouter(routes);

export default function App() {
  const [count, increase, decrease] = counterStore((state) => [state.count, state.increase, state.decrease]);

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
