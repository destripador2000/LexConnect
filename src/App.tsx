import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Hero } from './features/landing/components/Hero'
import { Navbar } from './components/layout/Navbar'
import { FeaturesCards } from './features/landing/components/FeaturesCards'

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <main>
        <Hero />
        <FeaturesCards />
      </main>
      <Routes>
        <Route path="/" element={<div></div>} />
      </Routes>
    </BrowserRouter>
  )
}

export default App