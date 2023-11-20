import React from 'react'
import ReactDOM from 'react-dom/client'
import Headers from './components/Header/Header.jsx'
import App from './App.jsx'
import Footer from './components/Footer/Footer.jsx'
import { FilterProvider } from './context/Filters.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <FilterProvider>
    <Headers />
    <App />
    <Footer />
  </FilterProvider>,
)
