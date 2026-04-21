import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import { LandingPage } from './pages/LandingPage'
import { DirectoryPage } from './pages/DirectoryPage'
import { LawyerProfile } from './components/lawyer/LawyerProfile'

const router = createBrowserRouter([
  {
    path: '/',
    element: <LandingPage />,
  },
  {
    path: '/directorio',
    element: <DirectoryPage />,
  },
  {
    path: '/perfil/:id',
    element: <LawyerProfile />,
  },
])

function App() {
  return <RouterProvider router={router} />
}

export default App