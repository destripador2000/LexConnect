import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { DirectoryPage } from './pages/DirectoryPage'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/directorio',
    element: <DirectoryPage />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App