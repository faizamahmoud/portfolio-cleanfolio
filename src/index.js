import React from 'react';
import { ThemeProvider } from './contexts/theme'
import { createRoot } from 'react-dom/client';

import App from './App';
import './index.css'

const rootElement = document.getElementById('root');
createRoot(rootElement).render(
  <ThemeProvider>
    <App />
  </ThemeProvider>
);
