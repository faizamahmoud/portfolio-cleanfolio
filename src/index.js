import { ThemeProvider } from './contexts/theme'
import './index.css'
import React from 'react';
import { createRoot } from 'react-dom/client';

import App from './App';

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
