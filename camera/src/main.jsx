//https://preview.themeforest.net/item/flone-react-js-ecommerce-template/full_screen_preview/25554712?_ga=2.32353406.1560093334.1731391167-521901297.1731391167
import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.min.js'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
