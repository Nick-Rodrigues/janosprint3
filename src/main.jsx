import React from 'react'
import ReactDOM from 'react-dom/client'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'

import App from './App.jsx'
import Error from "./routes/Error/index.jsx"
import Etapas from "./routes/Etapas/index.jsx"
import Home from "./routes/Home/index.jsx"
import Integrantes from './routes/Integrantes/index.jsx'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
)
