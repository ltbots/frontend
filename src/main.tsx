import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { Provider } from "./components/ui/provider"
import './index.css'
import App from './App.tsx'
import { init } from '@telegram-apps/sdk-react';

const initializeTelegramSDK = () => {
  try {
    init()
    console.log('Telegram SDK initialized')
  } catch (error) {
    console.error('Failed to initialize Telegram SDK:', error)
  }
}

initializeTelegramSDK()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <Provider>
      <App />
    </Provider>
  </StrictMode>,
)
