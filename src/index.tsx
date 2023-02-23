// Core
import React from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter } from 'react-router-dom';

// View
import { App } from './view';

const Root = () => {
    return (
        <BrowserRouter>
            <App />
        </BrowserRouter>
    );
};

const container = document.getElementById('app');

if (container) {
    const root = createRoot(container);
    root.render(<Root />);
}
