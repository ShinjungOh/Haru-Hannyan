import { createBrowserRouter, RouterProvider } from 'react-router-dom';

import routes from './routes';
import './App.css';

const router = createBrowserRouter(routes);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
