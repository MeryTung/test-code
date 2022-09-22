import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App'
import Counter from './Counter'
import Container from './useRef'
import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <React.StrictMode>
    <App />
    <Counter />
    <Container />
  </React.StrictMode>
)
