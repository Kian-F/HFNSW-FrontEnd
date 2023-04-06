import React from 'react'
import ReactDOM from 'react-dom'
import { BrowserRouter as Router } from 'react-router-dom'
import { QueryClient, QueryClientProvider } from 'react-query'

import App from './App'

import Auth0ProviderWithHistory from './auth/Auth0ProviderWithHistory'

const queryClient = new QueryClient()

const productionUrl = 'https://hfnsw-front-end.vercel.app/'
const redirectUri = 'http://localhost:3001'

const baseURL = process.env.NODE_ENV === 'development' ? redirectUri : productionUrl

ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Auth0ProviderWithHistory
        application={process.env.REACT_APP_APPLICATION_NAME}
        audience={process.env.REACT_APP_AUTH0_API_AUDIENCE}
        clientId={process.env.REACT_APP_AUTH0_CLIENT_ID || ''}
        domain={process.env.REACT_APP_AUTH0_DOMAIN || ''}
        redirectUri={baseURL}
      >
        <QueryClientProvider client={queryClient}>
          <App />
        </QueryClientProvider>
      </Auth0ProviderWithHistory>
    </Router>
  </React.StrictMode>,
  document.getElementById('root')
)

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
