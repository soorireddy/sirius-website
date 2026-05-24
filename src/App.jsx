import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { DemoModalProvider } from './context/DemoModalContext'
import HomePage from './pages/HomePage'
import ProductsPage from './pages/ProductsPage'
import DocsPage from './pages/DocsPage'

export default function App() {
  return (
    <BrowserRouter>
      <DemoModalProvider>
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/products" element={<ProductsPage />} />
          <Route path="/docs" element={<DocsPage />} />
        </Routes>
      </DemoModalProvider>
    </BrowserRouter>
  )
}
