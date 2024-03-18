import { createBrowserRouter } from 'react-router-dom';
import { RootLayout } from '../layouts/RootLayout';
import { Concepts } from '../views/Concepts';
import { Components } from '../views/Components';
import { Scroll } from '../views/Scroll';
import { Manifesto } from '../views/Manifesto';

const router = createBrowserRouter([
  {
    path: '/',
    element: <RootLayout />,
    children: [
      {
        path: '/',
        element: <h1>Home</h1>,
      },
      {
        path: '/concepts',
        element: <Concepts />,
      },
      {
        path: '/components',
        element: <Components />,
      },
      {
        path: '/scroll',
        element: <Scroll />,
      },
    ],
  },
  {
    path: '/manifesto',
    element: <Manifesto />,
  },
]);

export default router;
