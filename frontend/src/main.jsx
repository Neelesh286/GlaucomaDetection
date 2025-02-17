import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import ImageUploadComponent from '../components/ImageUploadComponent.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <App />
    <ImageUploadComponent />
  </React.StrictMode>,
)
