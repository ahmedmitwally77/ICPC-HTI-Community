import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContextProvider } from './Context/AuthContext';
// import { CodeForcesContextStandingProvider } from './Context/CodeForcesStandingContext';
import { QueryClient, QueryClientProvider } from 'react-query';

const queryClient = new QueryClient();
const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(

  // <CodeForcesContextStandingProvider>
  <AuthContextProvider>
      <React.StrictMode>
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
      </React.StrictMode>
    </AuthContextProvider>
  // </CodeForcesContextStandingProvider>
);

reportWebVitals();
