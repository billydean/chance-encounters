import * as React from 'react';
import * as ReactDOMClient from 'react-dom/client';
import App from './App';
import './style/reset.css';
import './style/style.css';

const container = document.getElementById('root');

if (!container) throw new Error('Failed to find the root element');

const root = ReactDOMClient.createRoot(container);

root.render(<App/>)