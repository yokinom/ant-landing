import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom';
import './index.css'
import SignInScreen from './pages/SignInScreen.tsx';
import App from './App.tsx'
import DashBoard from './components/DashBoard.tsx';
import WIP from './components/WIP.tsx';

const routes = createBrowserRouter([
  {
    path: "/auth/signin",
    element: <SignInScreen />
  },
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/repositories",
        element: <DashBoard />
      },
      {
        path: "/ai-review",
        element: <WIP message='We are building....' />
      },
      {
        path: "/usages",
        element: <WIP message='We are building....' />
      },
      {
        path: "/security",
        element: <WIP message='We are building....' />
      },
      {
        path: "/settings",
        element: <WIP message='We are building....' />
      },
    ]
  },
])
createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <RouterProvider router={routes} />
  </StrictMode>,
)
