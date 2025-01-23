import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import '@fortawesome/fontawesome-free/css/all.min.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { AuthContextProvider } from './Context/AuthContext';
// import { CodeForcesContextStandingProvider } from './Context/CodeForcesStandingContext';


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(


  // <CodeForcesContextStandingProvider>
    <AuthContextProvider>
    <React.StrictMode>
      <App />
    </React.StrictMode>
    </AuthContextProvider>
  // </CodeForcesContextStandingProvider>
);

reportWebVitals();
