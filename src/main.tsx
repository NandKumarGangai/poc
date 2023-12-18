import React from 'react'
import ReactDOM from 'react-dom/client'
import Page1 from './page1/Page1.tsx'
import './index.css'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import MyRoutes from './MyRoutes.tsx';
import Page2 from './page2/Page2.tsx';
import Page3 from './page3/Page3.tsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <MyRoutes />,
    children: [
      {
        path: 'page1',
        index: true,
        element: <Page1 />,
      },
      {
        path: 'page2',
        element: <Page2 />
      },
      {
        path: 'page3',
        element: <Page3 />
      }
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
